<script>
	import '../app.css';

	export let data

	let showMenu = false
	let navs = [
		{path:'/about',text:'About'},
		{path:'/blog',text:'Blog'},
	]
</script>


<div class="flex flex-wrap justify-between bg-white bg-opacity-75 rounded-lg m-4">
	<div
		class="py-3 px-4"
	>
		<a class="text-lg font-semibold" href="/">
			{data.siteName}
		</a>
	</div>
	<div class="py-3 px-4">
		<details open>
			<summary class="list-none cursor-pointer">
				<!-- heroicons micro bars-3 -->
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="ml-auto w-7 h-7">
					<path fill-rule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
				</svg>				
			</summary>
			<div class="sm:flex gap-3 mt-3">
				{#each navs as item }
					<a
						class="block hover:bg-white focus:bg-white transition duration-500 text-lg font-semibold py-2 px-2"
						href={item.path}
					>
						{item.text}
					</a>
				{/each}
			</div>
		</details>
	</div>
</div>

<div class="mx-4">
	<slot />
</div>

<div class="my-4 mr-4 ml-auto flex flex-wrap justify-end bg-white bg-opacity-75 rounded-lg w-fit">
	<p class="py-3 px-4">
		<span class="font-medium">
			Made by zummon (Teerapat Anantarattanachai)
		</span>
	</p>
</div>