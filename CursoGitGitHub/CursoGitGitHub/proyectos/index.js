async function getData (){

    try {

        const response = await fetch("https://rickandmortyapi.com/api/character")

        const data = await response.json()

        data.results.forEach(element => {
            const article = document.createRange().createContextualFragment(`
            <article>
                <div class="imagecontainer">
                   <img src= "${element.image}"> </img>
                   </div>

                   <h2>
        
           
        `)
        });
 
       
    }
     catch (error) {

         console.log(`ha ocurrido un error ${error}`)
    }
}

getData()