'use strict';

/* =========================================================
   GERENCIADOR DE TAREFAS — app.js
   ========================================================= */

// ===== CONSTANTS =====
const DAYS_PT = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const DAYS_SHORT = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const PERIODS = [
  { key: 'manha', label: 'MANHÃ', icon: '🌅' },
  { key: 'tarde', label: 'TARDE', icon: '🌤️' },
  { key: 'noite', label: 'NOITE', icon: '🌙' },
];
const PRIORITY_MAP = {
  urgent: { label: 'Urgente', icon: '🔥' },
  medium: { label: 'Média', icon: '📌' },
  light: { label: 'Leve', icon: '🌿' },
};

// ===== HELPERS =====
function getInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + (parts[parts.length - 1][0] || '')).toUpperCase();
}

function renderAvatarHTML(member, className = '') {
  const color = member?.color || 'var(--accent)';
  const name = member?.name || 'Sistema';
  return `
    <div class="avatar-initials ${className}" 
         style="background-color: ${color}" 
         title="${name}">
      ${getInitials(name)}
    </div>
  `;
}

// ===== STATE =====
let currentUser = loadCurrentUser();
let members = loadMembers();
let tasks = loadTasks();
let notifications = loadNotifications();
let activities = loadActivities();
let activeFilter = 'all';
let activeMemberFilter = 'all';
let activeViewFilter = 'team'; // 'team' ou 'mine'
let searchQuery = '';
let teamData = loadTeamData();

function loadCurrentUser() {
  const saved = localStorage.getItem('gm_current_user');
  return saved ? JSON.parse(saved) : null;
}

function saveCurrentUser(user) {
  if (user) localStorage.setItem('gm_current_user', JSON.stringify(user));
  else localStorage.removeItem('gm_current_user');
}

function loadMembers() {
  try {
    const saved = localStorage.getItem('gm_members');
    if (saved) return JSON.parse(saved);
    return []; // Inicia vazio como solicitado
  } catch {
    return [];
  }
}

function saveMembers() {
  localStorage.setItem('gm_members', JSON.stringify(members));
}

// ===== DOM REFS =====
const $ = id => document.getElementById(id);
const clockEl = $('liveClock');
const dateEl = $('currentDate');
const teamNameEl = $('teamName');
const teamTitleEl = $('teamTitle');
const weekGridEl = $('weekGrid');
const taskInput = $('taskInput');
const taskDayEl = $('taskDay');
const taskPeriodEl = $('taskPeriod');
const taskCatEl = $('taskCategory');
const taskPriorEl = $('taskPriority');
const timeStartEl = $('timeStart');
const timeEndEl = $('timeEnd');
const searchEl = $('searchInput');
const toastEl = $('toastContainer');
const notifListEl = $('notifList');
const taskMemberEl = $('taskMember');
const activityListEl = $('activityList');
const activitySidebar = $('activitySidebar');
const onlineAvatarsEl = $('onlineAvatars');
const onlineCountEl = $('onlineCount');
const memberFiltersEl = $('memberFilters');

// ===== INIT =====
function INIT() {
  applyTeamData();
  buildDaySelector();
  buildMemberSelector();
  buildMemberFilters();
  buildWeekGrid();
  renderAllTasks();
  updateStats();
  redrawPerformance();
  renderActivities();
  updateOnlineStatus();
  startClock();
  setTodayColumn();
  hookEvents();
  scheduleNotifCheck();
  checkLogin();
}
INIT();

function checkLogin() {
  if (!currentUser) {
    $('loginModal').classList.remove('hidden');
  } else {
    $('loginModal').classList.add('hidden');
    updateHeaderGreeting();
  }
}

