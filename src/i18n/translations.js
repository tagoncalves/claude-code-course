// ─── Translation dictionary ───────────────────────────────────────────────────
// All UI strings for the 3 supported languages.
// Step body content uses data-lang HTML blocks (see index.astro).

export const translations = {
  es: {
    // Meta
    pageTitle: 'Claude Code — Guía de Instalación',
    pageDescription: 'Guía interactiva paso a paso para instalar, configurar y usar Claude Code de Anthropic.',

    // Header
    headerTitle: 'Claude Code — Guía de instalación',
    headerSubtitle: 'Seguí este paso a paso para instalar, configurar y empezar a usar Claude Code, la CLI oficial de Anthropic para trabajar con IA desde tu terminal.',
    headerSupport: '¿Te resultó útil?',

    // Sidebar
    sidebarTitle: 'Claude Code',
    sidebarSubtitle: 'Guía de instalación',
    sidebarNav: 'Pasos',
    sidebarProgress: 'Progreso',
    sidebarCafecito: '¿Te fue útil esta guía?',

    // Mobile progress
    mobileTitle: 'Claude Code — Guía de instalación',
    stepOf: 'Paso {current} de {total}',

    // OS Tabs
    osTabWindows: 'Windows',
    osTabMacos: 'macOS',
    osTabLinux: 'Linux',
    osTabsLabel: 'Sistema operativo',

    // Step names
    steps: [
      { title: 'Prerequisitos', icon: '✅' },
      { title: 'Instalar Claude Code', icon: '📦' },
      { title: 'Configurar PATH', icon: '🔧' },
      { title: 'API Key', icon: '🔑' },
      { title: 'Primera verificación', icon: '🚀' },
      { title: 'Configuración esencial', icon: '⚙️' },
      { title: 'Shortcuts & Tips', icon: '💡' },
      { title: 'Directivas & .gitignore', icon: '📁' },
    ],

    // Step card UI
    markDone: 'Marcar como completado',
    completed: 'Completado',

    // Code blocks
    copy: 'Copiar',
    copied: '¡Copiado!',

    // Celebration
    celebrationEmoji: '🚀',
    celebrationTitle: '¡Felicitaciones, developer!',
    celebrationSubtitle: 'Completaste la configuración de Claude Code. Ya tenés todo listo para potenciar tu flujo de trabajo con IA directamente desde la terminal.',
    badge1: '✦ Claude Code instalado',
    badge2: '✓ API Key configurada',
    badge3: '⚡ Listo para usar',
    resourcesOfficialDocs: 'Documentación oficial',
    resourcesOfficialDocsDesc: 'Referencia completa de Claude Code',
    resourcesGitHub: 'GitHub',
    resourcesGitHubDesc: 'Código fuente y issues',
    resourcesConsole: 'Anthropic Console',
    resourcesConsoleDesc: 'Gestionar API keys y uso',
    resourcesChangelog: 'Changelog',
    resourcesChangelogDesc: 'Novedades y actualizaciones',
    cafecitoText: 'Si esta guía te ayudó, podés invitarme un café ☕',
    resetQuestion: '¿Querés empezar de nuevo?',
    resetBtn: '↩ Reiniciar progreso',

    // Celebration step header
    celebrationStepTitle: '¡Completado!',

    // Lang switcher
    langLabel: 'Idioma',
  },

  en: {
    // Meta
    pageTitle: 'Claude Code — Installation Guide',
    pageDescription: 'Interactive step-by-step guide to install, configure, and use Anthropic\'s Claude Code CLI.',

    // Header
    headerTitle: 'Claude Code — Installation Guide',
    headerSubtitle: 'Follow this step-by-step guide to install, configure, and start using Claude Code, Anthropic\'s official CLI for working with AI directly from your terminal.',
    headerSupport: 'Was this helpful?',

    // Sidebar
    sidebarTitle: 'Claude Code',
    sidebarSubtitle: 'Installation Guide',
    sidebarNav: 'Steps',
    sidebarProgress: 'Progress',
    sidebarCafecito: 'Was this guide helpful?',

    // Mobile progress
    mobileTitle: 'Claude Code — Installation Guide',
    stepOf: 'Step {current} of {total}',

    // OS Tabs
    osTabWindows: 'Windows',
    osTabMacos: 'macOS',
    osTabLinux: 'Linux',
    osTabsLabel: 'Operating system',

    // Step names
    steps: [
      { title: 'Prerequisites', icon: '✅' },
      { title: 'Install Claude Code', icon: '📦' },
      { title: 'Configure PATH', icon: '🔧' },
      { title: 'API Key', icon: '🔑' },
      { title: 'First Verification', icon: '🚀' },
      { title: 'Essential Config', icon: '⚙️' },
      { title: 'Shortcuts & Tips', icon: '💡' },
      { title: 'Directives & .gitignore', icon: '📁' },
    ],

    // Step card UI
    markDone: 'Mark as complete',
    completed: 'Completed',

    // Code blocks
    copy: 'Copy',
    copied: 'Copied!',

    // Celebration
    celebrationEmoji: '🚀',
    celebrationTitle: 'Congratulations, developer!',
    celebrationSubtitle: 'You completed the Claude Code setup. You\'re all set to supercharge your workflow with AI directly from the terminal.',
    badge1: '✦ Claude Code installed',
    badge2: '✓ API Key configured',
    badge3: '⚡ Ready to use',
    resourcesOfficialDocs: 'Official Docs',
    resourcesOfficialDocsDesc: 'Full Claude Code reference',
    resourcesGitHub: 'GitHub',
    resourcesGitHubDesc: 'Source code and issues',
    resourcesConsole: 'Anthropic Console',
    resourcesConsoleDesc: 'Manage API keys and usage',
    resourcesChangelog: 'Changelog',
    resourcesChangelogDesc: 'Latest updates and releases',
    cafecitoText: 'If this guide helped you, you can buy me a coffee ☕',
    resetQuestion: 'Want to start over?',
    resetBtn: '↩ Reset progress',

    // Celebration step header
    celebrationStepTitle: 'Completed!',

    // Lang switcher
    langLabel: 'Language',
  },

  pt: {
    // Meta
    pageTitle: 'Claude Code — Guia de Instalação',
    pageDescription: 'Guia interativo passo a passo para instalar, configurar e usar o Claude Code da Anthropic.',

    // Header
    headerTitle: 'Claude Code — Guia de Instalação',
    headerSubtitle: 'Siga este passo a passo para instalar, configurar e começar a usar o Claude Code, a CLI oficial da Anthropic para trabalhar com IA diretamente do terminal.',
    headerSupport: 'Foi útil para você?',

    // Sidebar
    sidebarTitle: 'Claude Code',
    sidebarSubtitle: 'Guia de Instalação',
    sidebarNav: 'Passos',
    sidebarProgress: 'Progresso',
    sidebarCafecito: 'Este guia foi útil?',

    // Mobile progress
    mobileTitle: 'Claude Code — Guia de Instalação',
    stepOf: 'Passo {current} de {total}',

    // OS Tabs
    osTabWindows: 'Windows',
    osTabMacos: 'macOS',
    osTabLinux: 'Linux',
    osTabsLabel: 'Sistema operacional',

    // Step names
    steps: [
      { title: 'Pré-requisitos', icon: '✅' },
      { title: 'Instalar Claude Code', icon: '📦' },
      { title: 'Configurar PATH', icon: '🔧' },
      { title: 'API Key', icon: '🔑' },
      { title: 'Primeira Verificação', icon: '🚀' },
      { title: 'Config Essencial', icon: '⚙️' },
      { title: 'Atalhos & Dicas', icon: '💡' },
      { title: 'Diretivas & .gitignore', icon: '📁' },
    ],

    // Step card UI
    markDone: 'Marcar como concluído',
    completed: 'Concluído',

    // Code blocks
    copy: 'Copiar',
    copied: 'Copiado!',

    // Celebration
    celebrationEmoji: '🚀',
    celebrationTitle: 'Parabéns, developer!',
    celebrationSubtitle: 'Você concluiu a configuração do Claude Code. Tudo pronto para turbinar seu fluxo de trabalho com IA direto do terminal.',
    badge1: '✦ Claude Code instalado',
    badge2: '✓ API Key configurada',
    badge3: '⚡ Pronto para usar',
    resourcesOfficialDocs: 'Documentação oficial',
    resourcesOfficialDocsDesc: 'Referência completa do Claude Code',
    resourcesGitHub: 'GitHub',
    resourcesGitHubDesc: 'Código-fonte e issues',
    resourcesConsole: 'Anthropic Console',
    resourcesConsoleDesc: 'Gerenciar API keys e uso',
    resourcesChangelog: 'Changelog',
    resourcesChangelogDesc: 'Novidades e atualizações',
    cafecitoText: 'Se este guia ajudou você, pode me pagar um café ☕',
    resetQuestion: 'Quer começar de novo?',
    resetBtn: '↩ Reiniciar progresso',

    // Celebration step header
    celebrationStepTitle: 'Concluído!',

    // Lang switcher
    langLabel: 'Idioma',
  },
};

export const supportedLangs = ['es', 'en', 'pt'];
export const defaultLang = 'es';

export function detectLang() {
  const nav = navigator.language || navigator.languages?.[0] || 'es';
  const code = nav.toLowerCase().slice(0, 2);
  if (code === 'en') return 'en';
  if (code === 'pt') return 'pt';
  return 'es';
}
