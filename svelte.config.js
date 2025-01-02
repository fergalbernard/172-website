import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			strict: false
		}),
		paths: {
			base: dev ? '' : '/172-website'
		},
		prerender: {
			handleHttpError: 'ignore'
		},
		appDir: '_app'
	},
	preprocess: vitePreprocess()
};

export default config;
