function listarAlfajor() {
    console.table(productos)
} 
function listarAlfajor() {
    
    productos.forEach( (producto)=> { 
        console.log(producto.nombre)
    });
}

function buscarAlfajor() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
        debugger
        let resultado = productos.find((producto)=> producto.nombre.includes(aBuscar)) 
        if (resultado !== undefined) {
            console.clear()
            console.table(resultado)
        }
}
      
function filtrarAlfajor() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
    let resultado = productos.filter((producto)=> producto.nombre.includes(aBuscar))
        if (resultado !== undefined) {
            console.clear()
            console.table(resultado)
        }
}


 function iniciarCompra() {
     console.clear()

let username = prompt("Ingrese su nombre de usuario").toUpperCase()

let age = parseInt(prompt("Ingrese su edad"))


if  (age >= "18"){
   
 
     console.log("Bienvenido", username)
     let alfajor = prompt("Ingresar el alfajor deseado: ").toUpperCase()
     let cantidad = prompt("Ingrese la cantidad deseada")
     let ticketFinal = realizarCalculo (alfajor, cantidad, IVA)
        console.log("Su ticket final es de $", ticketFinal * IVA, " (IVA incluido)")
    
    
     function realizarCalculo(alfajor, cantidad, IVA) {
        let JORGITO = 12
        let GUAYMALLEN = 9
        let AGUILA = 13
        let BLOCK = 11
        let COFFLER = 15
        let BONOBON = 14
        let TOFFI = 12
        let JORGELIN = 16

    switch (alfajor) {
        case "JORGITO":
            alert("El Jorgito cuesta $12 + IVA c/u")
            return parseInt(JORGITO) * parseInt(cantidad)
        case "GUAYMALLEN":
            alert("El Guaymallen cuesta $9 + IVA c/u")
            return parseInt(GUAYMALLEN) * parseInt(cantidad)
        case "AGUILA":
            alert("El Aguila cuesta $13 + IVA c/u")
            return parseInt(AGUILA) * parseInt(cantidad) * parseInt(IVA)
        case "BLOCK":
            alert("El Block cuesta $11 + IVA c/u")
            return parseInt(BLOCK) * parseInt(cantidad)
        case "COFFLER":
            alert("El Coffler cuesta $15 + IVA c/u")
            return parseInt(COFFLER) * parseInt(cantidad)
         case "BONOBON":
            alert("El Bonobon cuesta $14 + IVA c/u")
            return parseInt(BONOBON) * parseInt(cantidad)
        case "TOFFI":
            alert("El Toffi cuesta $12 + IVA c/u")
            return parseInt(TOFFI) * parseInt(cantidad)
        case "JORGELIN":
            alert("El JorgelEl cuesta $16 + IVA c/u")
            return parseInt(JORGELIN) * parseInt(cantidad)

        default:
            alert("No tenemos ese alfajor, te pedimos disculpas 😩")
            break;
    }
}
     
}  else  {
    alert("No puede ingresar, vuelva con uno de sus padres.")
} 
 }
function generadorAutomatico() {
    productos.push(new Producto(1, "JORGITO", 12))
    productos.push(new Producto(2, "GUAYMALLEN", 9))
    productos.push(new Producto(3, "AGUILA", 13))
    productos.push(new Producto(4, "BLOCK", 11))
    productos.push(new Producto(5, "COFFLER", 15))
    productos.push(new Producto(6, "BONOBON", 14))
    productos.push(new Producto(7, "TOFFI", 12))
    productos.push(new Producto(8, "JORGELIN", 16))
}
generadorAutomatico()
