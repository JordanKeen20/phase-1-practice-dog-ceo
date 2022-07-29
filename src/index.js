// console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function(){
    let dogImg = document.getElementById('dog-image-container') 
    let dogUL = document. querySelector('#dog-breeds')
    
    // challenge 1
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(function(jsonobj){
        let arrOfDogs = jsonobj.message;
        arrOfDogs.forEach(url => {
        dogImg.innerHTML += imageTagString(url)
        // also: dogImg.append(imgTagElement(url))
    })
    // challenge 1

    // challenge 2
    makeFetch()
    .then(response => {
        let dogLetters = Object.keys(response.message)
        dogLetters.forEach((breed) => {
            dogUL.innerHTML += `<li data-info='breed'>${breed}</li>`
        })
    })
    // challenge 2


    // challenge 3
    dogUL.addEventListener('click', (event) =>{
        if (event.target.dataset.info === 'breed'){
            event.target.style.color = 'blue'
        }
    })
    // challenge 3

    
    // challenge 4
    let dogSelect = document.getElementById('breed-dropdown')
    dogSelect.addEventListener('change',(event)=>{
        makeFetch()
        .then(res => {
            let dogLetters = Object.keys(res.message)
            
            let filteredArray = dogLetters.filter(breed => {
                return breed.startsWith(event.target.value)
            })
            dogUL.innerHTML = ""

            filteredArray.forEach((breed) => {
                dogUL.innerHTML += `<li data-info='breed'>${breed}</li>`
            })
        })
    })
    // challenge 4

})    
    

    // DOMContentLoaded
})
// challenge 1 info
function imageTagString(url){
    return `<img src='${url}'/>`
}

// function imageTagElement(url){
//     let imgTag = document.createElement('img')
//     imgTag.src = url
//     return imgTag
// }
function makeFetch(){
   return fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
}








