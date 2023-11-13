<script>
	import '../app.css';

	export let data

	let showMenu = false

</script>


<div class="sm:flex flex-wrap p-4">
	<div
		class={`bg-white ${
			data.pathname === '/' ? '' : 'bg-opacity-75 hover:bg-opacity-100'
		} flex items-center justify-between sm:rounded-l-lg`}
	>
		<a href="/" class="text-lg font-semibold p-4">
			{data.siteName}
		</a>
		<button
			class="text-lg font-semibold p-4 sm:hidden"
			on:click={() => {
				showMenu = !showMenu
			}}
		>
			{#if showMenu}
				<!-- https://feathericons.com/ x -->
				<svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
			{:else}
				<!-- https://feathericons.com/ menu -->
				<svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
			{/if}
		</button>
	</div>
	<a
		href="/about"
		class={`bg-white ${
			data.pathname.startsWith('/about')
				? ''
				: 'bg-opacity-75 hover:bg-opacity-100'
		} transition duration-500 ease-in-out text-lg font-semibold p-4 sm:block ${
			showMenu ? 'inline-block' : 'hidden'
		}`}
	>
		About
	</a>
	<a
		href="/blog"
		class={`bg-white ${
			data.pathname.startsWith('/blog')
				? ''
				: 'bg-opacity-75 hover:bg-opacity-100'
		} transition duration-500 ease-in-out text-lg font-semibold p-4 sm:rounded-r-lg sm:block ${
			showMenu ? 'inline-block' : 'hidden'
		}`}
	>
		Blog
	</a>
</div>

<slot />

<div class="p-4 flex justify-end">
	<p class="text-lg p-4 bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-500 ease-in-out rounded-lg">
		<span class="font-semibold">
			Made by zummon (Teerapat Anantarattanachai)
		</span>
	</p>
</div>