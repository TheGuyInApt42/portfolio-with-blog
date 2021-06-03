<script context="module">
    import dayjs from 'dayjs';
    import helpers from '../../api/_api.js';
    import { rootUrl } from '../../api/_api.js';
    import snarkdown from 'snarkdown'

    export async function preload({params, query}) {
        try{
            const result = await helpers.fetchPost(params.slug)
            console.log(result[0]);
            const text = result[0].Body;
     
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
    let simple = false;

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
    .container {
        align-items: center;
        padding-top: 5%;
    }

    .container > * {
        width: 100%;
        max-width: 700px;
    
    }
    h2{
        padding-bottom: 2%;
    }

section{
    padding-top: 2%;
        background-color: #1a202c;
        color: #fff;
}

  .footer {
    margin: 3rem 0;
    text-align: center;
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
    <title>Blog Post</title>
    <meta name="description" content="An amazing story by Ralph Jarrod Gorham"/>
</svelte:head>


<section class="h-full ">
    {#each post as post}
            {#if post.Cover}
                 <div class="header container flex flex-col items-center pt-5% bg-no-repeat bg-contain below-768:hidden" style="background-image: url({rootUrl}{post.Cover.url})">
                </div>
            {/if}
            
            <main class="below-768:pl-6">
            <div class="container flex flex-col">
                <h1 class="md:text-5xl text-4xl">{post.Title}</h1>
                <h2 class="my-3">{dayjs(post.Published).format("MMM DD YYYY")}</h2>
                
                <div id="categories" class="flex mb-6">
                    {#each post.categories as category}
                        <a class="category-link" href="categories/{category.id}" rel="prefetch">#{category.name}</a>
                    {/each}
                </div>
                
                
                <div>
                {@html snarkdown(post.Body)}
                </div>

            </main>

            <p class="footer">© Ralph Jarrod Gorham 2021</p>

    {/each}

    <!--
    <p class="test">⇺<a href="blog"> back to articles</a></p>
    -->

</section>