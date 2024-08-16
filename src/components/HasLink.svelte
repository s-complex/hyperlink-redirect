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
                    websiteStatus = `该链接拦截了 API 发出的测试（${data.statusCode} ${data.statusMessage}）`
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
	<div class="text-6xl i-fe-warning" />
</div>
<section class="typo text-center">
	<h1>即将进行跳转</h1>
	<p>你即将跳转到下述链接：</p>
	<p class="text-sm">{linkParams}</p>
	<p>我们无法保证这个链接是否可用、可信。是否继续跳转？</p>
	<a class="bg-sky-600 rounded-lg text-white p-2 m-2 shadow-lg no-underline" href={linkParams}
		>继续跳转</a
	>
	<p class="text-sm">{isLoading ? '尝试检查链接状态...' : websiteStatus}</p>
</section>
