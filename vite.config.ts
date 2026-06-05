import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import stylex from '@stylexswc/unplugin/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		stylex({
			rsOptions: {
				dev: process.env.NODE_ENV === 'development'
			},
			pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'svelte'],
			useCssPlaceholder: true
		}),
	]
});
