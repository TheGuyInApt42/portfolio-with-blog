<script>
    //import Cards from '../components/Cards.svelte';
    import Quote from '../../components/Quote.svelte';
    import { skills, interests} from './_utils.js'
</script>


<style>
    #background-wrapper{
        background: #444;
    }

    li::before{
        content: '👍🏿';
        margin-left: -20px;
        margin-right: 10px;
    }

    @media (min-width: 700px){
        #container{
            width: 83%;
        }
    }
</style>



<svelte:head>
	<title>About Ralph J Gorham</title>
    <meta name="description" content="Get more information about Ralph Jarrod Gorham"/>
</svelte:head>

<div id="background-wrapper" class="w-full min-h-full">
    <div id="container" class="h-auto mx-12 text-white p-5 my-md:w-5/6">
        <h1 class="text-center md:text-6.5xl my-10 font-ubuntu text-5xl">My Story</h1>

        <div id="content" class="pl-5%">
            
            <p class="my-4">I am <strong>Ralph Gorham</strong> , a full stack web developer with experience working with vanilla Javascript and PHP as well as Javascript 
            frameworks/libraries such as React, Svelte and Meteor. I have a B.A. in History from Duke and a M.S. in Computer Science with distinction 
            in Cyber-Security from Iona. Currently, I work as a Front End Developer in NYC with a great team at <a id="touroLink" class="text-white underline" href="https://www.touro.edu"><strong>Touro College</strong></a> in the Web Services department.</p>
            <p class="my-4">I live in <strong>Mount Vernon, New York</strong> with my wife, Julie. </p>
            <p class="my-4">I am open to freelance work.</p>


            <h2 class="text-3.5xl my-7">Interests</h2>
            <ul id="interests-list" class="list-none my-4 pl-10 font-oswald">
                <li>Travel</li>
                <li>Food/Cooking</li>
                <li>Xbox -> <a href="https://twitch.tv/jarrodtank" target="_blank" rel="noopener">Twitch Account</a></li>
                <li>Brazilian Jiu-Jitsu</li>
                <li>Coding/Tinkering</li>
                <li>Duke Basketball</li>
                <li>Sports</li>
                <li>Concerts</li>
            </ul>

            <!--
            <h2>Expertise</h2>
            <Cards items={skills}/>
            -->

            <!--
            <h2>Archives</h2>

            <a id="archive-link" aria-label="Archive Link" href="ralphjgorham.com">The OG 2018/2019</a>
            -->

            
            <div id="quote-section">
                <Quote/>
            </div>
        </div>

    </div>

</div>