<script lang="ts">
	import { page } from '$app/stores';
	import NoLink from '../components/NoLink.svelte';
	import HasLink from '../components/HasLink.svelte';
	import { onMount } from 'svelte';

	let linkParams: string;
	onMount(() => {
		const url = $page.url;
		linkParams = url.searchParams.get('url') as string;
	});
</script>

<div class="m-4 w-full rounded-lg bg-white p-4 shadow-lg dark:bg-zinc-800">
	{#if linkParams !== null}
		<HasLink />
	{:else}
		<NoLink />
	{/if}
</div>
