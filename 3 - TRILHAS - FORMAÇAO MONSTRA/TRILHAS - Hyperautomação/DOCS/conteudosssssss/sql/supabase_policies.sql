-- Enable Row Level Security
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Policies para tabela students
-- Permitir leitura de todos os estudantes (para o dashboard compartilhado)
CREATE POLICY "Anyone can view all students" ON students
  FOR SELECT USING (true);

-- Permitir inserção de novos estudantes
CREATE POLICY "Anyone can create students" ON students
  FOR INSERT WITH CHECK (true);

-- Permitir atualização apenas do próprio registro (quando implementarmos auth mais completa)
CREATE POLICY "Users can update own student" ON students
  FOR UPDATE USING (true);

-- Policies para tabela attempts
-- Permitir leitura de todas as tentativas (para dashboard compartilhado)
CREATE POLICY "Anyone can view all attempts" ON attempts
  FOR SELECT USING (true);

-- Permitir inserção de tentativas
CREATE POLICY "Anyone can create attempts" ON attempts
  FOR INSERT WITH CHECK (true);

-- Policies para tabela question_stats
-- Permitir leitura de todas as estatísticas
CREATE POLICY "Anyone can view all question stats" ON question_stats
  FOR SELECT USING (true);

-- Permitir inserção e atualização
CREATE POLICY "Anyone can upsert question stats" ON question_stats
  FOR ALL USING (true);

-- Policies para tabela questions
-- Permitir leitura de todas as questões
CREATE POLICY "Anyone can view all questions" ON questions
  FOR SELECT USING (true);

-- Permitir inserção de questões (apenas via admin, mas liberado para facilitar carga inicial)
CREATE POLICY "Anyone can create questions" ON questions
  FOR INSERT WITH CHECK (true);

-- Policies para tabela user_progress
-- Permitir leitura/escrita de progresso do usuário (baseado no user_id)
-- Idealmente usaríamos auth.uid(), mas aqui usamos ID gerado pelo cliente
CREATE POLICY "Anyone can upsert user_progress" ON user_progress
  FOR ALL USING (true);
