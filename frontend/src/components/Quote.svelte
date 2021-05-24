<script>
    import { onMount } from 'svelte';

    let data = {};
    //data.text = 'Loading';
    //data.reference = 'Loading';

    const VERSES = [
        `PSA%2078:35`,
        `PSA%2042:9`,
        `PSA%2018:31`,
        `ISA%2044:8`,
        `PSA%20144:1`,
        `GEN%2049:24`,
        `2SAM%2023:3`,
        `ISA%2030:29`,
        `DEU%2032:15`,
        `HAB%201:12`,
        `1SA%202:2`,
        `DEU%2032:31`,
        `DEU%2032:37`,

    ];

    const verseIndex = Math.floor(Math.random() * VERSES.length);
    const verseID = VERSES[verseIndex];


    const techy_quote_api = `http://quotes.stormconsultancy.co.uk/random.json`;
    const random_quote_api = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';
    const random_quote_endpoint = 'https://api.quotable.io/random';
    
    onMount(async function() {
        const response = await fetch(random_quote_endpoint);
        const json = await response.json();
        data = json;
    });

</script>

<div id="quote">
    <div id="quote-container">
        {#if data}
            <p id="quote-content" class="my-4">
            {data.content}
        </p>
        <p id="quote-author">
            {data.author}
        </p>
        {:else}
            <p>Loading.....</p>
        {/if}
    </div>      
</div>