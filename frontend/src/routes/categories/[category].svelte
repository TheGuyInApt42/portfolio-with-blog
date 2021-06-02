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
        font-size: 64px;
        padding: 8% 0 3%;
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

  .footer {
    margin: 3rem 0;
    text-align: center;
  }


  .header {
    color: white;
    text-shadow: 0px 1px 3px rgba(0,0,0,.8), 0px 0px 6px rgba(0,0,0,.8);
    background-size: cover;
    min-height: 25vw;
    justify-content: flex-end;
        padding-top: 2rem;
  }

</style>

<svelte:head>
    <title>Category</title>
    <meta name="description" content="Listing of all posts in a specific category."/>
</svelte:head>


<section class="h-full bg-blog-background text-white items-center flex flex-col">

    <h1>
        {category.name}
    </h1>

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
    
<!--
                {#each category as post}
                        
                        <div class="header container" style="background-image: url('http://localhost:1337{post.Cover.url}')">
                        </div>
                        <main>
                        <div class="container">
                                <h1>{post.Name}</h1>
                               

                        </div>
                        </main>

                        <p class="footer">© Ralph Jarrod Gorham 2021</p>
            
                {/each}
      
        

        



        <p>⇺<a href="articles"> back to articles</a></p>
                    -->
</section>