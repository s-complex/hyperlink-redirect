<script lang="ts">
	import 'uno.css';
	import { createThemeSwitcher, Theme } from 'svelte-theme-select';
	createThemeSwitcher();
</script>

<svelte:head>
	<title>Hyperlink Redirect</title>
	<meta name="description" content="Hyperlink redirect site by Sliver Complex" />
	<link rel="icon" href="https://library.gxres.net/images/icons/favicon.webp" />
</svelte:head>

<div class="h-svh mx-auto max-w-2xl flex items-center justify-center">
	<div class="p-4 m-4 w-full bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
		<slot />
	</div>
</div>

<Theme />

<style>
	:global(body) {
		--apply: 'm-0 bg-gradient-to-r from-blue-600 from-5% via-sky-600 via-30% to-cyan-600 to-80% text-black dark:text-white';
	}
	:global(a) {
		--apply: 'text-sky-700 dark:text-sky-500 no-underline hover:underline';
	}
	:global(h1) {
		--apply: 'text-2xl';
	}
	:global(p) {
		--apply: 'text-lg';
	}
</style>
