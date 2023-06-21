const saboresPostres = [{imagen:"./images/rockle.jpg" ,id: 1, sabor: "Rockle", precio: 699,} ,
                {imagen:"./images/alfajr-art.jpg" ,id: 2, sabor:"Alfajor", precio: 1200,}, 
                {imagen:"./images/pasta-frola.jpg" ,id: 3, sabor:"Pastafrola", precio: 3000,} ,
                {imagen:"./images/mouse-choco.jpg" ,id: 4, sabor:"Mouse choco", precio: 4500,} , 
                {imagen:"./images/ricardito.jpg" ,id: 5, sabor:"Ricarditos", precio: 600,} , 
                {imagen:"./images/torta-coco.jpg" ,id: 6, sabor:"Torta coco", precio: 900,} ,
                {imagen:"./images/brownie-merengue.jpg" ,id: 7, sabor:"Merengue", precio: 400,} ,
                {imagen:"./images/manas-tematico.jpg" ,id: 8, sabor:"Halloween", precio: 400,} ,
                {imagen:"./images/huevooreo.jpg" ,id: 9, sabor:"Huevo oreo", precio: 400,}
] 

const guardarEnLocalStorage = ()=> {
    if (carrito.length > 0) {
        localStorage.setItem("Tienda", JSON.stringify(carrito))
    }
}

const recuperarCarritoDeLocalStorage = ()=> {
    if (localStorage.getItem("Tienda")) {
        return JSON.parse(localStorage.getItem("Tienda"))
    } else {
        return []
    }
    
}
 
const carrito = recuperarCarritoDeLocalStorage() 

const mostrarMensaje = (msg)=> {
    const divMsg = document.querySelector("div.div-msg")
    divMsg.textContent = msg || ""
}


        