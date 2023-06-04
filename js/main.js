const carrito = []

const gustos = [{codigo: 1, sabor: "Brownie clasico", precio: 699,} , 
                {codigo: 2, sabor:"Brownie nutella", precio: 1200,}, 
                {codigo: 3, sabor:"Carrot cake", precio: 3000,} , 
                {codigo: 4, sabor:"Rogel", precio: 4500,} , 
                {codigo: 5, sabor:"Lemon pie", precio: 600,} , 
                {codigo: 6, sabor:"Tarta frutal", precio: 900,}]

function buscarSabores(codigo) {
    const resultado = gustos.find((gusto)=> gusto.codigo === parseInt(codigo))
    return resultado
}

function compraFinalizada() {
    const compras = new Comprar(carrito)
    alert("El costo es de $ " + compras.obtenerTotal())
    alert("Muchas gracias por tu compra ✅😊")
}

function comprar() {
    let codigo = prompt("Ingresa el codigo de tu sabor preferido (1-2-3-4-5-6)")
    let saborSeleccionado = buscarSabores(codigo)
    if (saborSeleccionado !== undefined) {
        carrito.push(saborSeleccionado)
        alert("El sabor ha sido añadido a su carrito ✅")
        let otroSabor = confirm("¿Desea seguir comprando?")
        if(otroSabor === true) {
            comprar()
        } else {
            compraFinalizada()
        }
    }
}

comprar()
    



                 

                 



                 




