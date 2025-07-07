import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'raleway': ['Raleway', 'sans-serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Core cyberpunk colors (keeping existing for compatibility)
				'cyber-cyan': '#00F0FF',
				'hacker-magenta': '#FF00F5',
				'neon-yellow': '#FFFF66',
				'void-black': '#121212',
				'cyber-dark': '#0A0A0A',
				'cyber-gray': '#2A2A2A',
				// New cosmic theme colors (keeping existing for compatibility)
				'cosmic-purple': '#8A2387',
				'cosmic-gold': '#F2C94C',
				'space-navy': '#1A1A2E',
				'cosmic-pink': '#E94057',
				'cosmic-cream': '#FBEAE7',
				// LUMINA TECH Palette
				'glacial-pearl': '#F4F8FB',
				'titan-mist': '#2E2E38',
				'atmos-silver': '#7C8A9E',
				'cyber-aqua': '#00F0FF',
				'plasma-orchid': '#C084FC',
				'photon-gold': '#FFD54F',
				'glass-lilac': '#E2D5FF',
				'ion-blue': '#B3E5FC',
				'chrome-ice': '#D8E3EC',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': { 
						transform: 'translateX(100%)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-left': {
					'0%': { 
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-top': {
					'0%': { 
						transform: 'translateY(-100%)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-in-bottom': {
					'0%': { 
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px var(--cyber-cyan), 0 0 40px var(--cyber-cyan)' 
					},
					'50%': { 
						boxShadow: '0 0 30px var(--cyber-cyan), 0 0 60px var(--cyber-cyan), 0 0 80px var(--cyber-cyan)' 
					}
				},
				'cosmic-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px var(--cosmic-purple), 0 0 40px var(--cosmic-gold)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 30px var(--cosmic-purple), 0 0 60px var(--cosmic-gold), 0 0 80px var(--cyber-cyan)',
						transform: 'scale(1.02)'
					}
				},
				'particle-float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'float-gentle': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-10px) rotate(1deg)'
					},
					'75%': {
						transform: 'translateY(-5px) rotate(-1deg)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-1000px 0'
					},
					'100%': {
						backgroundPosition: '1000px 0'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px currentColor, 0 0 40px currentColor',
						transform: 'scale(1)'
					},
					'50%': {
						boxShadow: '0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor',
						transform: 'scale(1.05)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'slide-in-top': 'slide-in-top 0.6s ease-out',
				'slide-in-bottom': 'slide-in-bottom 0.6s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'cosmic-pulse': 'cosmic-pulse 3s ease-in-out infinite',
				'particle-float': 'particle-float 6s ease-in-out infinite',
				'float-gentle': 'float-gentle 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'shimmer': 'shimmer 3s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
