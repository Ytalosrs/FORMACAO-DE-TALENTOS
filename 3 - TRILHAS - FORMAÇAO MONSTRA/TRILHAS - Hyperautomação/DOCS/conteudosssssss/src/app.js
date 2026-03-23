/**
 * SISTEMA DE PROVAS - MULESOFT HIPERAUTOMAÇÃO
 * Arquivo principal de lógica da aplicação (Frontend)
 */

// Chaves para o LocalStorage
const STORAGE_KEY = "hiperautomacao_exam_state_v1";
const USER_ID_KEY = "hiperautomacao_user_id";

// Caches globais para performance
const MODULE_CONTENT_CACHE = {};
let CURRENT_EXAM_SESSION = null;
let EXAM_TIMER_INTERVAL = null;
let EXAM_MD_CACHE = {};
let EXPLANATION_CACHE = {};
let SUPABASE_CLIENT = null;

/**
 * Inicializa o sistema, gera ID de usuário e conecta com Supabase.
 */
(async function initSystem() {
  // 1. Garantir identidade do usuário (UUID anônimo)
  let userId = localStorage.getItem(USER_ID_KEY);
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    localStorage.setItem(USER_ID_KEY, userId);
  }
  console.log('Identidade do usuário:', userId);

  // 2. Inicializar Supabase se as credenciais estiverem no escopo global
  if (typeof window.supabase !== 'undefined' && window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.URL.includes('supabase.co')) {
    try {
      SUPABASE_CLIENT = window.supabase.createClient(
        window.SUPABASE_CONFIG.URL,
        window.SUPABASE_CONFIG.ANON_KEY
      );
      console.log('✅ Supabase conectado com sucesso via app.js');
      
      // 3. Tentar recuperar progresso da nuvem
      await syncStateFromSupabase();
    } catch (e) {
      console.warn('⚠️ Erro ao inicializar Supabase no app.js:', e);
    }
  } else {
    console.warn('⚠️ Supabase não inicializado: credenciais ausentes ou inválidas.');
  }
})();

/**
 * Busca o estado (JSON) do usuário no Supabase e mescla com o local.
 */
async function syncStateFromSupabase() {
  if (!SUPABASE_CLIENT) return;
  const userId = localStorage.getItem(USER_ID_KEY);
  try {
    const { data, error } = await SUPABASE_CLIENT
      .from('user_progress')
      .select('state_json')
      .eq('user_id', userId)
      .single();
      
    if (data && data.state_json) {
      console.log('Estado recuperado do Supabase.');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.state_json));
      
      // Se estiver na home, recarrega a lista para mostrar o progresso novo
      if (document.getElementById("home-modules-list")) {
        renderModules();
      }
    }
  } catch (e) {
    console.error('Erro ao sincronizar do Supabase:', e);
  }
}

/**
 * Salva o estado atual (JSON) no Supabase.
 * @param {Object} state - O objeto de estado completo da aplicação.
 */
async function saveStateToSupabase(state) {
  if (!SUPABASE_CLIENT) return;
  const userId = localStorage.getItem(USER_ID_KEY);
  try {
    const { error } = await SUPABASE_CLIENT
      .from('user_progress')
      .upsert({ 
        user_id: userId, 
        state_json: state,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id' });
      
    if (error) throw error;
  } catch (e) {
    console.error('Erro ao salvar no Supabase:', e);
  }
}

// --- GESTÃO DE ESTADO LOCAL ---

/**
 * Carrega o estado do LocalStorage.
 */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { modules: {} };
    const parsed = JSON.parse(raw);
    return parsed.modules ? parsed : { modules: {} };
  } catch {
    return { modules: {} };
  }
}

/**
 * Salva o estado no LocalStorage e dispara sincronização cloud.
 */
function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  saveStateToSupabase(state);
}

/**
 * Garante que o objeto de estado de um módulo exista.
 */
function getModuleState(state, moduleCode) {
  if (!state.modules[moduleCode]) {
    state.modules[moduleCode] = {
      attempts: 0,
      correctCount: 0,
      totalAnswered: 0,
      questionStats: {},
      attemptLog: []
    };
  }
  if (!Array.isArray(state.modules[moduleCode].attemptLog)) {
    state.modules[moduleCode].attemptLog = [];
  }
  return state.modules[moduleCode];
}

// --- UTILITÁRIOS ---

function computeAccuracy(correctCount, totalAnswered) {
  return totalAnswered ? (correctCount / totalAnswered) * 100 : 0;
}

