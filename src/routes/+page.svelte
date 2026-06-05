<script lang="ts">
	import HasLink from '$lib/components/HasLink.svelte';
	import NoLink from '$lib/components/NoLink.svelte';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	let target = $state('');

	onMount(() => {
		const url = page.url;
		target = url.searchParams.get('target') as string;
	});
</script>

<script module lang="ts">
	import { create, attrs } from '@stylexjs/stylex';

	const dark = '@media (prefers-color-scheme: dark)';

	const indexPageStyles = create({
		container: {
			margin: '1rem',
			padding: '1rem',
			borderRadius: '0.5rem',
			backgroundColor: '#fff',
			display: 'grid',
			gap: '0.75rem',
			width: '100%',
			shadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
			[dark]: {
				backgroundColor: '#27272a',
			}
		},
	})
</script>

<div {...attrs(indexPageStyles.container)}>
	{#if target}
		<HasLink url={target} />
	{:else if target == null}
		<NoLink />
	{:else}
		<p class="text-center">Loading...</p>
	{/if}
</div>
