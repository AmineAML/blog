<script>
	import { page } from '$app/stores';
	import marked from 'marked';

	let _md = marked;

	var slug = $page.params.slug;

	var url = 'https://blog.amineamellouk.com/posts/' + slug;

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

	const fetchPost = (async () => {
		const response = await fetch(`http://localhost:1337/articles/${slug}`);

		if (response.ok) {
			return response.json();
		} else {
			console.log(response);
			throw new Error('Error on fetching the post, check the logs.');
		}
	})();

	const formatDate = (date) => {
		var d = new Date(date);

		const month = months[d.getMonth()];

		const day = d.getDate();

		const year = d.getFullYear();

		return `${month} ${day}, ${year}`;
	};

	let markdown = '# Ree'
</script>

<section>
	<div class="flex flex-col space-y-2 mt-10 mb-10">
		{#await fetchPost}
			<button class="badge mx-2 my-2">Loading</button>
		{:then post}
			<h1 class="text-4xl mb-10 font-bold mx-auto">{post.title}</h1>
			<figure class="flex px-10 pt-10 flex-col">
				<img
					src={'http://localhost:1337' + post.image.formats.medium.url}
					class="w-full"
					alt="blog post"
				/>
				<figcaption class="font-medium">
					<div class="text-gray-500 text-center text-xs">Source Copyrights</div>
				</figcaption>
			</figure>
			<div />
			<div class="flex space-x-2 flex-wrap">
				{#each post.topics as { name }}
					<div class="badge badge-ghost mx-2 my-2">{name}</div>
				{/each}
			</div>
			<div class="flex space-x-1">
				<p>Posted on</p>
				<p>{formatDate(post.published_at)}</p>
				<p>by</p>
				<p>{post.author.name}</p>
			</div>
			<div class="divider" />
			<div class="prose">
				{@html _md(post.content)}
			</div>
			<div class="flex mx-auto pt-10">Quote of the post</div>
			<div class="w-full mb-10">
				<div class="text-3xl text-left leading-tight h-3 text-gray-600">“</div>
				<p class="text-sm text-gray-600 text-center px-5">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium
					recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.
				</p>
				<div class="text-3xl text-right leading-tight h-3 -mt-3 text-gray-600">”</div>
			</div>
			<div class="w-full">
				<p class="text-md font-bold text-center text-gray-600">- Scott Windon</p>
			</div>
			<div class="divider" />
			<div class="card shadow">
				<div class="card-body">
					<h2 class="card-title justify-center flex">Share with others!</h2>
					<div class="flex space-x-2 flex-wrap justify-center">
						<a href="https://twitter.com/intent/tweet?url={url}">
							<svg
								viewBox="117.806 161.288 464.388 377.424"
								xmlns="http://www.w3.org/2000/svg"
								class="h-10 w-10"
								><path
									d="m582.194 205.976c-17.078 7.567-35.424 12.68-54.71 14.991 19.675-11.78 34.769-30.474 41.886-52.726-18.407 10.922-38.798 18.857-60.497 23.111-17.385-18.488-42.132-30.064-69.538-30.064-52.603 0-95.266 42.663-95.266 95.307a97.3 97.3 0 0 0 2.454 21.68c-79.211-3.989-149.383-41.928-196.382-99.562-8.18 14.112-12.885 30.474-12.885 47.899 0 33.05 16.833 62.236 42.377 79.314a95.051 95.051 0 0 1 -43.154-11.924v1.227c0 46.16 32.826 84.672 76.43 93.426a95.97 95.97 0 0 1 -25.095 3.313 95.929 95.929 0 0 1 -17.936-1.677c12.128 37.836 47.306 65.406 89.008 66.142-32.622 25.565-73.71 40.802-118.337 40.802-7.69 0-15.278-.45-22.743-1.33 42.173 27.06 92.24 42.807 146.029 42.807 175.275 0 271.094-145.17 271.094-271.073 0-4.09-.103-8.222-.287-12.312 18.612-13.458 34.769-30.208 47.51-49.29z"
									fill="#1da1f2"
								/></svg
							>
						</a>
						<a href="https://www.linkedin.com/sharing/share-offsite/?url={url}">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="7.025 7.025 497.951 497.95"
								class="h-10 w-10"
							>
								<linearGradient
									id="a"
									gradientUnits="userSpaceOnUse"
									x1="-974.482"
									y1="1306.773"
									x2="-622.378"
									y2="1658.877"
									gradientTransform="translate(1054.43 -1226.825)"
									><stop offset="0" stop-color="#2489be" /><stop
										offset="1"
										stop-color="#0575b3"
									/></linearGradient
								><path
									d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
									fill="url(#a)"
								/>
							</svg>
						</a>
						<a href="https://www.facebook.com/sharer.php?u={url}">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="126.445 2.281 589 589"
								class="h-10 w-10"
							>
								<circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a" /><path
									d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
									fill="#fff"
								/>
							</svg>
						</a>
						<a href="https://reddit.com/submit?url={url}">
							<svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10">
								<circle cx="400" cy="400" fill="#ff4500" r="400" /><path
									d="M666.8 400c.08 5.48-.6 10.95-2.04 16.24s-3.62 10.36-6.48 15.04c-2.85 4.68-6.35 8.94-10.39 12.65s-8.58 6.83-13.49 9.27c.11 1.46.2 2.93.25 4.4a107.268 107.268 0 0 1 0 8.8c-.05 1.47-.14 2.94-.25 4.4 0 89.6-104.4 162.4-233.2 162.4S168 560.4 168 470.8c-.11-1.46-.2-2.93-.25-4.4a107.268 107.268 0 0 1 0-8.8c.05-1.47.14-2.94.25-4.4a58.438 58.438 0 0 1-31.85-37.28 58.41 58.41 0 0 1 7.8-48.42 58.354 58.354 0 0 1 41.93-25.4 58.4 58.4 0 0 1 46.52 15.5 286.795 286.795 0 0 1 35.89-20.71c12.45-6.02 25.32-11.14 38.51-15.3s26.67-7.35 40.32-9.56 27.45-3.42 41.28-3.63L418 169.6c.33-1.61.98-3.13 1.91-4.49.92-1.35 2.11-2.51 3.48-3.4 1.38-.89 2.92-1.5 4.54-1.8 1.61-.29 3.27-.26 4.87.09l98 19.6c9.89-16.99 30.65-24.27 48.98-17.19s28.81 26.43 24.71 45.65c-4.09 19.22-21.55 32.62-41.17 31.61-19.63-1.01-35.62-16.13-37.72-35.67L440 186l-26 124.8c13.66.29 27.29 1.57 40.77 3.82a284.358 284.358 0 0 1 77.8 24.86A284.412 284.412 0 0 1 568 360a58.345 58.345 0 0 1 29.4-15.21 58.361 58.361 0 0 1 32.95 3.21 58.384 58.384 0 0 1 25.91 20.61A58.384 58.384 0 0 1 666.8 400zm-396.96 55.31c2.02 4.85 4.96 9.26 8.68 12.97 3.71 3.72 8.12 6.66 12.97 8.68A40.049 40.049 0 0 0 306.8 480c16.18 0 30.76-9.75 36.96-24.69 6.19-14.95 2.76-32.15-8.68-43.59s-28.64-14.87-43.59-8.68c-14.94 6.2-24.69 20.78-24.69 36.96 0 5.25 1.03 10.45 3.04 15.31zm229.1 96.02c2.05-2 3.22-4.73 3.26-7.59.04-2.87-1.07-5.63-3.07-7.68s-4.73-3.22-7.59-3.26c-2.87-.04-5.63 1.07-7.94 2.8a131.06 131.06 0 0 1-19.04 11.35 131.53 131.53 0 0 1-20.68 7.99c-7.1 2.07-14.37 3.54-21.72 4.39-7.36.85-14.77 1.07-22.16.67-7.38.33-14.78.03-22.11-.89a129.01 129.01 0 0 1-21.64-4.6c-7.08-2.14-13.95-4.88-20.56-8.18s-12.93-7.16-18.89-11.53c-2.07-1.7-4.7-2.57-7.38-2.44s-5.21 1.26-7.11 3.15c-1.89 1.9-3.02 4.43-3.15 7.11s.74 5.31 2.44 7.38c7.03 5.3 14.5 9.98 22.33 14s16 7.35 24.4 9.97 17.01 4.51 25.74 5.66c8.73 1.14 17.54 1.53 26.33 1.17 8.79.36 17.6-.03 26.33-1.17A153.961 153.961 0 0 0 476.87 564c7.83-4.02 15.3-8.7 22.33-14zm-7.34-68.13c5.42.06 10.8-.99 15.81-3.07 5.01-2.09 9.54-5.17 13.32-9.06s6.72-8.51 8.66-13.58A39.882 39.882 0 0 0 532 441.6c0-16.18-9.75-30.76-24.69-36.96-14.95-6.19-32.15-2.76-43.59 8.68s-14.87 28.64-8.68 43.59c6.2 14.94 20.78 24.69 36.96 24.69z"
									fill="#fff"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div class="card lg:card-side bordered flex px-2" style="background-color: #bec298;">
				<figure class="flex">
					<div class="avatar m-auto">
						<div class="mb-8 rounded-full w-24 h-24">
							<img
								src={'http://localhost:1337' + post.author.picture.formats.small.url}
								alt="author avatar"
							/>
						</div>
					</div>
				</figure>
				<div class="card-body space-y-2">
					<h1 class="flex uppercase text-gray-600">About the author</h1>
					<h2 class="text-cyan-600 text-lg">
						<span>{post.author.name}</span>
					</h2>
					<p>{post.author.about}</p>
					<div class="card-actions">
						<a href={post.author.website}>
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
						<a href={post.author.linkedin}>
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
						<a href={'mailto:' + post.author.email}>
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
				</div>
			</div>
		{:catch error}
			<p>{error}</p>
		{/await}
	</div>
</section>
