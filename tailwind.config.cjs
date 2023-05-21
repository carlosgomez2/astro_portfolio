/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': [
				'Fira Sans',
				'Fira Code',
				'monospace',
				'system-ui',
				'sans-serif'
			]
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui'), require('@tailwindcss/typography'),],
}
