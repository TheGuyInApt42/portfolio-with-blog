<script context="module">
    import helpers from '../../api/_api.js';
    import dayjs from 'dayjs';

    export async function preload({params}) {
        try{
            const result = await helpers.fetchCategoryByName(params.category)

            const category = result[0];

            return {category}
        }

        catch (e) {
            this.error(500, 'category preload error: ' + e.message);
        }

    }
</script>

<script>
    export let category;
</script>


<svelte:head>
    <title>Category</title>
    <meta name="description" content="Listing of all posts in a specific category."/>
</svelte:head>


<section class="h-full bg-blog-background text-white items-center flex flex-col">

    <h1 class="text-6.5xl pt-8% font-goblin">
        {category.name}
    </h1>

    <a class="pb-3% text-2xl underline" href="categories">All Categories</a>

    <ul>
        {#each category.blogs as post}
            <li class="pb-5">
            <a class="text-2xl no-underline font-oswald" rel='prefetch' href='blog/{post.Slug}'>
                {post.Title}
            </a>
            <h3 class="font-roboto">{dayjs(post.Published).format("MMM DD YYYY")}</h3>
            
        </li>
    {/each}
    </ul>
    

</section>