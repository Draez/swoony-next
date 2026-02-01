// Light theme colors
export const lightColors = {
    'swoony-blue': '#1C2746',
    'swoony-blue-light': '#6677A8',
    'swoony-red': '#F42C52',
    'swoony-red-dark': '#D81E3C',
    'swoony-yellow': '#FFD700',
    'swoony-green': '#00E6D5',
    'swoony-gray': '#a1a1a1',
    'swoony-gray-light': '#f4f4f5',
    white: '#ffffff',
    black: '#0a0a0a',
    gold: '#D4AF37',
    'text-gray': '#666666',
    'background-gray': '#f4f4f5',
    'transparent': 'transparent',
    'test': '#ffffff',
    // Semantic colors for light theme
    background: '#f4f4f5',
    'background-secondary': '#ffffff',
    'background-tertiary': '#e0e0e0',
    text: '#0a0a0a',
    'text-secondary': '#666666',
    'text-tertiary': '#a1a1a1',
    border: '#e0e0e0',
    'border-secondary': '#f4f4f5',
    card: '#ffffff',
    shadow: '#0a0a0a',
} as const;

// Dark theme colors
export const darkColors = {
    'swoony-blue': '#6677A8',
    'swoony-blue-light': '#8FA4D3',
    'swoony-red': '#F42C52',
    'swoony-red-dark': '#D81E3C',
    'swoony-yellow': '#FFD700',
    'swoony-green': '#00E6D5',
    'swoony-gray': '#666666',
    'swoony-gray-light': '#333333',
    gold: '#D4AF37',
    white: '#ffffff', // Inverted for dark theme
    black: '#0a0a0a', // Inverted for dark theme
    'test': '#ffffff',
    'text-gray': '#a1a1a1',
    'background-gray': '#141414',
    'transparent': 'transparent',

    // Semantic colors for dark theme
    background: '#0a0a0a',
    'background-secondary': '#141414',
    'background-tertiary': '#333333',
    text: '#ffffff',
    'text-secondary': '#a1a1a1',
    'text-tertiary': '#666666',
    border: '#333333',
    'border-secondary': '#141414',
    card: '#141414',
    shadow: '#ffffff',
} as const;

// Legacy export for backward compatibility
export default lightColors;

export type ColorName = keyof typeof lightColors;
