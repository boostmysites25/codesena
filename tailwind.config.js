/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#ffffff',
            a: {
              color: '#22AAD2',
              '&:hover': {
                color: '#5ec4e4',
              },
            },
            h1: {
              color: '#22AAD2',
            },
            h2: {
              color: '#22AAD2',
            },
            h3: {
              color: '#22AAD2',
            },
            h4: {
              color: '#5ec4e4',
            },
            strong: {
              color: '#ffffff',
            },
            blockquote: {
              color: '#cceff8',
              borderLeftColor: '#22AAD2',
            },
            code: {
              color: '#ffffff',
              backgroundColor: '#0A1828',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#0A1828',
              color: '#ffffff',
            },
            hr: {
              borderColor: '#0A1828',
            },
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: "#22AAD2",
          dark: "#1a8aa9",
          light: "#5ec4e4",
          50: "#e6f7fc",
          100: "#cceff8",
          200: "#99dff1",
          300: "#66cfea",
          400: "#33bfe3",
          500: "#22AAD2",
          600: "#1a8aa9",
          700: "#136780",
          800: "#0d4556",
          900: "#06222d",
        },
        secondary: {
          DEFAULT: "#060F1A",
          light: "#0A1828",
          dark: "#030912",
        },
        tertiary: {
          DEFAULT: "#0A1828",
          light: "#0f2135",
          dark: "#05101b",
        },
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
        'primary-sm': '0 4px 8px rgba(34, 170, 210, 0.15)',
        'primary-md': '0 8px 16px rgba(34, 170, 210, 0.2)',
        'primary-lg': '0 12px 24px rgba(34, 170, 210, 0.25)',
        'primary-xl': '0 20px 40px rgba(34, 170, 210, 0.3)',
      },
      animation: {
        'float': 'floating 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'fade-up': 'fadeUp 0.8s ease-in-out forwards',
        'blur-in': 'blurIn 0.8s ease-in-out forwards',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { left: '150%' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        blurIn: {
          from: { opacity: 0, filter: 'blur(10px)' },
          to: { opacity: 1, filter: 'blur(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
