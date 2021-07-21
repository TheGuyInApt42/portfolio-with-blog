<script>
    export let numberPages = 1;
    export let page = 1;
    export let hasMore;
    let current_page = 1;


    function range(start,stop,step) {
        if (stop == null) {
            stop  = start;
            start = 0;
        }
        if (!step) {
            step = 1;
        }
        const len = (stop - start) / step;
        return new Proxy({length: len}, {
            get: (t, prop) => { 
                return prop === 'length' ? t.length : 
                            prop < t.length   ? start + (prop * step) : undefined;
            }
        });	
    }

    function changePage(page) {
        current_page = page;
        console.log(page, current_page);
        //if (page !== current_page) {
            //dispatch('change', page);
        //}
    }
</script>


<style>
    .pagination {
        display: inline-block;
    }

    .pagination a {
    color: white;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    }

    :global(.pagination a.active) {
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
    }

    /*
    .pagination a:hover:not(.active) {
    background-color: #ddd;
    border-radius: 5px;
    }
    */

    .pagination a:hover{
        text-decoration: underline;
    }
</style>


<div class="pagination">
    {#if numberPages > 1}
        {#if page > 1}
            <a href="/blog?page={page-1}" on:click="{() => changePage(current_page - 1)}">
                <span>&#129060</span> Newer Posts
            </a>
        {/if}

        <!--
        {#each range(numberPages) as item}
            <a href="/blog?page={item +1}" class="{page === current_page ? 'active': ''}" on:click="{() => changePage(page)}">
                {item + 1}
            </a>
        {/each}
        -->
        {#if hasMore}
            <a href="/blog?page={page+1}" on:click="{() => changePage(current_page + 1)}">
                <span>&#129062</span> Older Posts
            </a>
        {/if}
    {/if}
</div>