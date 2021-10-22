import preprocess from "svelte-preprocess";
// import netlify from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        // adapter: netlify()
        // adapter: adapter({
        //     // default options are shown
        //     pages: 'build',
        //     assets: 'build',
        //     fallback: null
        // }),
        // ssr: false,
        // prerender: {
        //     enabled: true
        // }
        adapter: adapter()
	},

    preprocess: [preprocess({
        postcss: true
    })]
};

export default config;
