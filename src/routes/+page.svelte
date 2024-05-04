<script>
	export let data
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
</svelte:head>

<div class="bg-white bg-opacity-75 hover:bg-opacity-100 transition ease-in-out duration-500 rounded-lg max-w-screen-md mx-auto p-4 mb-4 text-center">
	<h1 class="text-3xl font-bold mb-6">{data.title}</h1>
	<p class="text-xl font-semibold mb-4">{data.description}</p>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-md mx-auto">
	{#each data.blogs as item, index (`blog-${index}`)}
		<div
			class="bg-white bg-opacity-75 hover:bg-opacity-100 transition ease-in-out duration-500 rounded-lg"
		>
			<img class="rounded-t-lg" src={item.cover.src} alt={item.cover.alt} />
			<h2 class="text-2xl pt-4 px-4 font-bold">{item.title}</h2>
			<p class="italic my-2 px-4 ml-4">
				<span class="">
					{item.date}
				</span>
				{#each item.tags as itemSec, indexSec (`blog-${index}-tag-${indexSec}`)}			
					<a
						class="underline"
						href="/#"
					>
						{itemSec}
					</a>
				{/each}
			</p>
			<p class="text-lg px-4 ml-4 font-semibold">{item.description}</p>
			<a
				class="text-lg px-4 pb-4 italic flex items-center justify-end"
				href={`/blog/${item.slug}`}
			>
				<span class="">Read </span>
				<span class="">
					<!-- https://feathericons.com/ chevrons-right -->
					<svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
				</span>
			</a>
		</div>
	{/each}
</div>