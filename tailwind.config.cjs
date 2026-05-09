/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        gold: {
          50: 'hsl(38,100%,95%)',
          100: 'hsl(38,95%,88%)',
          200: 'hsl(38,90%,75%)',
          300: 'hsl(38,88%,65%)',
          400: 'hsl(38,86%,58%)',
          500: 'hsl(38,85%,55%)',
          600: 'hsl(32,80%,48%)',
          700: 'hsl(28,75%,40%)',
          800: 'hsl(24,70%,32%)',
          900: 'hsl(20,65%,24%)',
        },
        studio: {
          dark: 'hsl(30,20%,6%)',
          darker: 'hsl(30,20%,4%)',
          mid: 'hsl(30,20%,8%)',
          light: 'hsl(30,20%,12%)',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: ["'DM Sans'", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        serif: ["'Cormorant Garamond'", "ui-serif", "Georgia", "serif"],
        mono: ["'Space Mono'", "ui-monospace", "monospace"],
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        "2xs": "var(--shadow-2xs)",
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)"
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
};