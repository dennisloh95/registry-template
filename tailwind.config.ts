import type { Config } from "tailwindcss"
import tailwindAnimate from "tailwindcss-animate"

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./registry/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			n: {
  				'25': '#E3E4E5',
  				'50': '#D3D5D6',
  				'100': '#BABCBD',
  				'300': '#868B8D',
  				'600': '#202123',
  				'700': '#161618',
  				'800': '#0F1010',
  				'900': '#0A0A0A',
  				'0-t1': '#fff',
  				'200-t2': '#A6A9AB',
  				'400-t3': '#585B5C',
  				'500-t4': '#2A2B2D'
  			},
  			t: {
  				'25': '#F9FFFF',
  				'50': '#E5FFFD',
  				'100': '#D5FFFC',
  				'200': '#C3FCF8',
  				'300': '#AFF6F2',
  				'400': '#90E9E3',
  				'500': '#70D2CC',
  				'700': '#4D9D98',
  				'800': '#387A75',
  				'900': '#1A2F2D',
  				'1000': '#0F1B1A',
  				'600-main': '#65B3AE'
  			},
  			g1: 'linear-gradient(90deg, #65B3AE 0%, #2AAC76 100%)',
  			g2: 'linear-gradient(90deg, #4D9D98 0%, #2CC39F 100%)',
  			r: {
  				'25': '#FFFAFB',
  				'50': '#fef2f3',
  				'100': '#FEE2E4',
  				'200': '#FECACE',
  				'300': '#FD9BA3',
  				'400': '#F96673',
  				'500': '#F03847',
  				'700': '#B41825',
  				'800': '#911822',
  				'900': '#7A1A22',
  				'1000': '#28070A',
  				'600-main': '#D92030'
  			},
  			o: {
  				'25': '#FFFDF5',
  				'50': '#FFFBEB',
  				'100': '#FEF0C7',
  				'200': '#FEDF89',
  				'300': '#FEC84B',
  				'400': '#FDB022',
  				'500': '#F79009',
  				'700': '#B54708',
  				'800': '#93370D',
  				'900': '#7A2E0E',
  				'1000': '#281006',
  				'600-main': '#DC6803'
  			},
  			g: {
  				'25': '#F6FEF9',
  				'50': '#ECFDF2',
  				'100': '#D1FAE0',
  				'200': '#A6F4C3',
  				'300': '#6CE99A',
  				'400': '#32D56E',
  				'500': '#12B75F',
  				'700': '#027A3A',
  				'800': '#05602F',
  				'900': '#054F27',
  				'1000': '#032010',
  				'600-main': '#039849'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		screens: {
  			mobile: '0px',
  			tablet: '481px',
  			desktop: '1200px'
  		},
  		fontFamily: {
  			'gt-walsheim': [
  				'GT-Walsheim',
  				'sans-serif'
  			]
  		},
  		backgroundImage: {
  			g1: 'linear-gradient(90deg, #65B3AE 0%, #2AAC76 100%)',
  			g2: 'linear-gradient(90deg, #4D9D98 0%, #2CC39F 100%)'
  		},
  		listStyleType: {
  			none: 'none',
  			disc: 'disc',
  			decimal: 'decimal',
  			square: 'square',
  			roman: 'upper-roman'
  		}
  	}
  },
  plugins: [tailwindAnimate],
} satisfies Config
