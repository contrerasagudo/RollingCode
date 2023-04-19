//CREACION DE VARIABLES
let numeros = []
let num_user=undefined


//Bucle infinito hasta que se interrumpa por la linea nº12 (gracias san google)
//En la linea 14 uso la funcion trim para que no me tome los espacion vacios o que sean letras 
//Tenia el problema que los espacios vacios me los tomaba como un cero en el array
while (true) {
    num_user = prompt("Ingresa los numeros o presione en cancelar si quiere salir");

    if (num_user === null) { 
        break; 
    } else if (num_user.trim() === '' || isNaN(num_user)) { 
        alert("Usted no ingreso un numero valido , intente nuevamente o presione cancelar si quiere salir"); 
    } else {
        numeros.push(Number(num_user)); 
    }
}


//Muestra del resultado final 
//Se usa el metodo join para concatener las cadenas del array y usar como separados los guinoes
if (numeros.length > 0) { 
    alert("Lista Final : " + numeros.join('--')); 
    alert("Gracias por utilizar nuestro inutil pero eficiente Servicio")
} else {
    alert("Usted no ingreson ningun numero"); 
}
