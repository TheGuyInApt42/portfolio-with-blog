<script>
    import ProjectCards from './_components/ProjectCards.svelte';
    import Details from './_components/Details.svelte';
    import jobs from './_jobs.js'
</script>

<svelte:head>
	<title>Ralph J Gorham Projects</title>
    <meta name="description" content="Check out some of the works of Ralph Jarrod Gorham"/>
</svelte:head>


<div id="background-wrapper" class="w-full min-h-full bg-projects-background">
    <div id="container" class="h-auto p-5 mx-12 w-5/6">
        <h1 class="text-black font-ubuntu md:text-6.5xl my-10 text-center text-5xl">Recent Projects</h1>
        <div id="projects-container">
            <div id="project-list" class="pl-5%">
                {#each jobs as job}
                    <Details title={job.name} photo={job.pic} desc={job.desc} tools={job.tools} link={job.link}/>
                {/each}
                
            </div>
        </div>
    
    </div>

</div>