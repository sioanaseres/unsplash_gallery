"use script"

const imgContainer = document.querySelector(".container");

const key  = "27WFvN9IJadM_FhD1otnBUKgolsshIm1sAKW4LVr6wI";
const url = "https://api.unsplash.com"

const displayImages = function(data){

    data.forEach( function(card){
    
        const html = `
        <div class="card">
            <img src= "${card.urls.thumb}"/>
            <div class="description">
                <h3>Author: ${card.user.name}</h3>
            </div>
        </div>
    
        `
           
        imgContainer.insertAdjacentHTML("beforeend", html)
    })
  
}

const getData = async function(){
    try{
        const response = await fetch(`${url}/search/photos?client_id=${key}&per_page=30&query=nature&orientation=portrait`);
        if(!response) throw new Error(`Could not get data ${response.status}`);
        const data = await response.json();

        console.log(data.results )
        displayImages(data.results);
    } catch(err){
        console.error(`Could not display images ${err}`)
    }
 
}

getData();

