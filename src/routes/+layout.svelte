<script>
	import '../app.css';

	export let data

	let showMenu = false
	let navs = [
		{path:'/about',text:'About'},
		{path:'/blog',text:'Blog'},
	]
</script>


<div class="flex flex-wrap items-center justify-between p-4">
	<div
		class="rounded-lg bg-white bg-opacity-75"
	>
		<a class="text-lg font-semibold p-4" href="/">
			{data.siteName}
		</a>
	</div>
	<div class="rounded-lg bg-white bg-opacity-75">
		<details open>
			<summary class="list-none">
				<!-- heroicons micro bars-3 -->
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-6 h-6">
					<path fill-rule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
				</svg>				
			</summary>
			<div class="absolute right-0">
				{#each navs as item }
					<a
						class="block bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-500 ease-in-out text-lg font-semibold p-4"
						href={item.path}
					>
						{item.text}
					</a>
				{/each}
			</div>
		</details>
	</div>
</div>

<slot />

<div class="p-4 flex justify-end">
	<p class="text-lg p-4 bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-500 ease-in-out rounded-lg">
		<span class="font-semibold">
			Made by zummon (Teerapat Anantarattanachai)
		</span>
	</p>
</div>