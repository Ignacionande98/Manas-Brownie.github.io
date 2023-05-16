
alert("Bienvenido a Tirana Importados👌, Tienda de ropa importada 👕👖")

function ingresar(){
    let usuario = parseFloat(prompt("Ingresar nombre de usuario"))
    let passwd = prompt("Ingresar contraseña")

    if (usuario === "" || passwd ==="") {
        alert("Nombre de usuario o contraseña incorrectos ⛔, por favor intente nuevamente")
    } else {
        alert("Bienvenido ✅ " + usuario)
    }
}
ingresar()


alert("Tenemos los siguientes articulos disponibles")
let articulosDisponibles = alert("1-remera 👕, 2-calzado 👟, 3-camisa 👚, 4-abrigo 🧥")



function preciosTienda() {
    let precios = prompt("Elija el nombre de articulo para saber su precio:")

    switch (precios) {
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
            alert("No tenemos disponible un articulo llamado " + precios)
            break;
    }

}
preciosTienda()

function articulosDescuentos() {
    let nroLimite = parseInt(prompt("Ingresa un numero de articulo para ver si tiene descuentos:"))
     for (let i = 0; i <= 4; i++) {
        if(nroLimite === 1 || nroLimite === 2 || nroLimite === 3 || nroLimite === 4){
            alert("El articulo elegido tiene descuentos ✅")
            break
        }else {
            alert("No tenemos stock al momento")
        } break
 }
}
 articulosDescuentos() 

