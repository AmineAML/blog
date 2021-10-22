<script>
	import '../app.postcss';
</script>

<header class="navbar mb-2 shadow-lg rounded-box">
	<div class="flex-1 px-2 mx-2">
		<div class="items-stretch hidden lg:flex">
			<a class="btn btn-ghost btn-sm rounded-btn" href="/"> Blog </a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/about"> About </a>
		</div>
	</div>
</header>
<main class="container mx-auto px-4 max-w-xl">
	<slot />
</main>
