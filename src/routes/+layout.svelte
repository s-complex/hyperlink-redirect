<script lang="ts">
	import 'uno.css';
	import '@unocss/reset/tailwind-compat.css';
	import { createThemeSwitcher, Theme } from 'svelte-theme-select';
	createThemeSwitcher();
</script>

<svelte:head>
	<title>Hyperlink Redirect</title>
	<meta name="description" content="Hyperlink redirect site by Sliver Complex" />
	<link rel="icon" href="https://library.gxres.net/images/icons/favicon.webp" />
	<script
		async
		src="https://umami.slirv.vip/script.js"
		data-website-id="3a4f1b37-173e-4b35-889d-b379a4e80001"
	></script>
</svelte:head>

<div class="p-4 h-svh mx-auto max-w-2xl flex items-center justify-center">
	<slot />
	<footer class="absolute text-center bottom-4">
		<p>
			Hyperlink Redirect by <a href="https://slirv.vip">Sliver Complex</a>. Powered by SvelteKit.
		</p>
	</footer>
</div>

<Theme />

<style>
	:global(body) {
		--apply: 'bg-gradient-to-r from-blue-200 from-5% via-sky-200 via-30% to-cyan-200 dark:from-blue-800 dark:via-sky-800 dark:to-cyan-800 to-80%';
		font-family:
			-apple-system,
			BlinkMacSystemFont,
			Segoe UI,
			system-ui,
			Roboto,
			PingFang SC,
			Hiragino Sans GB,
			Source Han Sans SC,
			Noto Sans CJK SC,
			Noto Sans SC,
			WenQuanYi Micro Hei,
			WenQuanYi Zen Hei,
			Helvetica Neue,
			Microsoft YaHei,
			Helvetica,
			Arial,
			sans-serif,
			Apple Color Emoji,
			Segoe UI Emoji,
			Segoe UI Symbol;
	}
	:global(.dark) {
		color-scheme: dark;
	}
	:global(a) {
		--apply: 'text-blue-500 no-underline hover:underline';
	}
</style>
