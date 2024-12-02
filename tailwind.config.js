/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-start': 'var(--primary-gradient-start)',
        'primary-end': 'var(--primary-gradient-end)',
      },
      fontFamily: {
        primary: 'var(--font-primary)',
        secondary: 'var(--font-secondary)',
      },
      fontSize: {
        'xxl': 'var(--font-size-xxl)',
        'xl': 'var(--font-size-xl)',
        'l': 'var(--font-size-l)',
        'm': 'var(--font-size-m)',
        's': 'var(--font-size-s)',
        'xs': 'var(--font-size-xs)',
      },
      spacing: {
        'xxs': 'var(--spacing-xxs)',
        'xs': 'var(--spacing-xs)',
        's': 'var(--spacing-s)',
        'm': 'var(--spacing-m)',
        'l': 'var(--spacing-l)',
        'xl': 'var(--spacing-xl)',
        'xxl': 'var(--spacing-xxl)',
      },
      borderRadius: {
        's': 'var(--radius-s)',
        'm': 'var(--radius-m)',
        'l': 'var(--radius-l)',
        'full': 'var(--radius-full)',
      },
    },
  },
  plugins: [],
}