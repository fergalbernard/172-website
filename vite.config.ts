import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['..']
		}
	},
	build: {
		target: 'esnext',
		assetsDir: '_app',
		rollupOptions: {
			output: {
				manualChunks: undefined
			}
		}
	}
});
