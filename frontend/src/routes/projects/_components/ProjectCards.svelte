<script>
    import ProjectCard from './ProjectCard.svelte';
    import jobs from '../_jobs.js'
</script>

<section class="flex items-center justify-items-center h-screen overflow-hidden">
    <div class="container mx-auto">
        <div class="card_outer grid grid-cols-3">
            {#each jobs as item}
                <ProjectCard title={item.name} desc={item.desc} link={item.link}/>
            {/each}
        </div>
    </div>
</section>


<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        --d: 700ms;
        --e: cubic-bezier(0.19, 1, 0.22, 1);
        font-family: 'Montserrat', sans-serif;
    }
    .container {
        width: 90%;
        max-width: 1260px;
    }
    .card_outer {
        grid-template-columns: auto auto auto;
        grid-gap: 20px;
    }
</style>