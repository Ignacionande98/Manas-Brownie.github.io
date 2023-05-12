function ingresar(){
    let usuario = prompt("Ingresar nombre de usuario")
    let passwd = prompt("Ingresar contraseña")

    if (usuario.trim() === "" || passwd ==="") {
        alert("Nombre de usuario o contraseña incorrectos, por favor intente nuevamente")
    } else {
        alert("Bienvenido " + usuario)
    }
}
ingresar()

