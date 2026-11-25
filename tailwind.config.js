/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        vault: {
          background: '#101010',
          surface: '#1C1C1C',
          elevated: '#262626',
          border: '#333333',

          gold: '#D4AF37',
          'gold-hover': '#E5C76B',

          text: '#F5F5F5',
          secondary: '#A1A1AA',
          muted: '#858585',

          success: '#22C55E',
          error: '#EF4444',
          warning: '#F59E0B',
          info: '#60A5FA',
        },
      },

      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },

      maxWidth: {
        vault: '1440px',
      },

      transitionDuration: {
        fast: '150ms',
        normal: '200ms',
        moderate: '250ms',
        slow: '300ms',
      },

      boxShadow: {
        'vault-glow': '0 0 24px rgba(212, 175, 55, 0.15)',
      },
    },
  },

  plugins: [],
}
