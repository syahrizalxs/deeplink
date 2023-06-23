/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue'
	],
	theme: {
		extend: {
			colors: {
				primaryblue: '#253E80',
				hoverblue: '#20346b',
				primaryred: '#C62127',
				lightblue: '#6E8FE6',
				darktext: '#25282B',
				warmwhite: '#F3F3F3',
				grey: '#DDDDDD',
				darkgrey: '#828282',
				surface: '#F3F6FF',
				calmblue: '#BFD0FF',
				darkprimary: '#121212',
				// darkprimary: '#0F172A',
				darksecondary: '#282828',
				// darksecondary: '#1E293B',
				darkaccent: '#3f3f3f',
				lighttext: '#fff'
			}
		}
	},
	plugins: []
};
