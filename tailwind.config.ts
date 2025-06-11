import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cyclone: {
          DEFAULT: "#90010A",
          light: "#B30D17",
          dark: "#6E0008",
          50: "#FFF0F1",
          100: "#FFD9DC",
          200: "#FFB3B9",
          300: "#FF8D96",
          400: "#FF6773",
          500: "#FF4150",
          600: "#FF1A2D",
          700: "#E3000F",
          800: "#90010A",
          900: "#6E0008",
        },
        gold: {
          50: "#FFF9E6",
          100: "#FFF0BF",
          200: "#FFE380",
          300: "#FFD740",
          400: "#FFC700",
          500: "#FFAB00",
          600: "#E69500",
          700: "#CC8400",
          800: "#B37300",
          900: "#996200",
        },
        premium: {
          50: "#F7F8F9",
          100: "#EEF0F3",
          200: "#D5DAE0",
          300: "#BBC3CD",
          400: "#8896A6",
          500: "#5D6B7A",
          600: "#4A5568",
          700: "#3D4654",
          800: "#2D3440",
          900: "#1E2430",
        },
      },
      boxShadow: {
        premium: "0 10px 30px -10px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "premium-lg": "0 20px 40px -15px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.04)",
        "premium-xl": "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.06)",
        gold: "0 4px 20px -2px rgba(255, 171, 0, 0.2)",
        cyclone: "0 4px 20px -2px rgba(144, 1, 10, 0.2)",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1", borderRadius: "0" },
          "100%": { transform: "translateY(-1000px) rotate(720deg)", opacity: "0", borderRadius: "50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        float: "float 25s linear infinite",
        shimmer: "shimmer 2s infinite linear",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "premium-gradient": "linear-gradient(135deg, #F7F8F9 0%, #EEF0F3 100%)",
        "gold-gradient": "linear-gradient(135deg, #FFF9E6 0%, #FFE380 100%)",
        "cyclone-gradient": "linear-gradient(135deg, #FFF0F1 0%, #FF8D96 100%)",
        "dark-gradient": "linear-gradient(135deg, #1E2430 0%, #3D4654 100%)",
        shimmer: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
      },
    },
  },
  plugins: [],
}

export default config
