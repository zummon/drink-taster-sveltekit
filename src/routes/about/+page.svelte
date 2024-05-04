<script>
	export let data
	
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.desc} />
</svelte:head>

<img class="mx-auto aspect-video object-cover" src="https://i.imgur.com/oXnUuoO.jpeg" alt="">

<div class="bg-white bg-opacity-75 hover:bg-opacity-100 transition ease-in-out duration-500 rounded-lg max-w-screen-md mx-auto p-4 mb-4 text-center">
	<h1 class="text-3xl font-bold mb-6">{data.title}</h1>
	<p class="text-xl font-semibold mb-4">{data.desc}</p>
</div>
<div class="prose prose-lg max-w-screen-md mx-auto bg-white bg-opacity-75 hover:bg-opacity-100 transition ease-in-out duration-500 rounded-lg p-4">
	<h2 class="font-bold text-2xl mb-3">{data.heading}</h2>
	<blockquote class="font-medium italic border-l-2 pl-4 mb-4">{data.blockquote}</blockquote>
	<p class="mb-4">{data.content}</p>
	<ul class="list-disc pl-6 mb-2">
		{#each data.list as item}
			<li class="pl-1 mb-2">{item}</li>
		{/each}
	</ul>
</div>