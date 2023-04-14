//Inicializacion de variables
let dni=0
let detenerse=false

//Array de 23 letras
let array_number=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]

//Bucle
while (detenerse==false) {
    dni=prompt("Ingrese el DNI")
    if (isNaN(dni)==false && dni>=1 && dni<=99999999){
        alert(`La letra que corresponde a su Dni ${dni} es : ${array_number[dni%23]}`)
        detenerse=confirm("Desea salir")
    }else if (isNaN(dni)==true || dni<=0 || dni>99999999){
        alert("El DNI contiene letras o esta fuera del rango preestablecido")
        detenerse=confirm("Desea salir")
    }
}