function updateHeaderGreeting() {
  if (currentUser) {
    // Evitar duplicatas se a função for chamada múltiplas vezes
    const existingSub = teamNameEl.parentElement.querySelector('.user-greeting');
    if (existingSub) existingSub.remove();
    const existingAvatar = teamNameEl.parentElement.querySelector('.header-avatar');
    if (existingAvatar) existingAvatar.remove();

    teamNameEl.innerHTML = `Olá, <b>${currentUser.name}</b>`;

    // Adicionar Avatar no Header
    const avatarContainer = document.createElement('div');
    avatarContainer.innerHTML = renderAvatarHTML(currentUser, 'header-avatar');
    teamNameEl.parentElement.prepend(avatarContainer.firstElementChild);

    const sub = document.createElement('div');
    sub.className = 'user-greeting';
    sub.textContent = 'Painel da Equipe';
    teamNameEl.parentElement.appendChild(sub);
  }
}

// ─────────────────────────────────────────────
// 1. CLOCK & DATE
// ─────────────────────────────────────────────
function startClock() {
  tick();
  setInterval(tick, 1000);
}
function tick() {
  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString('pt-BR');
  dateEl.textContent = now.toLocaleDateString('pt-BR', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
  });
}

// ─────────────────────────────────────────────
// 2. TEAM DATA
// ─────────────────────────────────────────────
function loadTeamData() {
  try {
    return JSON.parse(localStorage.getItem('gm_team') || 'null') ||
      { name: 'Minha Equipe', title: 'Gerenciador de Tarefas 🚀' };
  } catch { return { name: 'Minha Equipe', title: 'Gerenciador de Tarefas 🚀' }; }
}
function saveTeamData() {
  localStorage.setItem('gm_team', JSON.stringify(teamData));
}
function applyTeamData() {
  teamNameEl.textContent = teamData.name;
  teamTitleEl.textContent = teamData.title;
}

// ─────────────────────────────────────────────
// 3. WEEK GRID CONSTRUCTION
// ─────────────────────────────────────────────
function getWeekDates() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() - day + i);
    dates.push(d);
  }
  return dates;
}

function buildDaySelector() {
  const dates = getWeekDates();
  const today = new Date().getDay();
  taskDayEl.innerHTML = '';
  dates.forEach((d, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `${DAYS_SHORT[i]} (${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')})`;
    if (i === today) opt.selected = true;
    taskDayEl.appendChild(opt);
  });
}

function buildWeekGrid() {
  const dates = getWeekDates();
  weekGridEl.innerHTML = '';
  dates.forEach((d, dayIdx) => {
    const col = document.createElement('div');
    col.className = 'day-col';
    col.dataset.day = dayIdx;

    // Header
    col.innerHTML = `
      <div class="day-header">
        <div class="day-name">${DAYS_PT[dayIdx]}</div>
        <div class="day-date-num">${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}</div>
      </div>
    `;

    // Period blocks
    PERIODS.forEach(p => {
      const block = document.createElement('div');
      block.className = 'period-block';
      block.dataset.day = dayIdx;
      block.dataset.period = p.key;
      block.innerHTML = `<div class="period-label ${p.key}">${p.icon} ${p.label}</div>`;
      col.appendChild(block);
    });

    weekGridEl.appendChild(col);
  });
}

function setTodayColumn() {
  const today = new Date().getDay();
  document.querySelectorAll('.day-col').forEach(col => {
    col.classList.toggle('today', parseInt(col.dataset.day) === today);
  });
}

