<script>
	import Tailwindcss from '../components/Tailwindcss.svelte';
	import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';

    //TODO: look at https://www.reddit.com/r/sveltejs/comments/egrsns/created_a_best_of_site_with_svelte_and_routify/
	export let segment;
</script>

<style>
    div{
        grid-template-areas: 
        "header"
        "main-content"
        "footer";
    }

    header{
        grid-area: header;
    }

    main{
        grid-area: main-content;
    }

    #footer{
        grid-area: footer;
    }
    
</style>

<!-- routify:options preload="proximity" -->

<Tailwindcss />



<div class="grid min-h-screen grid-rows-layout">
    <header class="fixed w-screen z-5">
        <Nav {segment}/> 
    </header>

    <main class="w-screen">
        <slot /> 
    </main>

    <section id="footer">
        <Footer />
    </section>

</div>