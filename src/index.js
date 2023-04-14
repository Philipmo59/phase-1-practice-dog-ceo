// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const dropDown = document.getElementById("breed-dropdown")


document.addEventListener("DOMContentLoaded", fetch(imgUrl)
   .then(response => response.json())
   .then(data => {
    for (let img of data['message']){
        const image = document.createElement("img");
        image.src = img
        document.body.appendChild(image)
    }
   })
)

document.addEventListener("DOMContentLoaded", fetch(breedUrl)
   .then(response => response.json())
   .then(data => {
    const ul = document.createElement("ul")
    for (let breed in data["message"]){
        const li = document.createElement("li");
        li.innerText = breed
        ul.appendChild(li)
        li.addEventListener("click",()=> li.style.color = "yellow")
    }
    document.body.appendChild(ul)
   })
)
dropDown.addEventListener("input",() => {
    let value = dropDown.value;
    let text = dropDown.options[dropDown.selectedIndex].text;
    console.log(text)
    let breeds = document.getElementsByTagName("li")
    for(let dog of breeds){
        if (dog.innerText[0] != text){
            dog.style.display= "none"
        } 
        else{
            dog.style.display = "block"
        }
       if(text == ""){
            dog.style.display = "block"
        }
}
}
)