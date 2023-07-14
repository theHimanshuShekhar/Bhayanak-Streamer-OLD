/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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

        "deep-purple": "#673ab7",
        "deep-purple-50": "#ede7f6",
        "deep-purple-100": "#d1c4e9",
        "deep-purple-200": "#b39ddb",
        "deep-purple-300": "#9575cd",
        "deep-purple-400": "#7e57c2",
        "deep-purple-500": "#673ab7",
        "deep-purple-600": "#5e35b1",
        "deep-purple-700": "#512da8",
        "deep-purple-800": "#4527a0",
        "deep-purple-900": "#311b92",
        "deep-purple-100-accent": "#b388ff",
        "deep-purple-200-accent": "#7c4dff",
        "deep-purple-400-accent": "#651fff",
        "deep-purple-700-accent": "#6200ea",
        "blue-grey": "#607d8b",
        "blue-grey-50": "#eceff1",
        "blue-grey-100": "#cfd8dc",
        "blue-grey-200": "#b0bec5",
        "blue-grey-300": "#90a4ae",
        "blue-grey-400": "#78909c",
        "blue-grey-500": "#607d8b",
        "blue-grey-600": "#546e7a",
        "blue-grey-700": "#455a64",
        "blue-grey-800": "#37474f",
        "blue-grey-900": "#263238",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
