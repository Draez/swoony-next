/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#1C2746",
        "light-blue": "#3B4A75",
        "main-green": "#00E6D5",
        "main-red": "#F42C52",
        "main-red-hover": "#D30F34",
        "gray": "#666666",
        "gray-light": "#2B2B2B",
        "neon-cyan": "#00E6D5",
        "neon-pink": "#F42C52",
        swoony: {
          blue: "#1C2746",
          "blue-light": "#6677A8",
          red: "#F42C52",
          "red-dark": "#D81E3C",
          yellow: "#FFD700",
          green: "#00E6D5",
          gray: "#a1a1a1",
          "gray-light": "#f4f4f5",
          gold: "#D4AF37",
          black: "#0a0a0a",
          paper: "#f4f1ea",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        noise: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
      },
      lineHeight: {
        'extra-loose': '1.25',
      },
      fontFamily: {
        'syne': ['var(--font-syne)', 'sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
        'quicksand': ['var(--font-quicksand)', 'sans-serif'],
        'sans': ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
