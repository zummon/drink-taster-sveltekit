<script>
	export let data
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
</svelte:head>

<svelte:body style={`background-image: url(${data.cover.src});`}></svelte:body>

<div class="bg-white bg-opacity-75 hover:bg-opacity-100 transition ease-in-out duration-500 rounded-lg max-w-screen-md mx-auto p-4 mb-4 text-center">
	<h1 class="text-3xl font-bold mb-6">{data.title}</h1>
	<p class="text-xl font-semibold mb-4">{data.description}</p>
</div>
<div class="prose prose-lg max-w-screen-md mx-auto bg-white bg-opacity-75 hover:bg-opacity-100 transition ease-in-out duration-500 rounded-lg p-4">
	<svelte:component this={data.content}></svelte:component>
</div>