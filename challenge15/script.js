//Ejercicio N° 1

let num1=prompt("Ingrese el primer numero");
let num2=prompt("Ingrese el segundo numero");

document.write(`La Resta de los numeros ingresados es : ${num1-num2} y la Multiplicacion es : ${num1*num2}`)




//Ejercicio N° 2
//La funcion "toLowerCase" para evitar que si el user pone algun caracter en mayuscula no lo lea.

let nombre=prompt("Ingrese el nombre").toLowerCase();
let apellido=prompt("Ingrese el apellido").toLowerCase();


document.write(`<br> Contiene los caracteres indicados ("a" y "m") en el Nombre? ${nombre.includes("a" && "m")}`)
document.write(`<br> Contiene los caracteres indicados ("a" y "m") en el Apellido? ${apellido.includes("a" && "m")}`)




//Ejercicio N°3

let texto=("Pablito-clavo-un-clavito")

document.write(`<br> ${texto.replaceAll("-" ," ")}`)





