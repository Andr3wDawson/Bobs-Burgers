const characterUrl = "https://bobsburgers-api.herokuapp.com/characters/"
let characterList = document.querySelector(".character__list")






async function getCharacter() {
    const character = await fetch("https://bobsburgers-api.herokuapp.com/characters/")
    const characterData = await character.json()
    // console.log(characterData)
    console.log(characterData[1].name)
    createCharacter(characterData)
    
}
getCharacter()





function createCharacter(characterData){
    
    for(let i = 0; i< 9; ++i){
        let randomNum =Math.floor(Math.random()* 400)
        console.log(randomNum)
    let figure = document.createElement("figure")
    figure.className = "character__wrapper"
     let img = document.createElement('img')
     img.className = "character__img"
     img.Id = randomNum
     img.setAttribute('src', characterData[randomNum].image)
    figure.appendChild(img)
    figure.addEventListener('click', screenClick)
    characterList.appendChild(figure)
    }

}



function screenClick(event){
    window.localStorage.setItem("userId",event.target.Id)
    console.log(event.target.Id)
    window.location.href = "character.html"
    
}

function searchByName(characterData){
    let userName = document.querySelector("input").value
    window.localStorage.setItem("theName", userName)
    window.location.href = "character.html"

}
