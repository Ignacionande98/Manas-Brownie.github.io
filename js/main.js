
alert("Bienvenido a Tirana Importados👌, Tienda de ropa importada 👕👖")

function ingresar(){
    let usuario = prompt("Ingresar nombre de usuario")
    let passwd = prompt("Ingresar contraseña")

    if (usuario.trim() === "" || passwd ==="") {
        alert("Nombre de usuario o contraseña incorrectos ⛔, por favor intente nuevamente")
    } else {
        alert("Bienvenido ✅ " + usuario)
    }
}
ingresar()


function preciosTienda() {
    let precios = prompt("Elija un articulo para saber su precio:")

    switch (precios.toLowerCase().trim()) {
        case "remera":
            alert("Precio final de UY$ 900 para el articulo : " + precios)
            break; 
        case "calzado":
            alert("Precio final de UY$ 2500 para el articulo : " + precios)
            break;
        case "camisa":
            alert("Precio final de UY$ 1200 para el articulo : " + precios)
            break;
        case "abrigo":
            alert("Precio final de UY$ 3000 para el articulo : " + precios)
            break
        default:
            alert("No tenemos un producto llamado " + precios)
            break;
    }

}
preciosTienda()




