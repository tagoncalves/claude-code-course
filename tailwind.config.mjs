/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        bg:             '#0d1117',
        surface:        '#161b22',
        'surface-2':    '#1c2230',
        border:         '#30363d',
        accent:         '#7c3aed',
        'accent-light': '#9f67ff',
        'accent-dim':   'rgba(124,58,237,0.12)',
        cyan:           '#06b6d4',
        'cyan-dim':     'rgba(6,182,212,0.10)',
        text:           '#e6edf3',
        muted:          '#8b949e',
        success:        '#3fb950',
        'success-dim':  'rgba(63,185,80,0.1)',
        warning:        '#d29922',
        danger:         '#f85149',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', '"Cascadia Code"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        accent: '0 0 20px rgba(124,58,237,0.25)',
        card:   '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};
