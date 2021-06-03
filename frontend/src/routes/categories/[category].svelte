<script context="module">
    import helpers from '../../api/_api.js';
    import snarkdown from 'snarkdown'
    import dayjs from 'dayjs';

    export async function preload({params, query}) {
        try{
            const result = await helpers.fetchCategory(params.category)
            //const text = result[0].Body;
     
            //let bodyWithImage = text.replace(/\/uploads\//g, 'http://localhost:1337/uploads/');
            //result[0].Body = bodyWithImage;

            const category = result;
            console.log(category);

            return {category}
                
                
        }

        catch (e) {
            this.error(500, 'category preload error: ' + e.message);
        }

    }
</script>

<script>
    import { onMount } from 'svelte'
    export let category;

    onMount(async() =>{
        let imgs = document.querySelectorAll('img');
        imgs.forEach(addSpacetoImg);

    })

    const addSpacetoImg = img =>{
        img.style.margin = '0 0 4% 0';
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Goblin+One&family=Oswald&family=Roboto+Mono&family=Roboto:ital,wght@1,100&display=swap');

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5%;
    }

    .container > * {
        width: 100%;
        max-width: 700px;
    
    }

    h1{
        font-family: 'Goblin One', cursive;
    }

    h2{
        font-family: 'Roboto Mono', monospace;
        font-size: 36px;
        padding-bottom: 2%;
    }

    h3{
        font-family: 'Roboto', sans-serif;
    }

    .post-title{
        font-size: 24px;
        text-decoration: none;
        font-family: 'Oswald', sans-serif;
    }


</style>

<svelte:head>
    <title>Category</title>
    <meta name="description" content="Listing of all posts in a specific category."/>
</svelte:head>


<section class="h-full bg-blog-background text-white items-center flex flex-col">

    <h1 class="text-6.5xl pt-8%">
        {category.name}
    </h1>

    <a class="pb-3% text-2xl underline" href="categories">All Categories</a>

    <ul>
        {#each category.blogs as post}
         <li class="pb-5">
            <a class="post-title" rel='prefetch' href='articles/{post.Slug}'>
                {post.Title}
            </a>
            <h3>{dayjs(post.Published).format("MMM DD YYYY")}</h3>
            
        </li>
    {/each}
    </ul>
    

</section>