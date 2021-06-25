<script>
    import { onMount } from 'svelte';

    let active;
    onMount(async () => {
        active = false;
    });

</script>

<style>
    section{
        background-color: #8c92ac;
    }

    .title{
        color: rgb(252, 252, 252);
    }

    form{
        background: #EBEBEB;
        text-align: center; 
        box-shadow: 0px 0px 20px 5px #AAA; 
        border-radius: 10px;  
        width: 45%; 
        height: 400px;
        margin: 30px auto 0 auto;
        padding: 10px 10px;  
        animation: bounce 1.5s infinite;
    }

    .name { 
        border-bottom: 5px solid #B2175F;
    }

    ::-webkit-input-placeholder{
        color: black;
        font-size: 20px;
        font-weight: 700;
    }

    :hover::-webkit-input-placeholder{
        color: white;
        font-size: 20px;
        font-weight: 700;
    }
    .name:hover{
        background-color: black;
        border-bottom: 5px solid #B2175F;
        /*height:33px;*/
        width:75%;
    }

    .email {
        border-bottom: 5px solid #502789;
        
    }
    .email:hover{
        background-color: black;  
        border-bottom: 5px solid #502789;
        height:42px;
        width:75%;
    
    }
    .message {   
        border-bottom: 5px solid rgb(195, 35, 17);
    }

    .message:hover{
        background-color: black;
        border-bottom: 5px solid #2BB09A;
        height: 100px;
        width:70%;
    }

    .submit{
        border-radius:5px;
        padding:10px;
        /*width:150px;*/
        color: black;
        font-weight: 700;
        background-color: #EE78D1;  
        border: none;
        border-bottom: 5px solid #CB64B2; 
        margin-top: 150px; 

    }

    #submitBtn{
        width: 30.75%;
        color: black;
    }

    .submit:hover{
        border-bottom: 5px solid #CB64B2;  
        box-shadow: 15px 15px 15px 5px rgba(78, 72, 77, 0.219);
    }

    .entry{
        display: block;
        margin: 30px auto;
        padding: 10px;
        border-radius: 5px;
        border: none;
        transition: all 0.5s ease 0s;
        box-shadow: 0px 0px 25px 2px #AAA;  
        background-color: #8c92ac;
        width: 61.5%;
        color: white;
    }

    /* Shadow to make it look like form is floating  */
    .shadow{
        box-shadow: 0px 0px 60px 5px #AAA;
        opacity: 0.5;
        border-radius: 100px;
        width: 50%; 
        margin: 50px auto 0 auto;
        padding: 0 20px;  
        animation: shadow 1.5s infinite;
    }

    @keyframes bounce{
        0%{
        }
        50%{
            transform: translate(0, 8px);
        }
    }
    @keyframes shadow{
        0%{
        }
        50%{
            opacity: 0.8;
            width: 50%;
        }
    }

    @media all and (max-width: 1024px){
        form{
            width: 55%;
        }
    }

    @media all and (max-width: 800px){
        form{
            width: 70%;
        }
    }

    @media all and (max-width: 600px){
        form{
            width: 100%;
        }
    }

    @media (min-width: 700px){
        #container{
            width: 83%;
        }
    }
</style>


<svelte:head>
	<title>Contact Ralph J Gorham</title>
    <meta name="description" content="Form to contact Ralph Jarrod Gorham"/>
</svelte:head>

<section class="w-full min-h-full text-center">
    <div id="container" class="p-5 h-auto mx-12">
        <h1 class="font-ubuntu mt-10 text-6.5xl">Contact</h1>
        <h2>Want to get in touch with me?</h2>
        <article class="flex flex-col justify-items-center">
            <div class="title mx-auto w-1/2 text-center pb-10px text-42px"></div>
            <form class="text-center p-2.5"
                action="https://formspree.io/mgenodgy"
                method="POST">

                <input type="text" class="name entry" placeholder="Name" name="_name"/>

                <input type="text" class="email entry text-white h-50px" placeholder="Email" name="_replyto"/>

                <textarea class="message entry overflow-hidden text-white h-100px" placeholder="Message" name="message"></textarea> 

                <button type="submit" id="submitBtn" class="submit entry p-10px mt-150px" onclick="thanks()">Send</button>
            
            </form>

            <div class="shadow "></div>
        </article>
    </div>
    
</section>