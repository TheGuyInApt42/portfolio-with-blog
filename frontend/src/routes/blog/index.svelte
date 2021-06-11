<script context="module">
    import dayjs from 'dayjs';
    import helpers from '../../api/_api.js';

    export async function preload() {
        try{
            const result = await helpers.fetchPosts()
            const posts = result[0];

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


<svelte:head>
    <title>Blog</title>
    <meta name="description" content="The life and times of Ralph Jarrod Gorham and random musings"/>
</svelte:head>

<section class="h-full flex items-center justify-center text-white bg-blog-background below-1024:flex-col">
    <h1 class="below-1024:py-12 px-5% text-5xl font-bold">Thoughts</h1>

<ul class="below-768:pl-8 leading-normal mb-4">
{#each posts as post}
    <li class="mb-12 list-none">
        <h2 class="main-title below-768:text-3.5xl text-40px no-underline" rel='prefetch' href='blog/{post.Slug}'>
            {post.Title}
        </h2>
        <h3 class="pt-2% below-768:py-2%">{dayjs(post.Published).format("MMM DD YYYY")}</h3>

        <div class="py-5">
            <h4 class="mb-2">{post.Description}</h4>
            <a class="raise" rel='prefetch' href='blog/{post.Slug}'>
                READ MORE ->
            </a>
        </div>
        



        {#each post.categories as category}
            <a class="category-link pr-5 no-underline" href="categories/{category.name}" rel="prefetch">#{category.name}</a>
        {/each}
    </li>

        
{/each}
</ul>
</section>

<style>
.raise:hover,
.raise:focus {
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  transform: translateY(-0.25em);
}

.raise {
  --color: #ffa260;
  --hover: #e5ff60;
}

.raise {
  color: #fff;
  transition: 0.25s;
}
.raise:hover, .raise:focus {
  border-color: var(--hover);
  color: #fff;
}

.raise {
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 2em 0 0;
  padding: 0 1em;
}

.offset {
  --color: #19bc8b;
  --hover: #1973bc;
}

.offset {
  box-shadow: 0.3em 0.3em 0 0 var(--color), inset 0.3em 0.3em 0 0 var(--color);
}
.offset:hover, .offset:focus {
  box-shadow: 0 0 0 0 var(--hover), inset 6em 3.5em 0 0 var(--hover);
}
</style>