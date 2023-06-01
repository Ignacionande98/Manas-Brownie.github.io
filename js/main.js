
alert("Bienvenido a Tirana Importados👌, Tienda de ropa importada 👕👖")

function ingresar(){
    let usuario = prompt("Ingresar nombre de usuario")
    let passwd = prompt("Ingresar contraseña")

    if (usuario === "" || passwd ==="") {
        alert("Nombre de usuario o contraseña incorrectos ⛔, por favor intente nuevamente")
        
    } else {
        alert("Bienvenido ✅ " + usuario)
    }
}
ingresar()

alert("Tenemos los siguientes articulos disponibles :")
let articulosDisponibles = alert("1-remera, 2-pantalon, 3-calzado, 4-campera, 5-musculosa, 6-short")

function preciosTienda() {
    let precios = prompt("Elija el nombre de articulo para saber su precio:")

    switch (precios.toLowerCase().trim()) {
        case "remera":
            alert("Precio final de UY$ 900 para el articulo : " + precios)
            break
        case "pantalon":
            alert("Precio final de UY$ 1200 para el articulo : " + precios)
            break
        case "calzado":
            alert("Precio final de UY$ 3000 para el articulo : " + precios)
            break
        case "campera":
            alert("Precio final de UY$ 4500 para el articulo : " + precios)
            break
         case "musculosa":
            alert("Precio final de UY$ 600 para el articulo : " + precios)
            break
         case "short":
            alert("Precio final de UY$ 900 para el articulo : " + precios)
            break
        default:
            alert("No tenemos disponible un articulo llamado " + precios)
            break
    }

}
preciosTienda()

function articulosDescuentos() {
    let nroLimite = parseInt(prompt("Ingresa un numero de articulo para ver si tiene descuentos:"))
     for (let i = 0; i <= 4; i++) {
        if(nroLimite === 1 || nroLimite === 2 || nroLimite === 3 || nroLimite === 4 || nroLimite === 5 || nroLimite ===6){
            alert("El articulo elegido tiene descuentos ✅")
            break
        }else {
            alert("No tenemos stock de ese articulo al momento")
        } break
 }
}
 articulosDescuentos() 




const prendas = [{codigo: 1, catalogo: "Remera", precio: 699,} , 
                 {codigo: 2, catalogo:"Pantalon", precio: 1200,}, 
                 {codigo: 3, catalogo:"Calzado", precio: 3000,} , 
                 {codigo: 4, catalogo:"Campera", precio: 4500,} , 
                 {codigo: 5, catalogo:"Musculosa", precio: 600,} , 
                 {codigo: 6, catalogo:"Short", precio: 900,}]
                 

                 



                 




