//Pedimos al usuario la cantidad de golpes , comprobamos que no hay caracteres ingresados e inicializamos el array
let lucha=parseInt(prompt("Cuantos golpes desea que reciba su personaje?"))

while (isNaN(lucha)==true){
    alert("Ingreso un caracter no valido , solo se aceptan numeros")
    lucha=parseInt(prompt("Cuantos golpes desea que reciba su personaje? , intente nuevamente"))
}

let golpes_recibidos=[]

//Ciclo for para generar el nuevo array con los golpes de forma aleatoria 0 al 100
for (i=0; i<lucha ; i++) {
    golpes_recibidos.push([Math.floor(Math.random()*100)]);
}

//Determinar el valor maximo de un golpe en el array generado en el ciclo for
let golpe_maximo= Math.max.apply(null,golpes_recibidos);

//Muestra de resultados finales
alert(`El valor de cada golpe recibido es ${golpes_recibidos}`)
alert(`El valor del golpe maximo recibido es ${golpe_maximo}`)




