<script>
    //import Cards from '../components/Cards.svelte';
    import Details from './_components/Details.svelte';
    import ProjectCards from './_components/ProjectCards.svelte';
    let jobs = [
        {
        'name': 'Droplet  Fuel',
        'pic': '/images/droplet.png',
        'desc' : 'Full Stack Website Contract I worked on for a start up which had created a smart oil gauge. ',
        'tools' : 'HTML, CSS, jQuery, PHP, MySQL',
        'link' : 'https://www.dropletfuel.com'
        },

        {
        'name': 'White Rock Center',
        'pic': '/images/whiterock.gif',
        'desc' : 'Website I built for a banquet hall in North Carolina incorporating an animated slider which is made with Gsap.',
        'tools' : 'SvelteJS, Node, Express',
        'link' : 'https://www.whiterocknc.com'
        },
        
        {
        'name': 'Original Portfolio Design',
        'pic': '/images/homepage_thumb.png',
        'desc' : 'This is my original design for the first iteration of my portfolio in 2019. I incorporated a light/dark theme switcher based on basketball using home and away colors (specifically Duke Basketball color scheme). The contact form is in chatbot format.',
        'tools' : 'MeteorJS',
        'link' : 'https://ogportfolio.herokuapp.com'
        }
        /*
        {
        'name': 'Github',
        'pic': '',
        'desc' : 'Check out my tinkering',
        'tools' : 'Python, SvelteJS, Vanilla JS, Node, Java, React, MongoDB, MySQL, Vue, MeteorJS, PHP, jQuery'
        }*/
    ]
</script>

<svelte:head>
	<title>Works of Ralph J Gorham</title>
    <meta name="description" content="Description coming soon..."/>
</svelte:head>


<div id="background-wrapper">
    <div id="container">
        <h1>Recent Projects</h1>
        <div id="projects-container">
            <!--
            <Cards items={jobs} />
            -->

            <div id="project-list">
                <!--
                {#each jobs as job}
                    <Details title={job.name} photo={job.pic} desc={job.desc} tools={job.tools} link={job.link}/>
                {/each}
                -->
                <ProjectCards/>

            </div>
        </div>
        
    
    
    </div>

</div>




<style>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');
    #background-wrapper{
        background-color: #DCDCDC;
        width: 100%;
        min-height: 100%;
    }
    #container{
        width: 83%;
        height: auto;
        margin: 0 3rem;
        padding: 20px;
       
    }

    #project-list{
        padding-left: 5%;
    }

    

    h1{
        color: black;
    }
</style>