<script>
	export let data
</script>

<div class="bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-500 rounded-lg max-w-screen-md mx-auto p-4 mb-4 text-center">
	<h1 class="text-3xl font-semibold mb-6">{data.title}</h1>
	<p class="text-xl font-medium mb-4">{data.description}</p>
	<p class="font-semibold">
		<span class="">
			{new Date(data.date).toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'})}
		</span>
		{#each data.tags as item, index (`tag-${index}`)}		
			<a class="underline" href="/#" >
				{item}
			</a>
		{/each}
	</p>
</div>
<div class="prose prose-lg max-w-screen-md mx-auto bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-500 rounded-lg p-4 prose-p:text-amber-900 prose-headings:text-amber-900 prose-a:text-amber-900 prose-li:text-amber-900">
	<svelte:component this={data.content} />
</div>