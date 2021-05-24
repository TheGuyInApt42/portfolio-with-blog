<script>
    export let photo;
    export let title; 
    export let desc;
    export let link;
    export let tools;
</script>


<article class="project">
    <div class="thumbnail">
        <a href="{link}" target="_blank" rel="noopener noreferrer">
            <img src={photo} alt=""/> 
        </a>
    </div>

    <div class="project-info">
        <h2 class="project-title"><a href="{link}" target="_blank" rel="noopener noreferrer">
            {title}</a>
        </h2>
        <p class="project-description">{desc}</p>
        <p class="project-tools">{tools}</p>
    
    </div>


</article>


<style>
    .project{
    width: 100%;
    height: auto;
    margin-bottom: 100px;
  }

  .thumbnail{
      grid-area: thumb;
  }

  .project-info{
      grid-area: info;

  }

  img{
      width: 200px;
      height: 200px;
      border-radius: 10%;
  }

  .project-tools{
      font-weight: 700;
      
  }

  h2{
      font-size: 1.75em;
  }

  a{
      color: black;
  }

p{
    font-size: 1.25em;
}

@media (min-width: 675px){
.project{
    display: grid;
    grid-template-columns: 200px 20px 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        "thumb . info";
  }
}



</style>