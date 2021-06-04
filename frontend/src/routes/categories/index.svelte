<script context="module">
    import helpers from '../../api/_api.js';

    export async function preload() {
        try{
            const result = await helpers.fetchCategories()
            const categories = result[0];

            return {categories}     
        }

        catch (e) {
            this.error(500, 'categories preload error: ' + e.message);
        }
    }

</script>

<script>
    import { onMount } from 'svelte'
    export let categories;

    onMount(async() => {
        document.querySelectorAll('ul.cloud a').forEach((i) => {
            i.style.setProperty('--size', i.dataset.weight);
        });
    })
    
</script>

<style>
    /* idea from https://dev.to/alvaromontoro/create-a-tag-cloud-with-html-and-css-1e90 */
    .cloud{
        list-style: none;
        padding-left: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        line-height: 2.5rem;
    }

    ul.cloud a {
        /*   
        Not supported by any browser at the moment :(
        --size: attr(data-weight number); 
        */
        --size: 4;
        --color: #fff;
        color: var(--color);
        font-size: calc(var(--size) * 0.25rem + 0.5rem);
        display: block;
        padding: 0.125rem 0.25rem;
        position: relative;
        text-decoration: none;
        /* 
        For different tones of a single color
        */
        opacity: calc((15 - (9 - var(--size))) / 15); 
        
    }

    ul[data-show-value] a::after {
        content: " (" attr(data-weight) ")";
        font-size: 1rem;
    }
</style>

<svelte:head>
    <title>Categories</title>
    <meta name="description" content="Categories for all the blog posts."/>
</svelte:head>

<section class="h-full text-center bg-blog-background text-white">
    <h1 class="py-8 font-bold pr-5% text-5xl">Categories</h1>

    <div class="flex items-center justify-center">
        <ul class="cloud" role="navigation" data-show-value aria-label="Categories tag cloud">
        {#each categories as category}
            <li class="list-none mb-4%">
                <a class="no-underline" href="categories/{category.name}" rel="prefetch" data-weight="{category.blogs.length}">{category.name}</a>
                
            </li>

                
        {/each}
        </ul>
    </div>

</section>

