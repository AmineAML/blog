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
        <div class="card lg:card-side bordered flex">
            <div class="avatar my-auto">
                <div class="mb-8 rounded-full w-24 h-24">
                  <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png">
                </div>
              </div> 
            <div class="card-body">
              <h2 class="card-title">Author name</h2>
              <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
              <!-- <div class="card-actions">
                <button class="btn btn-primary">Get Started</button> 
                <button class="btn btn-ghost">More info</button>
              </div> -->
            </div>
          </div>
	</div>
</section>
