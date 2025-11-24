<script lang="ts">
	import 'uno.css';
	import '$lib/assets/style.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Hyperlink Redirect</title>
	<meta name="description" content="Hyperlink Redirect by Sliver Complex." />
	<link rel="icon" type="image/webp" href="https://library.gxres.net/images/icons/favicon.webp" />
	<link rel="preconnect" href="https://library.gxres.net" crossorigin="" />
	<link rel="canonical" href="https://link.gxres.net/" />
</svelte:head>

<div class="mx-auto p-4 flex max-w-2xl items-center justify-center relative min-h-svh">
	{@render children()}
	<footer class="text-center bottom-4 absolute">
		<p>
			Hyperlink Redirect by <a href="https://insli.cc" target="_blank" rel="noopener noreferrer"
				>Sliver Complex</a
			>. Powered by
			<a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">SvelteKit</a>.
		</p>
	</footer>
</div>