// ─────────────────────────────────────────────
// 4. TASKS — CRUD
// ─────────────────────────────────────────────
function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem('gm_tasks') || '[]');
  } catch { return []; }
}
function saveTasks() {
  localStorage.setItem('gm_tasks', JSON.stringify(tasks));

  // Simulação de Sincronização com Nuvem
  const indicator = $('syncIndicator');
  if (indicator) {
    document.body.classList.add('syncing');
    indicator.title = "Sincronizando...";
    setTimeout(() => {
      document.body.classList.remove('syncing');
      indicator.title = "Sincronizado com a nuvem";
    }, 800);
  }
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) { showToast('Digite o nome da tarefa!', 'error'); return; }

  const memberId = taskMemberEl.value;
  const member = members.find(m => m.id === memberId);

  const task = {
    id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
    text,
    day: parseInt(taskDayEl.value),
    period: taskPeriodEl.value,
    category: taskCatEl.value,
    priority: taskPriorEl.value,
    timeStart: timeStartEl.value,
    timeEnd: timeEndEl.value,
    assignedTo: memberId,
    createdBy: currentUser.id,
    creatorName: currentUser.name,
    done: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(task);
  saveTasks();
  taskInput.value = '';
  timeStartEl.value = '';
  timeEndEl.value = '';

  renderAllTasks();
  updateStats();
  redrawPerformance();
  addNotification(`✅ Tarefa adicionada: "${task.text}" — ${DAYS_SHORT[task.day]}, ${getPeriodLabel(task.period)}`);
  logActivity(currentUser.id, `agendou a tarefa <b>"${task.text}"</b> para ${member.name}`);
  showToast(`Tarefa agendada para ${DAYS_SHORT[task.day]}!`, 'success');
}

function toggleTask(id) {
  const t = tasks.find(x => x.id === id);
  if (!t) return;
  t.done = !t.done;
  saveTasks();
  renderAllTasks();
  updateStats();
  redrawPerformance();
  if (t.done) {
    logActivity(t.assignedTo, `concluiu a tarefa <b>"${t.text}"</b>`);
    showToast('Tarefa concluída! 🎉', 'success');
  }
}

function deleteTask(id) {
  const t = tasks.find(x => x.id === id);
  if (!t) return;
  const oldText = t.text;
  const oldMember = t.assignedTo;
  tasks = tasks.filter(x => x.id !== id);
  saveTasks();
  renderAllTasks();
  updateStats();
  redrawPerformance();
  addNotification(`🗑️ Tarefa removida: "${oldText}"`);
  logActivity(oldMember, `removeu a tarefa <b>"${oldText}"</b>`);
  showToast('Tarefa removida.', 'info');
}

// ─────────────────────────────────────────────
// 5. RENDER TASKS
// ─────────────────────────────────────────────
function getFilteredTasks() {
  return tasks.filter(t => {
    const matchFilter = activeFilter === 'all' || t.priority === activeFilter;
    const matchMember = activeMemberFilter === 'all' || t.assignedTo === activeMemberFilter;
    const matchSearch = !searchQuery || t.text.toLowerCase().includes(searchQuery);

    // Filtro colaborativo: Equipe (todas) vs Minhas
    const matchView = activeViewFilter === 'team' || t.assignedTo === currentUser?.id || t.createdBy === currentUser?.id;

    return matchFilter && matchMember && matchSearch && matchView;
  });
}

function renderAllTasks() {
  // Clear all period blocks (keep label)
  document.querySelectorAll('.period-block').forEach(block => {
    // Remove all chips, keep label
    const label = block.querySelector('.period-label');
    block.innerHTML = '';
    if (label) block.appendChild(label);
  });

  const filtered = getFilteredTasks();
  filtered.forEach(t => renderTaskChip(t));
}

