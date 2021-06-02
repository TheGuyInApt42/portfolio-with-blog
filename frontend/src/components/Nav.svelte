<script>
    let active = false;

    export let segment;

    const toggler = () =>{
        active = !active;
        let items = document.getElementsByClassName('item');
        for(var i=0; i<items.length;++i){
            items[i].classList.toggle('active');
        }
    
    }

</script>

<style>
    .logo-container:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: all .2s linear;
    }

    .initial-logo:hover{
        border-left: 1px solid black;
    }

    .initial-logo{
        border: 1px solid white;
        height: 36px;
        width: 36px;
        display: flex;
        transition: all .2s linear;
        align-items: center;
        justify-content: center;
        letter-spacing: 1px;
        line-height: 1;
        font-size: 14px;
        text-align: center;
        
    }

    [aria-current]::after {
		position: absolute;
		content: '';
		width: 30%;
        left: 33%;
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -5px;
	}

.logo a:hover {
    text-decoration: none;
}
.menu li {
    font-size: 16px;
    padding: 15px 5px;
    white-space: nowrap;
}

/* Mobile menu */
.menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
.toggle {
    order: 1;
}

.item {
    width: 100%;
    text-align: center;
    order: 3;
    display: none;
}
:global(.item.active) {
    display: block !important;
}




/* Tablet menu */
@media all and (min-width: 600px) {
    .menu {
        justify-content: center;
    }
    .logo {
        flex: 1;
    }
    .toggle {
        flex: 1;
        text-align: right;
    }
    .toggle {
        order: 2;
    }
   
}

/* Desktop menu */
@media all and (min-width: 900px) {
    .item {
        display: block;
        width: auto;
    }
    .toggle {
        display: none;
    }
    .logo {
        order: 0;
    }
    .item {
        order: 1;
    }
    .menu li {
        padding: 15px 10px;
    }

    [aria-current]::after {
		width: 40px;
        left: 0;

	
	}
}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	[aria-current] {
		position: relative;
	
	}

</style>



<nav class="py-5px bg-nav-dark px-5">
    <ul class="menu flex items-center justify-between flex-wrap">
        <li class="logo">
            <a  href="." class="logo-container text-xl flex font-medium h-9 w-72px text-white" on:click={toggler}>
                <div class="initial-logo">R</div>
                <div class="initial-logo">G</div>
            </a>
        </li>
        <li class="item"><a class="nav-a" aria-current="{segment === 'about' ? 'page' : undefined}" href="about" on:click={toggler}>About</a></li>
        <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->

		<!--<li class="item"><a class="nav-a" rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog" on:click={toggler}>Blog</a></li> -->
        <li class="item"><a class="nav-a" aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects" on:click={toggler}>Projects</a></li>
        <li class="item"><a class="nav-a" aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact" on:click={toggler}>Contact</a></li>
        
        <li class="toggle text-white text-xl" on:click={toggler}>
            {#if active}
                <i class='fas fa-times'></i>
                
            {:else}
                <i class="fas fa-bars"></i>
                
            {/if}
           
        </li>
    </ul>
</nav>