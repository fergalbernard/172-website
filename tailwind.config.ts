import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				midnight: {
					DEFAULT: '#1B2937',
					light: '#243442'
				},
				sage: {
					DEFAULT: '#4A5D4E',
					light: '#5B6F5F'
				},
				coral: {
					DEFAULT: '#B85F4C',
					soft: 'rgba(184, 95, 76, 0.8)'
				},
				cream: {
					DEFAULT: '#E8E2D7',
					soft: 'rgba(232, 226, 215, 0.9)'
				}
			}
		}
	},

	plugins: []
} satisfies Config;