function renderTaskChip(t) {
  const block = document.querySelector(`.period-block[data-day="${t.day}"][data-period="${t.period}"]`);
  if (!block) return;

  const member = members.find(m => m.id === t.assignedTo) || members[0];

  const chip = document.createElement('div');
  chip.className = `task-chip ${t.priority}${t.done ? ' done' : ''}`;
  chip.dataset.id = t.id;
  chip.dataset.memberColor = member.color;
  chip.style.borderLeftColor = member.color;

  const timeStr = t.timeStart
    ? `${t.timeStart}${t.timeEnd ? ' – ' + t.timeEnd : ''}`
    : '';

  const isOtherEditing = Math.random() < 0.05 && currentUser?.id !== member.id; // Simulação de edição concorrente

  chip.innerHTML = `
    <div class="chip-check" title="${t.done ? 'Desmarcar' : 'Concluir'}" data-action="toggle">${t.done ? '✓' : ''}</div>
    <div class="chip-content">
      <div class="chip-top">
        <span class="chip-text">${escapeHtml(t.text)}</span>
        <span class="member-badge" style="background:${member.color}">${member.name}</span>
      </div>
      ${timeStr ? `<span class="chip-time">⏰ ${timeStr}</span>` : ''}
      <span class="chip-cat">${t.category} · ${PRIORITY_MAP[t.priority]?.icon || ''} ${PRIORITY_MAP[t.priority]?.label || ''}</span>
      ${t.createdBy !== t.assignedTo ? `<span class="chip-creator">Criado por: ${t.creatorName}</span>` : ''}
    </div>
    ${renderAvatarHTML(member, 'chip-avatar')}
    <button class="chip-delete" data-action="delete" title="Remover">✕</button>
  `;

  block.appendChild(chip);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function getPeriodLabel(key) {
  return PERIODS.find(p => p.key === key)?.label || key;
}

// ─────────────────────────────────────────────
// 6. STATS
// ─────────────────────────────────────────────
function updateStats() {
  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const pending = total - done;
  const pct = total ? Math.round((done / total) * 100) : 0;

  animateNumber($('statTotal'), total);
  animateNumber($('statDone'), done);
  animateNumber($('statPending'), pending);
  $('statProductivity').textContent = pct + '%';
}

function animateNumber(el, target) {
  if (!el) return;
  const current = parseInt(el.textContent) || 0;
  if (current === target) return;
  const step = target > current ? 1 : -1;
  let val = current;
  const interval = setInterval(() => {
    val += step;
    el.textContent = val;
    if (val === target) clearInterval(interval);
  }, 30);
}

// ─────────────────────────────────────────────
// 7. PERFORMANCE SECTION (rings + progress + chart)
// ─────────────────────────────────────────────
function redrawPerformance() {
  updateWeeklyProgress();
}

/* Removido renderDayRings conforme solicitação */

function updateWeeklyProgress() {
  const fill = $('weeklyProgressFill');
  const pctEl = $('weeklyPct');
  if (!fill || !pctEl) return;

  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  fill.style.width = pct + '%';
  pctEl.textContent = pct + '%';
}

// ─────────────────────────────────────────────
// 8. EXPORT / IMPORT
// ─────────────────────────────────────────────
function exportTasks() {
  const data = { tasks, teamData, exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `tarefas_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Tarefas exportadas com sucesso! 📤', 'success');
}

function importTasks(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.tasks && Array.isArray(data.tasks)) {
        tasks = data.tasks;
        saveTasks();
        if (data.teamData) {
          teamData = data.teamData;
          saveTeamData();
          applyTeamData();
        }
        renderAllTasks();
        updateStats();
        redrawPerformance();
        showToast(`${tasks.length} tarefas importadas! 📥`, 'success');
        addNotification(`📥 Importação concluída: ${tasks.length} tarefas carregadas.`);
      } else {
        showToast('Arquivo inválido!', 'error');
      }
    } catch {
      showToast('Erro ao ler o arquivo.', 'error');
    }
  };
  reader.readAsText(file);
}

// ─────────────────────────────────────────────
// 9. NOTIFICATIONS
// ─────────────────────────────────────────────
function loadNotifications() {
  try { return JSON.parse(localStorage.getItem('gm_notifs') || '[]'); } catch { return []; }
}
function saveNotifications() { localStorage.setItem('gm_notifs', JSON.stringify(notifications)); }

function addNotification(msg) {
  notifications.unshift({ msg, time: new Date().toLocaleTimeString('pt-BR') });
  if (notifications.length > 50) notifications.pop();
  saveNotifications();
  renderNotifications();
}

function renderNotifications() {
  if (!notifListEl) return;
  if (notifications.length === 0) {
    notifListEl.innerHTML = '<p class="notif-empty">Sem notificações no momento.</p>';
    return;
  }
  notifListEl.innerHTML = notifications.map(n => `
    <div class="notif-item">
      <div>${escapeHtml(n.msg)}</div>
      <div class="notif-time">${n.time}</div>
    </div>
  `).join('');
}

function scheduleNotifCheck() {
  // Alert if there are urgent tasks today
  const today = new Date().getDay();
  const urgentToday = tasks.filter(t => t.day === today && t.priority === 'urgent' && !t.done);
  if (urgentToday.length > 0) {
    addNotification(`🔥 Você tem ${urgentToday.length} tarefa(s) URGENTE(s) hoje!`);
  }
}

// ─────────────────────────────────────────────
// 10. TOASTS
// ─────────────────────────────────────────────
function showToast(msg, type = 'info') {
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  toastEl.appendChild(t);
  setTimeout(() => t.remove(), 3300);
}

// ─────────────────────────────────────────────
// 11. THEME TOGGLE
// ─────────────────────────────────────────────
function toggleTheme() {
  const html = document.documentElement;
  const dark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', dark ? 'light' : 'dark');
  $('themeToggle').textContent = dark ? '🌙' : '☀️';
  localStorage.setItem('gm_theme', dark ? 'light' : 'dark');
}

// Restore theme
(function restoreTheme() {
  const saved = localStorage.getItem('gm_theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    if ($('themeToggle')) $('themeToggle').textContent = saved === 'dark' ? '☀️' : '🌙';
  }
  setTimeout(() => { if (typeof redrawPerformance === 'function') redrawPerformance(); }, 100);
})();

// ─────────────────────────────────────────────
// 12. EVENT LISTENERS
// ─────────────────────────────────────────────
function hookEvents() {
  // Add task
  $('addTaskBtn').addEventListener('click', addTask);
  taskInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') addTask();
  });

  // Filters (Priority)
  document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderAllTasks();
    });
  });

  // View Filters (Team vs Mine)
  if ($('btnTeamTasks')) {
    $('btnTeamTasks').onclick = () => {
      activeViewFilter = 'team';
      $('btnTeamTasks').classList.add('active');
      $('btnMyTasks').classList.remove('active');
      renderAllTasks();
    };
  }
  if ($('btnMyTasks')) {
    $('btnMyTasks').onclick = () => {
      activeViewFilter = 'mine';
      $('btnMyTasks').classList.add('active');
      $('btnTeamTasks').classList.remove('active');
      renderAllTasks();
    };
  }

  // Search
  searchEl.addEventListener('input', e => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderAllTasks();
  });

  // Delegate task actions (toggle / delete)
  weekGridEl.addEventListener('click', e => {
    const chip = e.target.closest('.task-chip');
    if (!chip) return;
    const id = chip.dataset.id;
    const action = e.target.closest('[data-action]')?.dataset.action;
    if (action === 'toggle') toggleTask(id);
    else if (action === 'delete') deleteTask(id);
  });

  // Theme
  $('themeToggle').addEventListener('click', toggleTheme);

  // Export / Import
  $('exportBtn').addEventListener('click', exportTasks);
  $('importBtnTrigger').addEventListener('click', () => $('importInput').click());
  $('importInput').addEventListener('change', e => {
    importTasks(e.target.files[0]);
    e.target.value = '';
  });

  // Edit team name
  $('editTeamBtn').addEventListener('click', () => {
    $('teamNameInput').value = teamData.name;
    $('teamTitleInput').value = teamData.title;
    $('teamModal').classList.remove('hidden');
  });
  $('saveTeamBtn').addEventListener('click', () => {
    teamData.name = $('teamNameInput').value.trim() || teamData.name;
    teamData.title = $('teamTitleInput').value.trim() || teamData.title;
    saveTeamData();
    applyTeamData();
    $('teamModal').classList.add('hidden');
    showToast('Dados atualizados!', 'success');
  });
  $('cancelTeamBtn').addEventListener('click', () => $('teamModal').classList.add('hidden'));
  $('teamModal').addEventListener('click', e => { if (e.target === $('teamModal')) $('teamModal').classList.add('hidden'); });

  // Notifications modal
  $('notifBtn').addEventListener('click', () => {
    renderNotifications();
    $('notifModal').classList.remove('hidden');
  });
  $('closeNotifBtn').addEventListener('click', () => $('notifModal').classList.add('hidden'));
  $('clearNotifBtn').addEventListener('click', () => {
    notifications = [];
    saveNotifications();
    renderNotifications();
    showToast('Notificações limpas.', 'info');
  });
  $('notifModal').addEventListener('click', e => { if (e.target === $('notifModal')) $('notifModal').classList.add('hidden'); });

  // Activity Sidebar
  $('activityBtn').addEventListener('click', () => {
    activitySidebar.classList.toggle('hidden');
    renderActivities();
  });
  $('closeSidebar').addEventListener('click', () => activitySidebar.classList.add('hidden'));

  // Member Filters delegator
  memberFiltersEl.addEventListener('click', e => {
    const btn = e.target.closest('.member-filter-btn');
    if (!btn) return;
    const memberId = btn.dataset.id;

    document.querySelectorAll('.member-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    activeMemberFilter = memberId;
    renderAllTasks();
  });

  // auth-switch
  if ($('switchToSignup')) {
    $('switchToSignup').onclick = () => {
      $('loginSection').classList.add('hidden');
      $('signupSection').classList.remove('hidden');
    };
  }
  if ($('switchToLogin')) {
    $('switchToLogin').onclick = () => {
      $('signupSection').classList.add('hidden');
      $('loginSection').classList.remove('hidden');
    };
  }

  // Color picker
  document.querySelectorAll('.color-opt').forEach(opt => {
    opt.onclick = () => {
      document.querySelectorAll('.color-opt').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      $('signupColor').value = opt.dataset.color;
    };
  });

  // Login / Signup Logic
  if ($('loginBtn')) {
    $('loginBtn').onclick = () => {
      const name = $('loginUsername').value.trim();
      const pass = $('loginPassword').value.trim();
      if (!name || !pass) return showToast('Preencha todos os campos!', 'error');

      const member = members.find(m => m.name.toLowerCase() === name.toLowerCase());
      if (!member || member.password !== pass) {
        return showToast('Usuário ou senha inválidos!', 'error');
      }

      currentUser = member;
      saveCurrentUser(currentUser);
      checkLogin();
      showToast(`Bem-vindo, ${member.name}! 👋`, 'success');
      location.reload();
    };
  }

  if ($('signupBtn')) {
    $('signupBtn').onclick = () => {
      const name = $('signupUsername').value.trim();
      const pass = $('signupPassword').value.trim();
      const color = $('signupColor').value;

      if (!name || !pass) return showToast('Preencha os campos obrigatórios!', 'error');

      const id = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '_');
      if (members.find(m => m.id === id)) return showToast('Esse nome já existe!', 'error');

      const newMember = {
        id,
        name,
        password: pass,
        color,
        avatar: ''
      };

      members.push(newMember);
      saveMembers();
      currentUser = newMember;
      saveCurrentUser(currentUser);

      buildMemberSelector();
      buildMemberFilters();
      checkLogin();
      showToast(`Conta criada com sucesso, ${name}! ✨`, 'success');
      logActivity(id, `cadastrou-se no sistema`);
      setTimeout(() => location.reload(), 1000);
    };
  }

  $('logoutBtn').onclick = () => {
    saveCurrentUser(null);
    location.reload();
  };

  // Redraw chart on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => redrawPerformance(), 200);
  });
}

// ─────────────────────────────────────────────
// 8. TEAM LOGIC & ACTIVITIES
// ─────────────────────────────────────────────
function buildMemberSelector() {
  taskMemberEl.innerHTML = members.map(m => `
    <option value="${m.id}">${m.name}</option>
  `).join('');
}

function buildMemberFilters() {
  let html = `<button class="member-filter-btn active" data-id="all" data-name="Todos">
    <div class="avatar-initials" style="background: var(--bg-card2); color: var(--text-secondary); border: 1px solid var(--border)">👥</div>
  </button>`;

  members.forEach(m => {
    html += `
      <button class="member-filter-btn" data-id="${m.id}" data-name="${m.name}">
        ${renderAvatarHTML(m)}
      </button>
    `;
  });

  // Botão para adicionar novo membro
  html += `
    <button class="btn-icon add-member-btn" id="addMemberBtn" title="Adicionar Membro">➕</button>
  `;

  memberFiltersEl.innerHTML = html;

  // Re-bind click event for the new button
  const addBtn = $('addMemberBtn');
  if (addBtn) addBtn.onclick = promptAddMember;
}

function promptAddMember() {
  const name = prompt('Nome do novo membro:');
  if (!name) return;

  const id = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '_');
  if (members.find(m => m.id === id)) {
    showToast('Esse membro já existe!', 'error');
    return;
  }

  const colors = ['#4F6EF7', '#FF9F43', '#26de81', '#FF5757', '#9c27b0', '#00bcd4'];
  const newMember = {
    id,
    name,
    color: colors[members.length % colors.length],
    avatar: `https://i.pravatar.cc/150?u=${id}`
  };

  members.push(newMember);
  saveMembers();
  buildMemberSelector();
  buildMemberFilters();
  updateOnlineStatus();
  showToast(`${name} adicionado à equipe!`, 'success');
  logActivity(id, `entrou na equipe`); // Loga a entrada do próprio membro
  showToast('Equipa atualizada!', 'success');
}

function updateOnlineStatus() {
  // Simular online: Eduardo sempre online, outros chance de 70%
  const onlineMembers = members.filter(m => m.id === 'eduardo' || Math.random() > 0.3);
  onlineAvatarsEl.innerHTML = onlineMembers.map(m => renderAvatarHTML(m, 'avatar-mini')).join('');
  onlineCountEl.textContent = `${onlineMembers.length} membros online`;
}

function loadActivities() {
  try { return JSON.parse(localStorage.getItem('gm_activities') || '[]'); }
  catch { return []; }
}

function saveActivities() {
  localStorage.setItem('gm_activities', JSON.stringify(activities.slice(0, 50)));
}

function logActivity(memberId, actionHtml) {
  const member = members.find(m => m.id === memberId) || members[0];
  const item = {
    id: Date.now(),
    memberId,
    memberName: member.name,
    memberColor: member.color,
    action: actionHtml,
    time: new Date().toISOString()
  };
  activities.unshift(item);
  saveActivities();
  renderActivities();
}

function renderActivities() {
  if (!activityListEl) return;
  if (activities.length === 0) {
    activityListEl.innerHTML = '<p class="notif-empty">Nenhuma atividade recente.</p>';
    return;
  }

  activityListEl.innerHTML = activities.slice(0, 20).map(act => {
    const virtualMember = { name: act.memberName, color: act.memberColor };
    return `
    <div class="activity-item">
      ${renderAvatarHTML(virtualMember, 'activity-avatar')}
      <div class="activity-info">
        <div><b>${act.memberName}</b> ${act.action}</div>
        <div class="activity-time">${formatRelativeTime(act.time)}</div>
      </div>
    </div>
  `}).join('');
}

function formatRelativeTime(iso) {
  const diff = Math.floor((new Date() - new Date(iso)) / 1000);
  if (diff < 60) return 'agora mesmo';
  if (diff < 3600) return `há ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `há ${Math.floor(diff / 3600)} horas`;
  return new Date(iso).toLocaleDateString();
}