function formatPercent(value) {
  return value.toFixed(1).replace(".", ",") + " %";
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Conversor simples de Markdown para HTML (Headers, Listas, Bold, HR).
 */
function renderMarkdown(md) {
  const lines = md.split(/\r?\n/);
  let html = "";
  let inUl = false;
  let inOl = false;

  const closeLists = () => {
    if (inUl) { html += "</ul>"; inUl = false; }
    if (inOl) { html += "</ol>"; inOl = false; }
  };

  lines.forEach(rawLine => {
    const line = rawLine.trimEnd();
    if (!line) { closeLists(); return; }

    // Headers
    if (line.startsWith("# ")) {
      closeLists();
      html += `<h1>${applyInlineMarkdown(escapeHtml(line.slice(2).trim()))}</h1>`;
    } else if (line.startsWith("## ")) {
      closeLists();
      html += `<h2>${applyInlineMarkdown(escapeHtml(line.slice(3).trim()))}</h2>`;
    } else if (line.startsWith("### ")) {
      closeLists();
      html += `<h3>${applyInlineMarkdown(escapeHtml(line.slice(4).trim()))}</h3>`;
    } 
    // Horizontal Rule
    else if (line === "---") {
      closeLists();
      html += "<hr />";
    }
    // Unordered List
    else if (line.match(/^[-*]\s+(.*)$/)) {
      if (!inUl) { closeLists(); html += "<ul>"; inUl = true; }
      html += `<li>${applyInlineMarkdown(escapeHtml(line.match(/^[-*]\s+(.*)$/)[1]))}</li>`;
    }
    // Ordered List
    else if (line.match(/^\d+\.\s+(.*)$/)) {
      if (!inOl) { closeLists(); html += "<ol>"; inOl = true; }
      html += `<li>${applyInlineMarkdown(escapeHtml(line.match(/^\d+\.\s+(.*)$/)[1]))}</li>`;
    }
    // Paragraph
    else {
      closeLists();
      html += `<p>${applyInlineMarkdown(escapeHtml(line))}</p>`;
    }
  });
  closeLists();
  return html;
}

function applyInlineMarkdown(text) {
  return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

// --- LÓGICA DE EXAME (TEMPORIZADOR E PROGRESSO) ---

/**
 * Inicia o cronômetro da prova.
 */
function startExamTimer() {
  const timerDisplay = document.getElementById("exam-timer");
  if (!timerDisplay) return;
  
  let seconds = 0;
  if (EXAM_TIMER_INTERVAL) clearInterval(EXAM_TIMER_INTERVAL);
  
  EXAM_TIMER_INTERVAL = setInterval(() => {
    seconds++;
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    timerDisplay.textContent = `${mins}:${secs}`;
  }, 1000);
}

/**
 * Para o cronômetro.
 */
function stopExamTimer() {
  if (EXAM_TIMER_INTERVAL) {
    clearInterval(EXAM_TIMER_INTERVAL);
    EXAM_TIMER_INTERVAL = null;
  }
}

/**
 * Atualiza a barra de progresso visual da prova.
 */
function updateExamProgress() {
  if (!CURRENT_EXAM_SESSION) return;
  const { index, questions } = CURRENT_EXAM_SESSION;
  const progressFill = document.getElementById("exam-progress-fill");
  if (progressFill) {
    const percent = ((index) / questions.length) * 100;
    progressFill.style.width = `${percent}%`;
  }
}

// --- SELEÇÃO DE QUESTÕES ---

/**
 * Seleciona questões para uma prova baseada no tipo (EXAM ou REFORCO).
 * Implementa lógica de não-repetição de questões acertadas.
 */
function pickQuestionsForExam(moduleCode, examType, state, forceIncludeCompleted = false, excludeIds = []) {
  const params = new URLSearchParams(window.location.search);
  const isDebug = params.get('debug') === 'true';

  const allKeys = Object.keys(QUESTION_BANK).filter(k => k.startsWith(moduleCode + "-"));
  const questionsPool = [];
  allKeys.forEach(key => {
    QUESTION_BANK[key].forEach(q => questionsPool.push(q));
  });

  // MODO DEBUG: Ignora todo o progresso e retorna 15 questões aleatórias
  if (isDebug) {
    console.warn('⚠️ MODO DE DEPURACAO ATIVO: O progresso salvo está sendo ignorado.');
    return [...questionsPool].sort(() => Math.random() - 0.5).slice(0, 15);
  }

  const moduleState = getModuleState(state, moduleCode);

  // Prova de REFORCO: foca em questões com erro ou baixo acerto
  if (examType === "REFORCO") {
    return questionsPool.filter(q => {
      const stats = moduleState.questionStats[q.id];
      if (!stats || stats.total === 0) return true;
      if (stats.streak >= 2) return false;
      return (stats.correct / stats.total) < 0.8;
    });
  }

  // Prova de EXAM (Padrão): filtra questões já acertadas para não repetir
  const basePool = forceIncludeCompleted 
    ? [...questionsPool] 
    : questionsPool.filter(q => {
        const stats = moduleState.questionStats[q.id];
        return !stats || stats.correct === 0;
      });

  // Evita questões que acabaram de ser feitas (para o botão 'Refazer')
  let finalPool = basePool.filter(q => !excludeIds.includes(q.id));

  // Se o filtro de exclusão esvaziar a prova, voltamos ao pool base
  if (finalPool.length === 0 && basePool.length > 0) {
    finalPool = basePool;
  }

  const MAX_QUESTIONS = 15;
  const shuffled = [...finalPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, MAX_QUESTIONS);
}

// --- RENDERIZAÇÃO DA INTERFACE (HOME E MÓDULOS) ---

/**
 * Renderiza a lista de módulos na tela inicial com suas respectivas estatísticas.
 */
function renderModules() {
  const list = document.getElementById("home-modules-list");
  if (!list) return;
  list.innerHTML = "";
  const state = loadState();

  MODULES.forEach(m => {
    const moduleState = getModuleState(state, m.code);
    const accuracy = computeAccuracy(moduleState.correctCount, moduleState.totalAnswered);
    const accuracyText = formatPercent(accuracy);

    // Define a classe CSS baseada na precisão
    let tagClass = "tag-warning";
    if (accuracy >= 80 && moduleState.totalAnswered > 0) tagClass = "tag-success";
    if (accuracy > 0 && accuracy < 60) tagClass = "tag-danger";

    const card = document.createElement("div");
    card.className = "home-module-item";
    card.setAttribute("data-action", "select-module");
    card.setAttribute("data-module", m.code);
    card.innerHTML = `
      <div class="home-module-title">${m.code} • ${m.title}</div>
      <div class="home-module-subtitle">Peso no exame: ${m.weight}</div>
      <div class="home-module-progress">
        Acertos neste módulo: <span class="${tagClass} tag">${accuracyText}</span><br />
        Questões respondidas: ${moduleState.totalAnswered}
      </div>
    `;
    list.appendChild(card);
  });
}

/**
 * Carrega o conteúdo teórico (Markdown) de um módulo específico.
 */
function loadModuleContent(moduleCode) {
  const moduleInfo = MODULES.find(m => m.code === moduleCode);
  if (!moduleInfo) return;
  const num = moduleInfo.id;
  const container = document.getElementById("module-content-" + moduleCode);
  if (!container) return;

  const rawPath = `Modulo ${num}/conteudo ${num}.md`;
  const path = encodeURI(rawPath);

  fetch(path)
    .then(res => {
      if (!res.ok) throw new Error("Erro ao carregar conteúdo");
      return res.text();
    })
    .then(text => {
      MODULE_CONTENT_CACHE[moduleCode] = text;
      container.innerHTML = renderMarkdown(text);
    })
    .catch(() => {
      container.textContent = "Não foi possível carregar o conteúdo do módulo. Verifique se o arquivo existe.";
    });
}

/**
 * Renderiza o detalhe do módulo selecionado na home.
 */
function renderHomeModuleDetail(moduleCode) {
  const detail = document.getElementById("home-module-detail");
  if (!detail) return;
  const moduleInfo = MODULES.find(m => m.code === moduleCode);
  if (!moduleInfo) return;

  detail.innerHTML = `
    <div class="card">
      <div class="card-title">${moduleInfo.code} • ${moduleInfo.title}</div>
      <div class="module-content-body" id="module-content-${moduleInfo.code}">Carregando conteúdo do módulo...</div>
      <div class="module-exams">
        <div class="module-exams-title">Avaliações deste módulo</div>
        <div class="module-actions">
          <button class="btn-primary" data-action="exam" data-exam="EXAM" data-module="${moduleInfo.code}">Prova do módulo</button>
          <button class="btn-secondary" data-action="exam-reforco" data-module="${moduleInfo.code}">Prova de reforço</button>
        </div>
      </div>
    </div>
  `;
  loadModuleContent(moduleCode);
}

// --- RENDERIZAÇÃO E LÓGICA DE PROVA ---

/**
 * Prepara e inicia uma sessão de prova (EXAM ou REFORCO).
 */
/**
 * Prepara e inicia uma sessão de prova (EXAM ou REFORCO).
 */
function renderExam(moduleCode, examType, forceIncludeCompleted = false, excludeIds = []) {
  const moduleInfo = MODULES.find(m => m.code === moduleCode);
  const state = loadState();
  const questions = pickQuestionsForExam(moduleCode, examType, state, forceIncludeCompleted, excludeIds);

  // Se não houver questões, exibe mensagem na tela principal
  if (!questions.length) {
    const examContainer = document.getElementById("exam-container");
    switchView("exam"); // Mostra a view de prova vazia
    
    const isReforco = examType === "REFORCO";
    const modeLabel = isReforco ? "Prova de reforço do módulo" : "Prova do módulo";
    
    let emptyMessage = isReforco 
      ? "Não há questões pendentes para reforço. Todas as questões deste módulo já foram dominadas com boa taxa de acerto."
      : "Parabéns! Você já acertou todas as questões disponíveis para este módulo. Deseja realizar uma nova prova para praticar novamente?";
    
    const showForceBtn = !isReforco && Object.keys(QUESTION_BANK).some(k => k.startsWith(moduleCode + "-"));

    examContainer.innerHTML = `
      <div class="exam-header">
        <h2>${moduleInfo.code} • ${moduleInfo.title}</h2>
        <p class="exam-meta">${modeLabel}</p>
        <p class="exam-meta">${emptyMessage}</p>
      </div>
      <div class="exam-actions">
        ${showForceBtn ? '<button class="btn-primary" id="force-new-exam-btn">Realizar Nova Prova</button>' : ''}
        <button class="btn-secondary" id="back-to-modules-from-empty">Voltar para Home</button>
      </div>
    `;

    if (showForceBtn) {
      document.getElementById("force-new-exam-btn").addEventListener("click", () => renderExam(moduleCode, examType, true));
    }
    document.getElementById("back-to-modules-from-empty").addEventListener("click", () => switchView("home"));
    return;
  }

  // Inicia a sessão atual
  CURRENT_EXAM_SESSION = {
    moduleCode,
    examType,
    questions,
    index: 0,
    wrongDetails: [],
    startedAt: Date.now()
  };
  
  // Ativa o modo de foco
  document.getElementById('exam-focus-view').style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Impede scroll da página principal

  startExamTimer();
  renderFocusQuestion();
}

/**
 * Renderiza a questão atual no modo de foco.
 */
function renderFocusQuestion() {
  if (!CURRENT_EXAM_SESSION) return;
  const { moduleCode, examType, questions, index } = CURRENT_EXAM_SESSION;
  const q = questions[index];
  const container = document.getElementById("exam-focus-container");

  const progressPercent = ((index + 1) / questions.length) * 100;

  const optionsHtml = q.letters.map(letter => {
    const opt = q.options[letter];
    return `
      <div class="exam-focus-option" data-option="${letter}">
        <div class="exam-focus-option-letter">${letter}</div>
        <div class="exam-focus-option-text">${escapeHtml(opt)}</div>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div class="exam-focus-header">
      <div class="exam-focus-progress">
        <div class="exam-focus-progress-bar" style="width: ${progressPercent}%;"></div>
      </div>
      <div class="exam-focus-meta">
        <span>${moduleCode} • ${examType}</span>
        <span id="exam-timer">00:00</span>
      </div>
    </div>
    <div class="exam-focus-question-text">${q.text}</div>
    <div class="exam-focus-options" id="focus-options-list">
      ${optionsHtml}
    </div>
    <div class="exam-focus-footer">
      <button class="btn-secondary" id="save-progress-btn">Salvar e Sair</button>
      <button class="btn-primary" id="confirm-answer-btn" disabled>Confirmar Resposta</button>
    </div>
    <div id="exam-focus-feedback-container"></div>
  `;

  // Adiciona eventos
  document.getElementById('focus-options-list').addEventListener('click', e => {
    const optionEl = e.target.closest('.exam-focus-option');
    if (!optionEl) return;
    
    // Desmarca outros e marca o selecionado
    document.querySelectorAll('.exam-focus-option').forEach(el => el.classList.remove('selected'));
    optionEl.classList.add('selected');
    
    document.getElementById('confirm-answer-btn').disabled = false;
  });

  document.getElementById('confirm-answer-btn').addEventListener('click', () => submitFocusAnswer());
  document.getElementById('save-progress-btn').addEventListener('click', () => {
    saveState(loadState()); // Força o salvamento
    alert('Progresso salvo! Você pode fechar a página.');
    switchView('home'); // Volta para a home
  });
}

/**
 * Processa a resposta no modo de foco.
 */
async function submitFocusAnswer() {
  if (!CURRENT_EXAM_SESSION) return;
  const { moduleCode, questions, index } = CURRENT_EXAM_SESSION;
  const q = questions[index];
  const selectedOption = document.querySelector('.exam-focus-option.selected');
  
  if (!selectedOption) return;
  
  const answer = selectedOption.getAttribute('data-option');
  const isCorrect = answer === q.correct;

  // Desabilita opções
  document.querySelectorAll('.exam-focus-option').forEach(el => {
    el.style.pointerEvents = 'none';
    if (el.getAttribute('data-option') === q.correct) {
      el.classList.add('correct'); // Estilo para a correta
    }
    if (el.getAttribute('data-option') === answer && !isCorrect) {
      el.classList.add('incorrect'); // Estilo para a incorreta
    }
  });

  const state = loadState();
  const moduleState = getModuleState(state, moduleCode);
  if (!moduleState.questionStats[q.id]) {
    moduleState.questionStats[q.id] = { total: 0, correct: 0, wrong: 0, streak: 0, topics: q.topics };
  }
  
  const stats = moduleState.questionStats[q.id];
  stats.total += 1;
  moduleState.totalAnswered += 1;

  let explanationText = q.explanation || await getExplanationFromMd(moduleCode, q.id, q.correct) || "Sem justificativa cadastrada.";

  const feedbackContainer = document.getElementById('exam-focus-feedback-container');
  const feedbackClass = isCorrect ? 'correct' : 'incorrect';
  const feedbackTitle = isCorrect ? 'Resposta Correta!' : `Incorreto. A resposta certa é ${q.correct}.`;

  feedbackContainer.innerHTML = `
    <div class="exam-focus-feedback ${feedbackClass}">
      <div class="exam-focus-feedback-title">${feedbackTitle}</div>
      <div class="exam-focus-explanation">${renderMarkdown(explanationText)}</div>
    </div>
  `;

  if (isCorrect) {
    stats.correct += 1;
    stats.streak += 1;
    moduleState.correctCount += 1;
  } else {
    stats.wrong += 1;
    stats.streak = 0;
    CURRENT_EXAM_SESSION.wrongDetails.push({ id: q.id, correct: q.correct, answer, explanation: explanationText });
  }

  saveState(state);

  // Troca o botão de "Confirmar" para "Próxima"
  const footer = document.querySelector('.exam-focus-footer');
  footer.innerHTML = `
    <button class="btn-secondary" id="save-progress-btn">Salvar e Sair</button>
    <button class="btn-primary" id="next-question-btn">Próxima Questão</button>
  `;
  document.getElementById('next-question-btn').addEventListener('click', () => advanceExam());
  document.getElementById('save-progress-btn').addEventListener('click', () => {
    saveState(loadState());
    alert('Progresso salvo!');
    switchView('home');
  });
}

/**
 * Avança para a próxima questão ou finaliza a prova.
 */
function advanceExam() {
  if (!CURRENT_EXAM_SESSION) return;
  CURRENT_EXAM_SESSION.index += 1;
  updateExamProgress();
  
  if (CURRENT_EXAM_SESSION.index >= CURRENT_EXAM_SESSION.questions.length) {
    stopExamTimer();
    finishExamSession();
  } else {
    renderFocusQuestion();
  }
}

/**
 * Finaliza a sessão de prova, salva histórico e exibe o resumo final.
 */
async function finishExamSession() {
  if (!CURRENT_EXAM_SESSION) return;
  const { moduleCode, examType, questions, wrongDetails } = CURRENT_EXAM_SESSION;
  
  // Esconde o modo de foco e volta para a view de prova normal para exibir o resumo
  document.getElementById('exam-focus-view').style.display = 'none';
  document.body.style.overflow = 'auto';
  switchView('exam');

  const moduleInfo = MODULES.find(m => m.code === moduleCode);
  
  const state = loadState();
  const moduleState = getModuleState(state, moduleCode);
  moduleState.attempts += 1;
  moduleState.attemptLog.push({
    ts: Date.now(),
    type: examType,
    total: questions.length,
    wrong: wrongDetails.length,
    moduleCode
  });
  saveState(state);

  const examContainer = document.getElementById("exam-container");
  const modeLabel = examType === "EXAM" ? "Prova do módulo" : "Prova de reforço do módulo";
  
  const wrongList = wrongDetails.length
    ? "<ul>" + wrongDetails.map(w => {
        const ansText = w.answer || "não respondida";
        const explHtml = w.explanation ? `<div class="wrong-question-snippet">${renderMarkdown(w.explanation)}</div>` : "";
        return `<li class="wrong-question-item"><div class="wrong-question-header"><strong>${w.id}</strong> • correta: ${w.correct} • resposta: ${ansText}</div>${explHtml}</li>`;
      }).join("") + "</ul>"
    : "<p>Parabéns, você acertou todas as questões desta prova.</p>";

  examContainer.innerHTML = `
    <div class="exam-header">
      <h2>${moduleInfo.code} • ${moduleInfo.title}</h2>
      <p class="exam-meta">${modeLabel} • ${questions.length} questões</p>
    </div>
    <div id="exam-summary" class="exam-summary" style="display:block;">
      <div class="wrong-questions">${wrongList}</div>
      <div class="exam-actions">
        <button type="button" class="btn-primary" id="back-home-btn">Voltar para Home</button>
        <button type="button" class="btn-secondary" id="retry-exam-btn">Refazer</button>
      </div>
    </div>
  `;

  document.getElementById("back-home-btn").addEventListener("click", () => switchView("home"));
  document.getElementById("retry-exam-btn").addEventListener("click", () => {
    renderExam(moduleCode, examType, false, questions.map(q => q.id));
  });
  
  // Tentar salvar no banco compartilhado (opcional)
  if (window.supabaseClient) {
    try {
      const studentName = localStorage.getItem("hiperautomacao_student_name") || "Aluno Anônimo";
      let student = await getStudentByName(studentName) || await createStudent(studentName);
      if (student) {
        const typeStr = examType === "REFORCO" ? "REFORCO" : "MODULO";
        await saveAttempt(student.id, moduleCode, typeStr, questions.length, wrongDetails.length);
        for (const q of questions) {
          const isCorrect = !wrongDetails.find(w => w.id === q.id);
          await updateQuestionStats(student.id, moduleCode, q.id, isCorrect);
        }
      }
    } catch (e) { console.warn("Sincronização opcional falhou:", e); }
  }
  
  CURRENT_EXAM_SESSION = null;
}

function getModuleNumberByCode(moduleCode) {
  const m = MODULES.find(x => x.code === moduleCode);
  return m ? m.id : null;
}

function computeGlobalQuestionNumber(qid) {
  const match = qid.match(/^M(\d+)-P(\d+)-Q(\d+)$/);
  if (!match) return null;
  const p = parseInt(match[2], 10);
  const q = parseInt(match[3], 10);
  return (p - 1) * 15 + q;
}

function loadExamMd(moduleCode) {
  const num = getModuleNumberByCode(moduleCode);
  if (!num) return Promise.resolve(null);
  if (EXAM_MD_CACHE[moduleCode]) return Promise.resolve(EXAM_MD_CACHE[moduleCode]);
  const rawPath = `Modulo ${num}/Simulado_Consolidado_M${num}.md`;
  const path = encodeURI(rawPath);
  return fetch(path)
    .then(res => {
      if (!res.ok) throw new Error("Erro ao carregar simulado");
      return res.text();
    })
    .then(text => {
      EXAM_MD_CACHE[moduleCode] = text;
      return text;
    })
    .catch(() => null);
}

async function getExplanationFromMd(moduleCode, qid, correctLetter) {
  if (EXPLANATION_CACHE[qid]) return EXPLANATION_CACHE[qid];
  const md = EXAM_MD_CACHE[moduleCode] || await loadExamMd(moduleCode);
  if (!md) return null;
  const g = computeGlobalQuestionNumber(qid);
  if (!g) return null;
  const lines = md.split(/\r?\n/);
  let i = -1;
  for (let idx = 0; idx < lines.length; idx++) {
    const line = lines[idx].trim();
    if (line.startsWith(`**${g}.`)) {
      i = idx;
      break;
    }
  }
  if (i < 0) return null;
  let foundCorrect = null;
  let explanation = "";
  for (let idx = i + 1; idx < lines.length; idx++) {
    const line = lines[idx].trim();
    if (line.startsWith("---") || /^(\*\*\d+\.)/.test(line)) break;
    const mCorrect = line.match(/^\*\*Resposta correta:\s*([A-D])\s*\*\*/i);
    if (mCorrect) {
      foundCorrect = mCorrect[1].toUpperCase();
      continue;
    }
    const mWhy = line.match(/^\*\*Por que:\s*\*\*(.*)$/i);
    if (mWhy) {
      explanation = mWhy[1].trim();
      let j = idx + 1;
      while (j < lines.length) {
        const ln = lines[j].trim();
        if (!ln || ln === "---" || /^\*\*\d+\./.test(ln)) break;
        if (/^\*\*Resposta correta:/.test(ln)) break;
        explanation += "\n" + ln;
        j++;
      }
      break;
    }
  }
  if (foundCorrect && correctLetter && foundCorrect !== correctLetter) return null;
  if (!explanation) return null;
  EXPLANATION_CACHE[qid] = explanation;
  return explanation;
}

// --- DASHBOARD E MÉTRICAS ---

/**
 * Calcula métricas globais e por módulo para exibição no dashboard.
 */
function computeDashboardMetrics() {
  const state = loadState();
  const modules = MODULES.map(m => {
    const ms = getModuleState(state, m.code);
    const acc = computeAccuracy(ms.correctCount, ms.totalAnswered);
    
    // Filtra questões pendentes (que ainda não foram dominadas)
    const pendingQuestions = Object.entries(ms.questionStats)
      .filter(([_, stats]) => stats.total > 0 && stats.streak < 2 && (stats.correct / stats.total) < 0.8)
      .length;

    return {
      code: m.code, title: m.title, weight: m.weight,
      accuracy: acc, attempts: ms.attempts, totalAnswered: ms.totalAnswered,
      pendingQuestions
    };
  });

  // Cálculos globais
  let globalAnswered = 0, globalCorrect = 0;
  const questionList = [];
  modules.forEach(m => {
    globalAnswered += m.totalAnswered;
    globalCorrect += (m.accuracy / 100) * m.totalAnswered;
  });

  // Estatísticas por tópico
  const topicStats = {};
  Object.entries(state.modules).forEach(([moduleCode, ms]) => {
    Object.entries(ms.questionStats).forEach(([qid, qs]) => {
      // Busca metadados da questão no banco global
      const qMeta = Object.values(QUESTION_BANK).flat().find(q => q.id === qid);
      if (!qMeta) return;

      qMeta.topics.forEach(t => {
        if (!topicStats[t]) topicStats[t] = { correct: 0, total: 0 };
        topicStats[t].correct += qs.correct;
        topicStats[t].total += qs.total;
      });

      questionList.push({
        moduleCode, id: qid, total: qs.total, correct: qs.correct, wrong: qs.wrong,
        accuracy: computeAccuracy(qs.correct, qs.total)
      });
    });
  });

  const topics = Object.entries(topicStats).map(([topic, data]) => ({
    topic, accuracy: computeAccuracy(data.correct, data.total)
  }));

  return { modules, globalAccuracy: computeAccuracy(globalCorrect, globalAnswered), globalAnswered, topics, questions: questionList };
}

/**
 * Renderiza a visão de Dashboard com gráficos e tabelas.
 */
function renderDashboard() {
  const container = document.getElementById("dashboard-container");
  const metrics = computeDashboardMetrics();
  const globalAccText = formatPercent(metrics.globalAccuracy);

  // Define classe de cor global
  let globalClass = "tag-warning";
  if (metrics.globalAccuracy >= 80 && metrics.globalAnswered > 0) globalClass = "tag-success";
  else if (metrics.globalAccuracy > 0 && metrics.globalAccuracy < 60) globalClass = "tag-danger";

  // Tabelas e Gráficos
  const modulesRows = metrics.modules.map(m => {
    const accText = formatPercent(m.accuracy);
    const cls = m.accuracy >= 80 && m.totalAnswered > 0 ? "tag-success" : (m.accuracy < 60 && m.totalAnswered > 0 ? "tag-danger" : "tag-warning");
    return `<tr><td>${m.code}</td><td>${m.title}</td><td><span class="tag ${cls}">${accText}</span></td><td>${m.totalAnswered}</td><td>${m.pendingQuestions}</td><td>${m.attempts}</td></tr>`;
  }).join("");

  const topicsBars = metrics.topics.length 
    ? metrics.topics.map(t => {
        const height = (t.accuracy / Math.max(...metrics.topics.map(x => x.accuracy))) * 100;
        return `<div class="bar"><div class="bar-fill" style="height:${height}%;"></div><div class="bar-value">${formatPercent(t.accuracy)}</div><div class="bar-label">${t.topic}</div></div>`;
      }).join("")
    : `<p class="empty-msg">Ainda não há dados por tópico.</p>`;

  const hardestRows = metrics.questions.sort((a, b) => b.wrong - a.wrong).slice(0, 10).map(q => {
    const cls = q.accuracy >= 80 ? "tag-success" : (q.accuracy < 60 ? "tag-danger" : "tag-warning");
    return `<tr><td>${q.moduleCode}</td><td>${q.id}</td><td>${q.total}</td><td>${q.wrong}</td><td><span class="tag ${cls}">${formatPercent(q.accuracy)}</span></td></tr>`;
  }).join("");

  container.innerHTML = `
    <div class="dashboard-row">
      <div class="card" style="flex:1;">
        <div class="card-title">Resumo geral</div>
        <div class="kpis">
          <div class="kpi"><div class="kpi-label">Taxa global de acertos</div><div class="kpi-value ${globalClass}">${globalAccText}</div></div>
          <div class="kpi"><div class="kpi-label">Questões respondidas</div><div class="kpi-value">${metrics.globalAnswered}</div></div>
          <div class="kpi"><div class="kpi-label">Módulos</div><div class="kpi-value">${MODULES.length}</div></div>
        </div>
      </div>
      <div class="card" style="flex:1;">
        <div class="card-title">Desempenho por tópico (%)</div>
        <div class="bar-chart">${topicsBars}</div>
      </div>
    </div>
    <div class="card"><div class="card-title">Desempenho por módulo</div><table class="table"><thead><tr><th>Módulo</th><th>Título</th><th>Taxa</th><th>Respondidas</th><th>Pendentes</th><th>Tentativas</th></tr></thead><tbody>${modulesRows}</tbody></table></div>
    <div class="card"><div class="card-title">Questões mais desafiadoras</div><table class="table"><thead><tr><th>Módulo</th><th>ID</th><th>Total</th><th>Erros</th><th>Taxa</th></tr></thead><tbody>${hardestRows}</tbody></table></div>
    <div class="card" id="team-dashboard-card"><div class="card-title">Progresso da equipe (Supabase)</div><p class="empty-msg">Carregando dados compartilhados...</p></div>
  `;
  loadTeamDashboard();
}

/**
 * Carrega dados de tentativas de outros alunos do Supabase (Dashboard de Equipe).
 */
async function loadTeamDashboard() {
  const card = document.getElementById("team-dashboard-card");
  if (!card || typeof getRecentAttempts !== "function") return;
  try {
    const attempts = await getRecentAttempts(20);
    if (!attempts || !attempts.length) {
      card.innerHTML = `<div class="card-title">Progresso da equipe</div><p class="empty-msg">Nenhum dado compartilhado ainda.</p>`;
      return;
    }
    const rows = attempts.map(a => {
      const date = new Date(a.created_at).toLocaleString();
      return `<tr><td>${a.students?.name || "Anônimo"}</td><td>${a.module_code}</td><td>${a.type}</td><td>${a.total_questions}</td><td>${a.wrong_answers}</td><td>${date}</td></tr>`;
    }).join("");
    card.innerHTML = `<div class="card-title">Progresso da equipe</div><table class="table"><thead><tr><th>Aluno</th><th>Módulo</th><th>Tipo</th><th>Total</th><th>Erros</th><th>Data</th></tr></thead><tbody>${rows}</tbody></table>`;
  } catch (e) {
    card.innerHTML = `<div class="card-title">Progresso da equipe</div><p class="error-msg">Erro ao carregar dados do Supabase.</p>`;
  }
}

// --- AJUDA E NAVEGAÇÃO ---

/**
 * Renderiza o guia de estudo na tela de ajuda.
 */
function renderHelp() {
  const container = document.getElementById("help-container");
  container.innerHTML = `
    <div class="help-section">
      <h2>🎯 Como funciona o sistema</h2>
      <p>Este sistema prepara você para a certificação MuleSoft Hiperautomação de forma estruturada.</p>
    </div>
    <div class="help-section">
      <h2>📚 Estrutura (8 Módulos)</h2>
      <ul>
        <li><strong>M1:</strong> Melhores Práticas (20%)</li>
        <li><strong>M2:</strong> MuleSoft RPA (17%)</li>
        <li><strong>M3:</strong> Composer (12%)</li>
        <li><strong>M4:</strong> Salesforce Flow (13%)</li>
        <li><strong>M5:</strong> Platform & APIs (15%)</li>
        <li><strong>M6:</strong> Monitoring (7%)</li>
        <li><strong>M7:</strong> Exchange (8%)</li>
        <li><strong>M8:</strong> Flow Orchestration (8%)</li>
      </ul>
    </div>
  `;
  document.getElementById("main-title").textContent = "Guia de Estudo";
  document.getElementById("main-subtitle").textContent = "Entenda a estrutura do curso e como aproveitar as provas.";
}

/**
 * Alterna entre as diferentes visões da aplicação (Home, Prova, Dashboard, Ajuda).
 */
function switchView(view) {
  const views = { home: "view-home", exam: "view-exam", dashboard: "view-dashboard", help: "view-help" };
  const sidebar = document.querySelector(".sidebar");
  const header = document.getElementById("app-header");

  // Oculta todas as views
  Object.values(views).forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.classList.remove("view-active"); el.classList.add("view"); }
  });

  // Garante que o modo de foco seja desativado ao sair da prova
  const focusView = document.getElementById('exam-focus-view');
  if (view !== 'exam' && focusView.style.display !== 'none') {
    focusView.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Modo de Prova: Foco total (esconde sidebar e header)
  if (view === "exam") {
    if (sidebar) sidebar.style.display = "none";
    if (header) header.style.display = "none";
    document.body.classList.add("exam-mode");
  } else {
    if (sidebar) sidebar.style.display = "flex";
    if (header) header.style.display = "flex";
    document.body.classList.remove("exam-mode");
    stopExamTimer();
    CURRENT_EXAM_SESSION = null;
  }

  // Ativa a view alvo
  const targetId = views[view];
  const targetEl = document.getElementById(targetId);
  if (targetEl) { targetEl.classList.remove("view"); targetEl.classList.add("view-active"); }

  // Inicializa dados da view
  if (view === "home") renderModules();
  if (view === "dashboard") renderDashboard();
  if (view === "help") renderHelp();

  // Atualiza menu lateral
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.getAttribute("data-view") === view);
  });
}

// --- SETUP E EVENTOS ---

function setupNavigation() {
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.addEventListener("click", () => switchView(btn.getAttribute("data-view")));
  });
  
  const exitBtn = document.getElementById("exit-exam-btn");
  if (exitBtn) exitBtn.addEventListener("click", () => {
    if (confirm("Sair da prova? Progresso será perdido.")) switchView("home");
  });
}

function setupModuleActions() {
  const containers = [document.getElementById("home-modules-list"), document.getElementById("home-module-detail")];
  containers.forEach(c => {
    if (!c) return;
    c.addEventListener("click", e => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const action = btn.getAttribute("data-action");
      const module = btn.getAttribute("data-module");
      if (action === "select-module") renderHomeModuleDetail(module);
      else if (action === "exam") renderExam(module, "EXAM");
      else if (action === "exam-reforco") renderExam(module, "REFORCO");
    });
  });
}

function setupResetProgress() {
  const btn = document.getElementById("reset-progress-btn");
  if (btn) btn.addEventListener("click", () => {
    if (confirm("Limpar todo o seu progresso?")) {
      saveState({ modules: {} });
      renderModules();
    }
  });
}

// Inicialização ao carregar o DOM
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupModuleActions();
  setupResetProgress();
  switchView("home");
});
