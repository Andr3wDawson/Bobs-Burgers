const id = window.localStorage.getItem("userId")
const theName = window.localStorage.getItem("theName")
const character = window.localStorage.getItem("character")

let headerBody = document.querySelector(".header__body")
console.log(headerBody)

async function characterInfo(){
    const character = await fetch("https://bobsburgers-api.herokuapp.com/characters/")
    const characterData = await character.json()
    console.log(characterData[id])
    headerBody.innerHTML= characterHTML(characterData, id)
    
}




function characterHTML(characterData,id) {
   return ` <h1 class="header__body--title">${characterData[id].name}</h1>
    <figure class="user__img--wrapper">
        <img src="${characterData[id].image}" alt="" class="user__img">
    </figure>
    <div class="user__para--wrapper">
    <p class="user__para">Gender: ${characterData[id].gender}</p>
    <p class="user__para">Occupation: ${characterData[id].occupation}</p>
    <p class="user__para">Voiced By: ${characterData[id].voicedBy}</p>
    <p class="user__para">First Episode: ${characterData[id].firstEpisode}</p>
    </div>
    `
}
characterInfo()


function userHTML(characterData, theName){
    return ` <h1 class="header__body--title">${characterData[id].name}</h1>
    <figure class="user__img--wrapper">
        <img src="${characterData[id].image}" alt="" class="user__img">
    </figure>
    <div class="user__para--wrapper">
    <p class="user__para">Gender: ${characterData[id].gender}</p>
    <p class="user__para">Occupation: ${characterData[id].occupation}</p>
    <p class="user__para">Voiced By: ${characterData[id].voicedBy}</p>
    <p class="user__para">First Episode: ${characterData[id].firstEpisode}</p>
    </div>
    `  
}


