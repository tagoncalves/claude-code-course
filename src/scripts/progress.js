// ─── Constants ──────────────────────────────────────────────────────────────
const STORAGE_KEY = 'claude-guide-progress';
const TOTAL_STEPS = 7; // steps 0–6 (step 7 is the celebration screen, not a trackable step)

// ─── State ───────────────────────────────────────────────────────────────────
let state = loadState();

function defaultState() {
  return {
    version: 1,
    activeOs: detectOS(),
    completedSteps: [],
    lastUpdated: null,
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    if (parsed.version !== 1) return defaultState();
    return parsed;
  } catch {
    return defaultState();
  }
}

function saveState() {
  state.lastUpdated = new Date().toISOString();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (private browsing etc.)
  }
}

// ─── OS Detection ─────────────────────────────────────────────────────────────
function detectOS() {
  const ua = navigator.userAgent;
  if (ua.includes('Win')) return 'windows';
  if (ua.includes('Mac')) return 'macos';
  return 'linux';
}

function setActiveOS(os) {
  state.activeOs = os;
  document.documentElement.dataset.activeOs = os;
  updateOSTabs(os);
  saveState();
}

function updateOSTabs(os) {
  document.querySelectorAll('.os-tab').forEach((tab) => {
    const isActive = tab.dataset.os === os;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', isActive);
  });
}

// ─── Progress Logic ──────────────────────────────────────────────────────────
function isStepUnlocked(stepId) {
  if (stepId === 0) return true;
  return state.completedSteps.includes(stepId - 1);
}

function isStepDone(stepId) {
  return state.completedSteps.includes(stepId);
}

function markStepDone(stepId) {
  if (!isStepUnlocked(stepId)) return;
  if (isStepDone(stepId)) return;
  state.completedSteps.push(stepId);
  saveState();
  renderAllStepStates();
  if (stepId === TOTAL_STEPS - 1) {
    // Last real step (6) done → scroll to celebration and trigger confetti
    setTimeout(() => scrollToStep(7), 300);
    setTimeout(() => triggerCelebration(), 800);
  } else {
    setTimeout(() => scrollToStep(stepId + 1), 300);
  }
}

function resetAll() {
  state = defaultState();
  saveState();
  document.documentElement.dataset.activeOs = state.activeOs;
  updateOSTabs(state.activeOs);
  renderAllStepStates();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Clear confetti
  const container = document.getElementById('confetti-container');
  if (container) container.innerHTML = '';
}

// ─── DOM Updates ─────────────────────────────────────────────────────────────
function renderAllStepStates() {
  for (let i = 0; i < TOTAL_STEPS; i++) {
    const card = document.querySelector(`.step-card[data-step-id="${i}"]`);
    if (!card) continue;
    const done = isStepDone(i);
    const unlocked = isStepUnlocked(i);
    card.classList.toggle('step-done', done);
    card.classList.toggle('step-active', unlocked && !done);
    card.classList.toggle('step-locked', !unlocked);
    const btn = card.querySelector('.mark-done-btn');
    if (btn) btn.disabled = !unlocked || done;
  }
  updateProgressBar();
  updateSidebar();
}

function updateProgressBar() {
  const count = state.completedSteps.length;
  const pct = (count / TOTAL_STEPS) * 100;

  document.querySelectorAll('.progress-fill').forEach((el) => {
    el.style.width = pct + '%';
  });
  document.querySelectorAll('.progress-label').forEach((el) => {
    el.textContent = `${count} / ${TOTAL_STEPS}`;
  });
  document.querySelectorAll('.progress-step-label').forEach((el) => {
    el.textContent = `Paso ${count} de ${TOTAL_STEPS}`;
  });
}

function updateSidebar() {
  for (let i = 0; i < TOTAL_STEPS; i++) {
    const item = document.querySelector(`.sidebar-step[data-step-id="${i}"]`);
    if (!item) continue;
    const done = isStepDone(i);
    const unlocked = isStepUnlocked(i);
    item.classList.toggle('done', done);
    item.classList.toggle('active', unlocked && !done);
    item.classList.toggle('locked', !unlocked);
  }
}

function scrollToStep(stepId) {
  const el = document.getElementById(`step-${stepId}`);
  if (!el) return;
  const offset = 20;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

// ─── Confetti ─────────────────────────────────────────────────────────────────
function triggerCelebration() {
  const container = document.getElementById('confetti-container');
  if (!container) return;
  container.innerHTML = '';

  const colors = ['#7c3aed', '#9f67ff', '#06b6d4', '#22c55e', '#f59e0b', '#e2e8f0', '#a78bfa'];
  const count = 70;

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-particle';
    el.style.left = Math.random() * 100 + '%';
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.width = Math.random() * 8 + 6 + 'px';
    el.style.height = Math.random() * 8 + 6 + 'px';
    el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    el.style.animationDuration = Math.random() * 2 + 2.5 + 's';
    el.style.animationDelay = Math.random() * 1.5 + 's';
    el.addEventListener('animationend', () => el.remove(), { once: true });
    fragment.appendChild(el);
  }
  container.appendChild(fragment);
}

// ─── Copy Button (event delegation) ──────────────────────────────────────────
function handleCopyClick(e) {
  const btn = e.target.closest('.copy-btn');
  if (!btn) return;
  const code = btn.dataset.code;
  if (!code) return;
  navigator.clipboard.writeText(code).then(() => {
    const label = btn.querySelector('.copy-label');
    if (label) {
      label.textContent = 'Copiado!';
      btn.classList.add('copied');
      setTimeout(() => {
        label.textContent = 'Copiar';
        btn.classList.remove('copied');
      }, 2000);
    }
  }).catch(() => {});
}

// ─── Sidebar step click → scroll ─────────────────────────────────────────────
function handleSidebarClick(e) {
  const item = e.target.closest('.sidebar-step');
  if (!item) return;
  const stepId = parseInt(item.dataset.stepId);
  if (!isNaN(stepId)) scrollToStep(stepId);
}

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
  // Apply saved OS
  setActiveOS(state.activeOs);

  // OS tab clicks
  document.querySelectorAll('.os-tab').forEach((tab) => {
    tab.addEventListener('click', () => setActiveOS(tab.dataset.os));
  });

  // Mark done buttons
  document.querySelectorAll('.mark-done-btn').forEach((btn) => {
    btn.addEventListener('click', () => markStepDone(parseInt(btn.dataset.step)));
  });

  // Copy buttons (delegated)
  document.addEventListener('click', handleCopyClick);

  // Sidebar step navigation
  const sidebar = document.querySelector('.sidebar-steps');
  if (sidebar) sidebar.addEventListener('click', handleSidebarClick);

  // Reset button
  document.getElementById('reset-progress')?.addEventListener('click', resetAll);

  // Render initial state from localStorage
  renderAllStepStates();
}

document.addEventListener('DOMContentLoaded', init);
