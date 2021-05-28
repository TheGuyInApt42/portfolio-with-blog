
<style>
	video {
        background: rgba(0, 0, 0, 0.50);
    }

    h2 {
        font-family: Century Schoolbook, Georgia, serif;
        /*margin: 2rem 3rem 0;
        mix-blend-mode: overlay;*/
    }

    #about-button:hover{
        border: none;
    }

    @keyframes slide{
        0%   { opacity: 0; }
        10%  { opacity: 1; }
        30%  { opacity: 1; }
        60%  { opacity: 0; }
        100% { opacity: 0; }
    }

	#slide_overlay{
        background: #203D7c;
    }

    @media screen and (max-width: 1130px){
        section{
            background-color: #203D7c;
        }
    }
</style>

<svelte:head>
	<title>Ralph J Gorham Web Developer</title>
    <meta name="description" content="The homepage of Ralph Jarrod Gorham, a web 
    developer based in NY. Enter here to learn more about the life and times of 
    Ralph Jarrod Gorham."/>
</svelte:head>


<section class="w-full h-full relative">
    <div id="content-wrapper" class="absolute top-1/2 left-1/2 text-white flex items-center justify-center flex-col z-3 transform-gpu -translate-x-1/2 -translate-y-1/2">
        <h1 class="text-5xl m-0 below-lg:text-3.5xl font-ubuntu">Hey, Ralph Gorham here!</h1>
        <h2 class="text-white below-lg:text-xl font-oswald my-5 text-2xl">I am a Full Stack Web Developer based in Mount Vernon, NY. </h2>
        <a id="about-button" class="text-white px-8 border border-solid border-white bg-transparent text-center no-underline inline-block text-base py-15px mt-25px" href="/about">More About Me</a>
    </div>

    <div>
        <video autoplay muted loop
        src="/vid.mp4" class="absolute top-0 left-0 w-full h-full object-cover object-center below-lg:hidden"
        ></video>
        <div id="slide_overlay" class="h-full w-full absolute top-0 left-0 z-2 opacity-80 mix-blend-multiply">
        </div>
    </div>
</section>









