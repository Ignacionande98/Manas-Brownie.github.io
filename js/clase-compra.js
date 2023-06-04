class Comprar {
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }
    obtenerTotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acc, gusto)=> acc + gusto.precio, 0)
        }
    }
}