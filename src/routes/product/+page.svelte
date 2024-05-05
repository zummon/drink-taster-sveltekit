<script>
	export let data
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
	{#each  data.products as item}
		<div class="">
			<img class="rounded-full aspect-square object-cover" src={item.imgSrc} alt={item.imgAlt} >
		</div>
	{/each}
</div>