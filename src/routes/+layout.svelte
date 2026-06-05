<script lang="ts">
	import '$lib/assets/style.css';

	let { children } = $props();
</script>

<script module lang="ts">
	import { create, attrs } from '@stylexjs/stylex';

	const rootLayoutStyles = create({
		rootContainer: {
			marginInline: 'auto',
			padding: '1rem',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'relative',
			minHeight: '100svh',
			maxWidth: '42rem'
		},
		footerContainer: {
			textAlign: 'center',
			position: 'absolute',
			bottom: '1rem',
		}
	})
</script>

<svelte:head>
	<title>Hyperlink Redirect - Sliver Complex</title>
	<meta name="description" content="Hyperlink Redirect by Sliver Complex." />
	<link rel="icon" href="https://library.gxres.net/images/icons/favicon.ico" />
	<link rel="apple-touch-icon" type="image/webp" href="https://library.gxres.net/images/icons/big-favicon.webp" />
	<link rel="preconnect" href="https://library.gxres.net" crossorigin="" />
	<link rel="canonical" href="https://link.gxres.net/" />
</svelte:head>

<div {...attrs(rootLayoutStyles.rootContainer)}>
	{@render children()}
	<footer {...attrs(rootLayoutStyles.footerContainer)}>
		<p>
			Hyperlink Redirect by <a href="https://sirvr.win" target="_blank" rel="noopener noreferrer"
				>Sliver Complex</a
			>. Powered by
			<a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">SvelteKit</a>.
		</p>
	</footer>
</div>
