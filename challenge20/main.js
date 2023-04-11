let numeroUsuario = parseInt(prompt(`Ingrese un numero`));
let listaNumeros = [];
let suma = 0;

for (i=0; i<=numeroUsuario; i++) {
    let numero = parseInt(prompt("ingrese los numeros"))
    listaNumeros.push(numero)
    suma += numero;
}

let mayor = Math.max.apply(null,listaNumeros);

let menor = Math.min.apply(null,listaNumeros);

let media = suma / numeroUsuario;

console.log(`el mayor es ${mayor} el menor es ${menor} la media es ${media}` )