const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,md,mdx}',
    './src/**/*.{js,ts,jsx,tsx,md,mdx}',
    './public/**/*.html',
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}'
  ],
  darkMode: 'class',
  theme: {
    // Extend the default theme
    extend: {
      // Custom color palette with CSS variable support and accent color
      colors: {
        primary: {
          50: 'var(--color-primary-50, #f0f9ff)',
          100: 'var(--color-primary-100, #e0f2fe)',
          200: 'var(--color-primary-200, #bae6fd)',
          300: 'var(--color-primary-300, #7dd3fc)',
          400: 'var(--color-primary-400, #38bdf8)',
          500: 'var(--color-primary-500, #0ea5e9)',
          600: 'var(--color-primary-600, #0284c7)',
          700: 'var(--color-primary-700, #0369a1)',
          800: 'var(--color-primary-800, #075985)',
          900: 'var(--color-primary-900, #0c4a6e)',
        },
        secondary: {
          50: 'var(--color-secondary-50, #f5f3ff)',
          100: 'var(--color-secondary-100, #ede9fe)',
          200: 'var(--color-secondary-200, #ddd6fe)',
          300: 'var(--color-secondary-300, #c4b5fd)',
          400: 'var(--color-secondary-400, #a78bfa)',
          500: 'var(--color-secondary-500, #8b5cf6)',
          600: 'var(--color-secondary-600, #7c3aed)',
          700: 'var(--color-secondary-700, #6d28d9)',
          800: 'var(--color-secondary-800, #5b21b6)',
          900: 'var(--color-secondary-900, #4c1d95)',
        },
        accent: {
          50: 'var(--color-accent-50, #fff7ed)',
          100: 'var(--color-accent-100, #ffedd5)',
          200: 'var(--color-accent-200, #fed7aa)',
          300: 'var(--color-accent-300, #fdba74)',
          400: 'var(--color-accent-400, #fb923c)',
          500: 'var(--color-accent-500, #f97316)',
          600: 'var(--color-accent-600, #ea580c)',
          700: 'var(--color-accent-700, #c2410c)',
          800: 'var(--color-accent-800, #9a3412)',
          900: 'var(--color-accent-900, #7c2d12)',
        },
        success: colors.green,
        warning: colors.amber,
        error: colors.rose,
        gray: colors.slate,
      },
      // Custom typography
      fontFamily: {
  sans: ['Inter', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      // Detailed font size scale
      fontSize: {
  xs: ['0.6875rem', { lineHeight: '0.95rem' }],
  sm: ['0.8125rem', { lineHeight: '1.1rem' }],
  base: ['0.9375rem', { lineHeight: '1.3rem' }],
  lg: ['1.0625rem', { lineHeight: '1.5rem' }],
  xl: ['1.1875rem', { lineHeight: '1.6rem' }],
  '2xl': ['1.3125rem', { lineHeight: '1.7rem' }],
  '3xl': ['1.5rem', { lineHeight: '1.9rem' }],
  '4xl': ['1.75rem', { lineHeight: '2.1rem' }],
  '5xl': ['2.25rem', { lineHeight: '1' }],
  '6xl': ['2.75rem', { lineHeight: '1' }],
  '7xl': ['3.25rem', { lineHeight: '1' }],
  '8xl': ['4.25rem', { lineHeight: '1' }],
  '9xl': ['5.5rem', { lineHeight: '1' }],
      },
      // Custom spacing scale
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      // Custom border radius
      borderRadius: {
        '4xl': '2rem',
      },
      // Custom box shadow
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
      // Animation
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
    // Custom container
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
  },
  // Custom variants
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['active', 'disabled'],
      textColor: ['active', 'disabled'],
      cursor: ['disabled'],
    },
  },
  // Plugins
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // Removed @tailwindcss/line-clamp as it's now included by default in Tailwind CSS v3.3+
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
  // Performance optimizations
  future: {
    hoverOnlyWhenSupported: true,
  },
  // Safelist dark mode classes
  safelist: [{ pattern: /dark/ }],
};
