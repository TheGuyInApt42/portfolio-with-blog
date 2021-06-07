<script context="module">
    import dayjs from 'dayjs';
    import helpers from '../../api/_api.js';
    import { rootUrl } from '../../api/_api.js';
    import snarkdown from 'snarkdown'

    export async function preload({params, query}) {
        try{
            const result = await helpers.fetchPost(params.slug)
            const text = result[0].Body; //main content of the post, need as var in order to fix image src with regex

            const imageUrl = `/uploads/`;
            let bodyWithImage = text.replace(/\/uploads\//g, imageUrl);
            result[0].Body = bodyWithImage;

            const post = result;

            return {post}
        }

        catch (e) {
            this.error(500, 'post preload error: ' + e.message);
        }

    }
</script>

<script>
    import { onMount } from 'svelte'

    export let post;

    onMount(async() =>{
        let imgs = document.querySelectorAll('img');
        imgs.forEach(addSpacetoImg);

    })

    const addSpacetoImg = img =>{
        img.style.margin = '5% 0';
        img.style.width = '100%';
    }

</script>

<style>
    .container > * {
        width: 100%;
        max-width: 700px;
    
    }

    .category-link{
        padding: 0 2% 2% 0;
    }

    .header {
        background-position: top center;
        min-height: 30vw;
        /*height: 0;
        width: 100%;
        padding-top: 72.88%;*/
    }

</style>

<svelte:head>
    {#each post as post}
        <title>post.Title</title>
    {/each}
    
    <meta name="description" content="An amazing story by Ralph Jarrod Gorham"/>
</svelte:head>


<section class="h-full pt-2% text-white bg-blog-background">
    {#each post as post}
            {#if post.Cover}
                <div class="header container flex flex-col items-center pt-5% bg-no-repeat bg-contain below-768:hidden" style="background-image: url({rootUrl}{post.Cover.url})">
                </div>
            {/if}
            
            <main class="below-768:pl-6">
            <div class="container flex flex-col items-center pt-5%">
                <h1 class="md:text-5xl text-4xl">{post.Title}</h1>
                <h2 class="my-3 pb-2%">{dayjs(post.Published).format("MMM DD YYYY")}</h2>
                
                <div id="categories" class="flex mb-6">
                    {#each post.categories as category}
                        <a class="category-link" href="categories/{category.name}" rel="prefetch">#{category.name}</a>
                    {/each}
                </div>
                
                
                <div>
                {@html snarkdown(post.Body)}
                </div>

            </main>

            <p class="text-center my-12">© Ralph Jarrod Gorham 2021</p>

    {/each}

    <!--
    <p class="test">⇺<a href="blog"> back to articles</a></p>
    -->
</section>