import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/172-website'
		},
		prerender: {
			entries: ['*'],
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore static assets not found
				if (path.startsWith('/static/')) {
					return;
				}
				throw new Error(message);
			}
		}
	},
	preprocess: vitePreprocess()
};

export default config;
