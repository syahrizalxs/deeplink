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
			viewport: 'width=device-width, initial-scale=1',
			script: [
				{
					src: 'https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js',
					tagPosition: 'bodyClose'
				}
			]
		}
	},
	modules: [
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Poppins: true,
					download: true,
					inject: true
				}
			}
		]
	],
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => tag === 'iconify-icon'
		}
	},
	runtimeConfig: {
		public: {
			API: process.env.BASE_API
		}
	}
});
