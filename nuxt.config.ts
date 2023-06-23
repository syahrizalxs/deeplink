// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/assets/css/main.css'],
	devtools: { enabled: true },
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	app: {
		head: {
			title: 'Partai Perindo',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1'
		}
	}
});
