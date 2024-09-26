<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let linkParams: string;
	let websiteStatus: string = '';
	let isLoading = true;

	onMount(async () => {
		const url = $page.url;
		linkParams = url.searchParams.get('url') as string;
		await checkWebsiteStatus(linkParams);
	});

	async function checkWebsiteStatus(url: string) {
		websiteStatus = '正在检查链接状态...';

		try {
			const response = await fetch(
				`https://api.slirv.vip/url-check?check=${encodeURIComponent(url)}`,
				{
					method: 'GET'
				}
			);

			if (response.ok) {
				const data = await response.json();
				console.log(data);
				if (data.statusCode === 200) {
					websiteStatus = `链接状态正常（${data.statusCode} ${data.statusMessage}）`;
				} else if (data.statusCode === 403) {
					websiteStatus = `该链接拦截了 API 发出的测试（${data.statusCode} ${data.statusMessage}）`;
				} else {
					websiteStatus = `链接状态似乎异常：${data.statusCode} ${data.statusMessage}`;
				}
			} else {
				websiteStatus = '无法获取链接状态';
			}
		} catch (e) {
			console.error('An error occurred:', e);
			websiteStatus = '发生错误';
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="flex justify-center">
	<div class="i-fe-warning text-6xl" />
</div>
<section class="typo text-center space-y-4">
	<h1 class="text-2xl">即将进行跳转</h1>
	<p>你即将跳转到下述链接：</p>
	<p class="text-sm">{linkParams}</p>
	<p>我们无法保证这个链接是否可用、可信。是否继续跳转？</p>
	<div>
		<a
			class="rounded-lg bg-blue-100 p-2 text-black no-underline shadow-lg dark:bg-blue-900 dark:text-white"
			href={linkParams}>继续跳转</a
		>
	</div>
	<p class="text-sm">{isLoading ? '尝试检查链接状态...' : websiteStatus}</p>
</section>

<style>
	h1 {
		--apply: 'text-2xl my-4';
	}
	p {
		--apply: 'text-base my-4';
	}
</style>
