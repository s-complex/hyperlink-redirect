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

<div class="m-4 p-4 rounded-lg bg-white gap-3 grid w-full shadow-lg dark:bg-zinc-800">
	{#if target}
		<HasLink url={target} />
	{:else if target == null}
		<NoLink />
	{:else}
		<p class="text-center">Loading...</p>
	{/if}
</div>
