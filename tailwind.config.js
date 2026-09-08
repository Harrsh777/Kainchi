/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF9',
          100: '#FAF8F3',
          200: '#F4EFE6',
          300: '#EBE2D3',
          400: '#DCCFBA',
        },
        forest: {
          900: '#0F241C',
          800: '#18382D',
          700: '#234C3E',
          600: '#326654',
          500: '#478570',
        },
        sage: {
          50: '#F4F6F4',
          100: '#E7ECE8',
          200: '#CFDBD1',
          300: '#AEC2B2',
          400: '#8DA893',
          500: '#718477',
          600: '#5A6B60',
        },
        gold: {
          300: '#E5D3AF',
          400: '#D4BA85',
          500: '#B99A62',
          600: '#9E8047',
          700: '#7E6533',
        },
        charcoal: {
          950: '#0D0D0D',
          900: '#171717',
          800: '#262626',
          700: '#404040',
          600: '#525252',
          500: '#6B6B6B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(24, 56, 45, 0.08), 0 0 1px 1px rgba(24, 56, 45, 0.04)',
        'luxury-hover': '0 30px 60px -15px rgba(24, 56, 45, 0.14), 0 0 1px 1px rgba(24, 56, 45, 0.08)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'elevated': '0 25px 50px -12px rgba(15, 36, 28, 0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(15, 36, 28, 0.3) 0%, rgba(15, 36, 28, 0.8) 100%)',
        'subtle-radial': 'radial-gradient(circle at 50% 0%, rgba(185, 154, 98, 0.08) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
