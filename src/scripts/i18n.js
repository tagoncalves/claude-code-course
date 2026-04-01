// ─── i18n client-side language switcher ──────────────────────────────────────

const STORAGE_KEY = 'claude-guide-progress';
const SUPPORTED = ['es', 'en', 'pt'];

// Translations embedded at build time via inline JSON
// (injected by Layout.astro as window.__TRANSLATIONS__)
function getT() {
  return window.__TRANSLATIONS__ || {};
}

function detectLang() {
  const nav = (navigator.language || navigator.languages?.[0] || 'es').toLowerCase().slice(0, 2);
  if (nav === 'en') return 'en';
  if (nav === 'pt') return 'pt';
  return 'es';
}

function loadLang() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.lang && SUPPORTED.includes(parsed.lang)) return parsed.lang;
    }
  } catch {}
  return detectLang();
}

function saveLang(lang) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const state = raw ? JSON.parse(raw) : {};
    state.lang = lang;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

// Apply lang: update data attribute, CSS content blocks, and translatable strings
function applyLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  updateLangPills(lang);
  updateTranslatableStrings(lang);
  saveLang(lang);
}

function updateLangPills(lang) {
  document.querySelectorAll('.lang-pill').forEach((pill) => {
    pill.classList.toggle('active', pill.dataset.lang === lang);
    pill.setAttribute('aria-pressed', pill.dataset.lang === lang);
  });
}

function updateTranslatableStrings(lang) {
  const t = getT()[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key && t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update title
  if (t.pageTitle) document.title = t.pageTitle;

  // Update step labels in sidebar and step cards
  if (t.steps) {
    t.steps.forEach((step, i) => {
      // Sidebar label
      const sidebarLabel = document.querySelector(`.sidebar-step[data-step-id="${i}"] .sidebar-step-label`);
      if (sidebarLabel) sidebarLabel.innerHTML = `<span aria-hidden="true">${step.icon}</span> ${step.title}`;

      // Step card heading
      const stepHeading = document.querySelector(`#step-${i} .step-header h2`);
      if (stepHeading) stepHeading.innerHTML = `<span aria-hidden="true">${step.icon}</span> ${step.title}`;
    });
  }

  // Update copy buttons (only if not mid-copy)
  document.querySelectorAll('.copy-btn .copy-label').forEach((label) => {
    if (label.textContent !== (getT()[lang]?.copied || 'Copied!')) {
      label.textContent = t.copy || 'Copy';
    }
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
function initI18n() {
  const lang = loadLang();
  applyLang(lang);

  document.querySelectorAll('.lang-pill').forEach((pill) => {
    pill.addEventListener('click', () => applyLang(pill.dataset.lang));
  });
}

document.addEventListener('DOMContentLoaded', initI18n);

// Export for use in progress.js copy button feedback
window.__getLang = loadLang;
window.__getT = getT;
window.__applyLang = applyLang;
