// FILE: src/styles/theme.ts

export const theme = {
  colors: {
    primary: '#0B1F33',
    secondary: '#1E88E5',
    accent: '#00BFA6',
    background: '#F7F9FC',
    text: '#1F2937',
    textLight: '#6B7280',
    white: '#FFFFFF',
    cardBg: '#FFFFFF',
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
  spacing: {
    section: '6rem',
    sectionMobile: '4rem',
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.6s ease',
  },
  shadows: {
    card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    cardHover: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
} as const;

export type Theme = typeof theme;
