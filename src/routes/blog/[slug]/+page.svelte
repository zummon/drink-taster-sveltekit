<script>
	export let data
</script>

<div class="bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-500 rounded-lg max-w-screen-md mx-auto p-4 mb-4 text-center">
	<h1 class="text-3xl font-bold mb-6">{data.title}</h1>
	<p class="text-xl font-semibold mb-4">{data.description}</p>
	<p class="font-semibold">
		<span class="">
			{data.date}
		</span>
		{#each data.tags as item, index (`tag-${index}`)}		
			<a class="underline" href="/#" >
				{item}
			</a>
		{/each}
	</p>
</div>
<div class="prose prose-lg max-w-screen-md mx-auto bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-500 rounded-lg p-4">
	<svelte:component this={data.content} />
</div>