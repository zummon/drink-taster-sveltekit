<script>
	export let data
</script>

<div class="">
	{#each  data.products as item}
		<div class="">
			<img class="" src={item.imgSrc} alt={item.imgAlt} >
			{item.imgUrl}
		</div>
	{/each}
</div>