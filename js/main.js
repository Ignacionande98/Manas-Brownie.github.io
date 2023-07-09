let productos = []

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos)
    })

const contenedorSabores = document.querySelector("#contenedor-productos")
const botonesDeFiltrar = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregarProductos = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")

function cargarProductos(productosElegidos) {

    contenedorSabores.innerHTML = ""

    productosElegidos.forEach(producto => {

        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorSabores.append(div)
    })

    actualizarBotones()
}

botonesDeFiltrar.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesDeFiltrar.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton)
        } else {
            tituloPrincipal.innerText = "Sabores:"
            cargarProductos(productos)
        }

    })
})

function actualizarBotones() {
    botonesAgregarProductos = document.querySelectorAll(".producto-agregar")

    botonesAgregarProductos.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}


let carrito = localStorage.getItem("mi-carrito") ? JSON.parse(localStorage.getItem("mi-carrito")) : []
if (localStorage.getItem("mi-carrito")) actualizarNumerito()


function agregarAlCarrito(e) {

    Toastify({
        text: "Sabor agregado al carrito",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "black",
          borderRadius: "2rem",
          
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', 
            y: '1.5rem' 
          },
        onClick: function(){} 
      }).showToast()

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    if(carrito.some(producto => producto.id === idBoton)) {
        const index = carrito.findIndex(producto => producto.id === idBoton)
        carrito[index].cantidad++
    } else {
        productoAgregado.cantidad = 1
        carrito.push(productoAgregado)
    }

    actualizarNumerito()

    localStorage.setItem("mi-carrito", JSON.stringify(carrito))
}

function actualizarNumerito() {
    let nuevoNumerito = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito
}




