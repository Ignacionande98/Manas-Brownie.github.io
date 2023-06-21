
const buscarSabores = ()=> {
    
    let arrayResultante = saboresPostres.filter((producto)=> producto.sabor.toLowerCase().includes(inputBuscar.value.trim().toLowerCase()))
    if (arrayResultante.length > 0) {
        cargarSabores(arrayResultante)
    }
}

const inputBuscar = document.querySelector("input#inputBuscar")

const container = document.getElementById("container")

inputBuscar.addEventListener("search", buscarSabores)

const armarCardHTML = (prod)=> {
    return `<div class="div-card">
                <div class="sabor">${prod.sabor}</div>
                <img class="img-sabores" src="${prod.imagen}" alt="">
                <div class="precio">$ ${prod.precio}</div>
                <div class="comprar"><button id="${prod.id}" class="button button-outline">Añadir</button></div>
            </div>`
}

const cargarSabores = (array)=> {
    container.innerHTML = ""
    array.forEach((producto) => {
        container.innerHTML += armarCardHTML(producto)
    })
    activarClickBotones()
}

const activarClickBotones = ()=> {
    const botonesAnadir = document.querySelectorAll("button.button.button-outline")
    for (let botonAnadir of botonesAnadir) {
        botonAnadir.addEventListener("click",()=> {
            let resultadoSabor = saboresPostres.find((prod)=> prod.id === parseInt(botonAnadir.id))
            carrito.push(resultadoSabor)
            guardarEnLocalStorage()
            mostrarMensaje("El sabor ha sido añadido al carrito")
        })
    }
}
            
cargarSabores(saboresPostres)
            
        












                 



                 




