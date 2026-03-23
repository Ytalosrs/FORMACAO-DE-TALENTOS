-- Tabela de estudantes
CREATE TABLE students (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de progresso do usuário (JSON Blob para sincronia simples)
CREATE TABLE user_progress (
  user_id TEXT PRIMARY KEY,
  state_json JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de tentativas de provas
CREATE TABLE attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  module_code TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('MODULO', 'REFORCO')),
  total_questions INTEGER NOT NULL,
  wrong_answers INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de estatísticas por questão
CREATE TABLE question_stats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  module_code TEXT NOT NULL,
  question_id TEXT NOT NULL,
  total_attempts INTEGER NOT NULL DEFAULT 0,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  wrong_answers INTEGER NOT NULL DEFAULT 0,
  streak INTEGER NOT NULL DEFAULT 0,
  last_attempt_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, module_code, question_id)
);

-- Tabela de questões
CREATE TABLE questions (
  id TEXT PRIMARY KEY, -- Ex: M1-P1-Q1
  module_code TEXT NOT NULL, -- Ex: M1-P1
  text TEXT NOT NULL,
  options JSONB NOT NULL, -- Array de strings ["Opção A", "Opção B", ...]
  correct_option TEXT NOT NULL, -- "A", "B", "C" ou "D"
  topics JSONB, -- Array de strings ["RPA", "API-led"]
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_questions_module_code ON questions(module_code);
CREATE INDEX idx_attempts_student_id ON attempts(student_id);
CREATE INDEX idx_attempts_module_code ON attempts(module_code);
CREATE INDEX idx_attempts_created_at ON attempts(created_at DESC);
CREATE INDEX idx_question_stats_student_id ON question_stats(student_id);
CREATE INDEX idx_question_stats_module_code ON question_stats(module_code);
CREATE INDEX idx_question_stats_question_id ON question_stats(question_id);
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);

-- Função para atualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para atualizar updated_at na tabela students
CREATE TRIGGER update_students_updated_at 
  BEFORE UPDATE ON students 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger para atualizar updated_at na tabela user_progress
CREATE TRIGGER update_user_progress_updated_at 
  BEFORE UPDATE ON user_progress 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
