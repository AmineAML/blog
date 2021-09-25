<script>
	import { onMount } from 'svelte';

	// filter posts by keyword either that by a user or by topics
	var searched = 'example';
	const search = () => {};

	let blogPosts;

	onMount(async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		blogPosts = await res.json();
		console.log(blogPosts[0]);
	});

	const fetchPosts = (async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		return await response.json();
	})();
</script>

<svelte:head>
	<title>A blog for inspiring Back-End developers</title>
</svelte:head>

<section>
	<div class="flex flex-col">
		<h1 class="text-4xl mb-10 font-extrabold mx-auto">Amine Amellouk's Blog</h1>
		<p class="mx-auto">
			Software Developer with a passion for the Back-End engineering and the DevOps
		</p>
		<div class="flex space-x-2 mx-auto">
			<a href="/">LinkedIn</a>
			<a href="/">GitHub</a>
			<a href="/">Stack Overflow</a>
		</div>
		<div class="flex space-x-2 mx-auto">
			<button class="badge">topic</button>
			<button class="badge">topic</button>
			<button class="badge">topic</button>
			<button class="badge">topic</button>
			<button class="badge">topic</button>
			<button class="badge">topic</button>
			<button class="badge">topic</button>
			<button class="badge">topic</button>
		</div>
		<div class="divider" />
		<div class="form-control py-3 mx-auto w-full">
			<div class="relative">
				<input
					type="text"
					placeholder="Search"
					class="w-full pr-16 input input-bordered"
					bind:value={searched}
				/>
				<button class="absolute top-0 right-0 rounded-l-none btn" on:click={search}>go</button>
			</div>
		</div>
		{#await fetchPosts}
			<p>...waiting</p>
		{:then data}
			{#each data as { id, title, body }}
				<div class="card bordered shadow-2xl text-center mb-20">
					<div class="badge badge-ghost">topic</div>
					<figure class="flex px-10 pt-10">
						<img
							src="https://www.artza-technologies.com/img/manageProjectsPage/gestion-projets.png"
							class="w-full"
							alt="blog post"
						/>
					</figure>
					<div class="card-body">
						<div class="flex space-x-2">
							<p>September 22, 2021</p>
							<p>by</p>
							<p>Amine Amellouk</p>
						</div>
						<h2 class="card-title">{title}</h2>
						<p>{body}</p>
						<div class="card-actions">
							<a href="/posts/{id}">read more</a>
						</div>
					</div>
				</div>
			{/each}
		{:catch error}
			<p>An error occurred!</p>
		{/await}
	</div>
</section>
