<script>
	import { page } from '$app/stores';

	var slug = $page.params.slug;
</script>

<section>
	<div class="flex flex-col space-y-2">
		<h1 class="text-4xl mb-10 font-bold mx-auto">{slug}</h1>
        <figure class="flex px-10 pt-10">
            <img
                src="https://www.artza-technologies.com/img/manageProjectsPage/gestion-projets.png"
                class="w-full"
                alt="blog post"
            />
        </figure>
		<div />
        <div class="badge badge-ghost">topic</div>
        <div class="flex space-x-2">
            <p>September 22, 2021</p>
            <p>by</p>
            <p>Amine Amellouk</p>
        </div>
        <div class="divider" />
        <p>ree</p>
	</div>
</section>
