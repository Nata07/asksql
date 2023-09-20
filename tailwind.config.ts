import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-ubuntu)']
      }, 

      colors: {
        orange: {
        50: '#fff3e9',
        100: '#fddabb',
        200: '#fdc89b',
        300: '#fcaf6d',
        400: '#fba051',
        500: '#fa8825',
        600: '#e47c22',
        700: '#b2611a',
        800: '#8a4b14',
        900: '#693910',
        },
        green: {
          50: '#e7f0eb',
          100: '#b6d0c2',
          200: '#92b9a5',
          300: '#61987c',
          400: '#428562',
          500: '#13663b',
          600: '#115d36',
          700: '#0d482a',
          800: '#0a3820',
          900: '#082b19',
        },
        lemon: '#2DFF0B',
        blueberry: '#07061D',
        pistachio: '#D3FFCC',
        cream: '#E2DFCD',
        foam: '#D7DAE2',
        snow: '#FFFFFF',
      }
    },
  },
  plugins: [],
}
export default config
