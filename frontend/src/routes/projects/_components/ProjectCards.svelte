<script>
    import ProjectCard from './ProjectCard.svelte';
    let items = [
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
    ];
</script>

<section id="projects-body">
    <div class="container">
        <div class="card_outer">
            {#each items as item}
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
    #projects-body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
    }
    .container {
        width: 90%;
        max-width: 1260px;
        margin: 0 auto;
    }
    .card_outer {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 20px;
    }
</style>