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
        let h3s = document.querySelectorAll('h3');
        let h4s = document.querySelectorAll('h4');
        let source = document.querySelectorAll('source');
        
        addClass(imgs, 'content-image');
        addClass(h3s, 'content-heading');
        addClass(h4s, 'small-heading');
        
        getVideoSrc(source);







    })

    const addClass = (elems,  addedClass) =>{
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.add(addedClass);
        }
    }

    const addSpacetoHeading = heading =>{
        heading.style.margin = '5% 0';
        heading.style.fontsize = '24px';
    }

    const addSpacetoImg = img =>{
        img.style.margin = '5% 0';
        img.style.width = '100%';
    }

    // change video src
    const getVideoSrc = vids =>{
        for (var i = 0; i < vids.length; i++) {
            let originalSrc = vids[i].src;
            //let newSrc = originalSrc.replace('http://localhost:3000', rootUrl);
            let newSrc = process.env.NODE_ENV === 'development' ? originalSrc.replace('http://localhost:3000', rootUrl) : originalSrc.replace('https://ralphjgorham.com', rootUrl);
            console.log(newSrc);
            newSrc = decodeURIComponent(newSrc);
            let fixedSrc = newSrc.replace('<em>',"_");
            vids[i].src = fixedSrc;
        }
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

    :global(.content-image) {
		margin: 5% 0;
        width: 100%;
	}

    :global(.content-video) {
		margin: 5% 0;
        width: 100%;
	}

    :global(.content-heading) {
		margin: 5% 0;
        font-size: 24px;
        font-weight: bold;
	}

    :global(.small-heading) {
		margin: 5% 0;
        font-size: 20px;
        font-weight: 600;
	}

</style>

<svelte:head>
    {#each post as post}
        <title>{post.Title}</title>
        <meta name="description" content="An amazing article by Ralph Jarrod Gorham. {post.Description}"/>
    {/each}
    
    
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