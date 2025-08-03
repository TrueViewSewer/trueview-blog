/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(210 11% 15%)',
        card: 'hsl(0 0% 100%)',
        'card-foreground': 'hsl(210 11% 15%)',
        primary: 'hsl(214 32% 91%)',
        'primary-foreground': 'hsl(210 11% 15%)',
        secondary: 'hsl(210 40% 98%)',
        'secondary-foreground': 'hsl(210 11% 15%)',
        muted: 'hsl(210 40% 98%)',
        'muted-foreground': 'hsl(215 16% 47%)',
        accent: 'hsl(199 95% 74%)',
        'accent-foreground': 'hsl(210 11% 15%)',
        border: 'hsl(214 32% 91%)',
        slate: 'hsl(210 40% 98%)',
        'slate-foreground': 'hsl(215 25% 27%)',
        'blue-accent': 'hsl(199 95% 74%)',
        'neutral-dark': 'hsl(210 11% 15%)',
        'neutral-light': 'hsl(214 32% 91%)',
      },
      borderRadius: {
        DEFAULT: '0.5rem'
      },
    },
  },
  plugins: [],
};
