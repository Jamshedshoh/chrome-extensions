var jokeElement = document.getElementById("joke")

var randomElement = document.getElementById("random")

randomElement.addEventListener("click", (e) => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then((data) => {
            var divElement = document.createElement("div")
            divElement.classList.add("card")
            divElement.classList.add("m-3")

            var divCardHeaderElement = document.createElement("div")
            divCardHeaderElement.classList.add("card-header")
            divCardHeaderElement.classList.add("text-center")

            var imgElement = document.createElement("img")
            imgElement.classList.add("card-img-top")
            imgElement.src = data.icon_url
            imgElement.style.width = '50px';

            var divCardBodyElement = document.createElement("div")
            divCardBodyElement.classList.add("card-body")            

            var pElement = document.createElement("p")
            pElement.classList.add("card-text")
            pElement.innerText = data.value

            divCardHeaderElement.appendChild(imgElement)
            divCardBodyElement.appendChild(pElement)
            divElement.appendChild(divCardHeaderElement)
            divElement.appendChild(divCardBodyElement)
            jokeElement.insertBefore(divElement, jokeElement.firstChild);
        })
        .catch(error => console.error(error))
})
