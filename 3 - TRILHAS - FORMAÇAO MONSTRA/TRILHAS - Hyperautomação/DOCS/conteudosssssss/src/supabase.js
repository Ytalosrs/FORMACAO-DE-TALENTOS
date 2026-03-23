const SUPABASE_CONFIG = {
  URL: 'https://SEU_PROJETO.supabase.co',
  ANON_KEY: 'CHAVE_ANON'
};

let supabaseClient = null;

function getSupabaseConfig() {
  if (typeof window !== "undefined" && window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.URL && window.SUPABASE_CONFIG.ANON_KEY) {
    return window.SUPABASE_CONFIG;
  }
  return SUPABASE_CONFIG;
}

function isValidConfig(cfg) {
  return (
    cfg &&
    typeof cfg.URL === "string" &&
    cfg.URL.includes(".supabase.co") &&
    !cfg.URL.includes("SEU_PROJETO") &&
    typeof cfg.ANON_KEY === "string" &&
    cfg.ANON_KEY.length > 20 &&
    cfg.ANON_KEY !== "CHAVE_ANON"
  );
}

async function initSupabase() {
  if (typeof window.supabase !== 'undefined') {
    const cfg = getSupabaseConfig();
    if (isValidConfig(cfg)) {
      supabaseClient = window.supabase.createClient(cfg.URL, cfg.ANON_KEY);
      return true;
    }
  }
  return false;
}

// Funções CRUD para estudantes
async function getAllStudents() {
  if (!supabaseClient) return [];
  
  const { data, error } = await supabaseClient
    .from('students')
    .select('*')
    .order('name');
  
  if (error) {
    console.error('Erro ao buscar estudantes:', error);
    return [];
  }
  
  return data || [];
}

async function createStudent(name) {
  if (!supabaseClient) return null;
  
  // Verificar se já existe
  const { data: existing } = await supabaseClient
    .from('students')
    .select('id')
    .eq('name', name)
    .single();
  
  if (existing) {
    return existing;
  }
  
  const { data, error } = await supabaseClient
    .from('students')
    .insert([{ name }])
    .select()
    .single();
  
  if (error) {
    console.error('Erro ao criar estudante:', error);
    return null;
  }
  
  return data;
}

async function getStudentByName(name) {
  if (!supabaseClient) return null;
  
  const { data, error } = await supabaseClient
    .from('students')
    .select('*')
    .eq('name', name)
    .single();
  
  if (error) {
    console.error('Erro ao buscar estudante:', error);
    return null;
  }
  
  return data;
}

// Funções para tentativas
async function saveAttempt(studentId, moduleCode, type, totalQuestions, wrongAnswers) {
  if (!supabaseClient) return null;
  
  const { data, error } = await supabaseClient
    .from('attempts')
    .insert([{
      student_id: studentId,
      module_code: moduleCode,
      type: type,
      total_questions: totalQuestions,
      wrong_answers: wrongAnswers
    }])
    .select()
    .single();
  
  if (error) {
    console.error('Erro ao salvar tentativa:', error);
    return null;
  }
  
  return data;
}

async function getRecentAttempts(limit = 10) {
  if (!supabaseClient) return [];
  
  const { data, error } = await supabaseClient
    .from('attempts')
    .select(`
      *,
      students!inner(name)
    `)
    .order('created_at', { ascending: false })
    .limit(limit);
  
  if (error) {
    console.error('Erro ao buscar tentativas recentes:', error);
    return [];
  }
  
  return data || [];
}

// Funções para estatísticas de questões
async function getQuestionStats(studentId, moduleCode, questionId) {
  if (!supabaseClient) return null;
  
  const { data, error } = await supabaseClient
    .from('question_stats')
    .select('*')
    .eq('student_id', studentId)
    .eq('module_code', moduleCode)
    .eq('question_id', questionId)
    .single();
  
  if (error) {
    return null;
  }
  
  return data;
}

async function updateQuestionStats(studentId, moduleCode, questionId, isCorrect) {
  if (!supabaseClient) return null;
  
  // Buscar stats existentes ou criar novo
  const existing = await getQuestionStats(studentId, moduleCode, questionId);
  
  if (existing) {
    // Atualizar existente
    const newTotal = existing.total_attempts + 1;
    const newCorrect = existing.correct_answers + (isCorrect ? 1 : 0);
    const newWrong = existing.wrong_answers + (isCorrect ? 0 : 1);
    const newStreak = isCorrect ? existing.streak + 1 : 0;
    
    const { data, error } = await supabaseClient
      .from('question_stats')
      .update({
        total_attempts: newTotal,
        correct_answers: newCorrect,
        wrong_answers: newWrong,
        streak: newStreak,
        last_attempt_at: new Date().toISOString()
      })
      .eq('id', existing.id)
      .select()
      .single();
    
    if (error) {
      console.error('Erro ao atualizar stats:', error);
      return null;
    }
    
    return data;
  } else {
    // Criar novo
    const { data, error } = await supabaseClient
      .from('question_stats')
      .insert([{
        student_id: studentId,
        module_code: moduleCode,
        question_id: questionId,
        total_attempts: 1,
        correct_answers: isCorrect ? 1 : 0,
        wrong_answers: isCorrect ? 0 : 1,
        streak: isCorrect ? 1 : 0
      }])
      .select()
      .single();
    
    if (error) {
      console.error('Erro ao criar stats:', error);
      return null;
    }
    
    return data;
  }
}

// Funções auxiliares para migrar dados do localStorage
function migrateFromLocalStorage() {
  // Esta função pode ser usada para migrar dados existentes do localStorage
  // para o Supabase quando fizer a transição
  const localData = localStorage.getItem('mulesoft-student-meta');
  const localState = localStorage.getItem('mulesoft-state');
  
  if (localData || localState) {
    console.log('Dados locais encontrados, considere migrar para o Supabase');
    return { localData, localState };
  }
  
  return null;
}
