import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'var(--color-primary)',
					100: 'var(--color-primary-100)',
					200: 'var(--color-primary-200)',
					300: 'var(--color-primary-300)',
					400: 'var(--color-primary-400)',
					500: 'var(--color-primary-500)',
					600: 'var(--color-primary-600)',
					700: 'var(--color-primary-700)',
					800: 'var(--color-primary-800)',
					900: 'var(--color-primary-900)',
					1000: 'var(--color-primary-1000)',
				},
				secondary: {
					DEFAULT: 'var(--color-secondary)',
				},
				background: 'var(--color-background)',
				'background-light': 'var(--color-background-light)',
				'section-background': 'var(--color-section-background)',
				contrast: 'var(--color-contrast)',
				'default-text': 'var(--color-default-text)',
				'default-text-strong': 'var(--color-default-text-strong)',
				link: 'var(--color-link)',
				placeholder: 'var(--color-placeholder)',
			},
			screens: {
				xs: '350px',
			},
			transitionTimingFunction: {
				bounce: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
			},
			boxShadow: {
				grand: 'var(--shadow-grand)',
				minor: 'var(--shadow-minor)',
			},
			zIndex: {
				infinity: '9999',
			},
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }: any) {
			addBase({
				h1: { fontSize: '2.936rem', fontWeight: theme('fontWeight.semibold') },
				h2: { fontSize: '2.243rem', fontWeight: theme('fontWeight.semibold') },
				h3: { fontSize: '1.309rem', fontWeight: theme('fontWeight.semibold') },
				h4: { fontSize: '1.1713rem', fontWeight: theme('fontWeight.semibold') },
			});
		}),
		function ({ addVariant }: any) {
			addVariant('child', '& > *');
			addVariant('child-hover', '&:hover > *');
		},
	],
};
export default config;
