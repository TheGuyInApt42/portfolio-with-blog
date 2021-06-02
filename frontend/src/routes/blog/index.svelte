<script context="module">
    import dayjs from 'dayjs';
    import helpers from '../../api/_api.js';

    export async function preload() {
        try{
            const result = await helpers.fetchPosts()
            const posts = result[0];
            console.log(posts);
            return {posts}     
        }

        catch (e) {
            this.error(500, 'posts preload error: ' + e.message);
        }
    }

</script>

<script>
    export let posts;
</script>

<style>
    ul, p {
        margin: 0 0 1em 0;
        line-height: 1.5;
    }
    a{
        text-decoration: none;
    }
</style>

<svelte:head>
    <title>Blog</title>
    <meta name="description" content="The life and times of Ralph Jarrod Gorham and random musings"/>
</svelte:head>

<section class="h-full flex items-center justify-center text-white bg-blog-background below-1024:flex-col">
    <h1 class="below-1024:py-12 px-5% text-5xl font-bold">Thoughts</h1>

<ul class="below-768:pl-8">
{#each posts as post}
    <li class="mb-12 list-none">
          <a class="main-title below-768:text-3.5xl text-40px" rel='prefetch' href='blog/{post.Slug}'>
            {post.Title}
          </a>
          <h2 class="pt-2% below-768:py-2%">{dayjs(post.Published).format("MMM DD YYYY")}</h2>

          <h3 class="py-5">{post.Description}</h3>
          {#each post.categories as category}
               <a class="category-link pr-5" href="categories/{category.id}" rel="prefetch">#{category.name}</a>
          {/each}
          
    </li>

        
{/each}
</ul>
</section>