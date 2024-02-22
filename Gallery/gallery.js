const visualizador = document.getElementById("visualizador")
const retroceder = document.getElementById("retroceder")
const adelantar = document.getElementById("adelantar")


const fotos = ["img/siracusa1.jpeg", "img/siracusa2.jpeg", "img/siracusa3.jpeg", "img/siracusa4.jpeg"];

let index = 0
let ultimo = fotos.length-1
    visualizador.src=fotos[0]

function retrocerderfotos() {
    if(index > 0){
        index = index - 1 
    }
    else{
        index = ultimo
    }
    console.log(fotos.length)
    visualizador.src=fotos[index]
}

function adelantarfotos() {
    if(index < ultimo){
        index = index + 1 
    }
    else{
        index = 0
    }
    visualizador.src=fotos[index]
}

    retroceder.addEventListener("click", retrocerderfotos)
    adelantar.addEventListener("click", adelantarfotos)   
