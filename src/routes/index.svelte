<script>
	import { onMount } from 'svelte';
	import { variables } from '$lib/variables'

	// filter posts by keyword either that by a user or by topics
	var searched = 'example';
	const search = () => {};

	let blogPosts;

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	onMount(async () => {
		// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		// blogPosts = await res.json();
		// console.log(blogPosts[0]);
	});

	const fetchPosts = (async () => {
		const response = await fetch(variables.api + '/articles');

		if (response.ok) {
			return response.json();
		} else {
			console.log(response);
			throw new Error("Error on fetching blog posts, check the logs.");
		}
	})();

	const formatDate = (date) => {
		var d = new Date(date);

		const month = months[d.getMonth()];

		const day = d.getDate();

		const year = d.getFullYear();

		return `${month} ${day}, ${year}`;
	};

	const fetchTopics = (async () => {
		const response = await fetch(variables.api + '/topics');

		if (response.ok) {
			return response.json();
		} else {
			console.log(response);
			throw new Error("Error on fetching topics, check the logs.");
		}
	})();
</script>

<svelte:head>
	<title>A blog for inspiring Back-End developers</title>
</svelte:head>

<section>
	<div class="flex flex-col">
		<h1 class="text-4xl mb-10 font-extrabold mx-auto">Amine Amellouk's Blog</h1>
		<p class="mx-auto">
			Software Developer with a passion for the Back-End engineering and the DevOps.
		</p>
		<div class="flex space-x-2 mx-auto">
			<a href="https://www.amineamellouk.com">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
					/>
				</svg>
			</a>
			<a href="https://linkedin.com/in/amine-amellouk">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 5 1036 990"
					class="h-5 w-5"
					stroke="currentColor"
				>
					<path
						d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"
					/>
				</svg>
			</a>
			<a href="mailto:amine.amellouk@outlook.com">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
			</a>
		</div>
		<div class="flex justify-center flex-wrap">
			{#await fetchTopics}
			<button class="badge mx-2 my-2">Loading</button>
			{:then data}
				{#each data as { name }}
					<button class="badge mx-2 my-2">{name}</button>
				{/each}
			{:catch error}
				<p>{error}</p>
			{/await}
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
			{#each [...data].reverse() as { id, title, topics, published_at, author, description, slug, image }}
				<div class="card bordered shadow-2xl mb-20">
					<div class="flex space-x-2 flex-wrap">
						{#each topics as { name }}
							<div class="badge badge-ghost mx-2 my-2">{name}</div>
						{/each}
					</div>
					<figure class="flex">
						<img
							src={image.formats.medium.url}
							alt="blog post"
							class="w-full h-full"
						/>
					</figure>
					<div class="card-body">
						<div class="flex space-x-1">
							<p>Posted on</p>
							<p>{formatDate(published_at)}</p>
							<p>by</p>
							<p>{author.name}</p>
						</div>
						<h2 class="card-title">{title}</h2>
						<p>{description}</p>
						<div class="card-actions">
							<a href="/posts/{slug}" class="text-gray-500">read more</a>
						</div>
					</div>
				</div>
			{/each}
		{:catch error}
			<p>{error}</p>
		{/await}
	</div>
</section>
