/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': [
				'Fira Code',
				'monospace',
				'system-ui',
				'sans-serif'
			]
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
