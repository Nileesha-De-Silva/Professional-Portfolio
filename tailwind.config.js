/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        navy: {
          50: '#f0f5fc',
          100: '#e0ecf8',
          200: '#c5ddf3',
          300: '#9bc4eb',
          400: '#69a3e0',
          500: '#4383d4',
          600: '#2f67c3',
          700: '#2752ad',
          800: '#24458f',
          900: '#213c74',
          950: '#0a192f', // Deep rich luxury navy
          DEFAULT: '#0a192f'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
