/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F3F7F4',
          100: '#E4ECE5',
          200: '#CADACD',
          300: '#A6C1AB',
          400: '#7FA486',
          500: '#4E8058',
          600: '#3D6846',
          700: '#305138',
          800: '#26402D',
          900: '#1F3425',
        },
        mint: {
          50: '#F0FAF5',
          100: '#DCF4E7',
          200: '#BCE8D3',
          300: '#8CD5B4',
          400: '#56BB90',
          500: '#2E9F6E',
          600: '#228157',
        },
        cream: {
          50: '#FBF9F5',
          100: '#F7F3EC',
          200: '#EFE8DE',
          300: '#DFD5C6',
        },
        peach: {
          50: '#FFF7F2',
          100: '#FEECE2',
          200: '#FDD5C2',
          300: '#FCB59A',
          400: '#FA8C65',
          500: '#F26D3E',
        },
        amberWarm: {
          50: '#FFFDF5',
          100: '#FEF8DC',
          200: '#FDEFB4',
          300: '#FCE082',
          400: '#FACD4F',
          500: '#F3B423',
        },
        slateWarm: {
          700: '#38424B',
          800: '#2A323A',
          900: '#1C2228',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        handwriting: ['Caveat', 'Patrick Hand', 'cursive', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(46, 81, 56, 0.07), 0 2px 6px -1px rgba(46, 81, 56, 0.04)',
        'soft-lg': '0 10px 25px -4px rgba(46, 81, 56, 0.10), 0 4px 10px -2px rgba(46, 81, 56, 0.05)',
        'phone': '0 25px 50px -12px rgba(32, 54, 38, 0.25), 0 0 0 12px #1E2922',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
