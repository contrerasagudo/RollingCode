//Se pide al usuario que ingrese las RPMS//
let rpm=parseInt(prompt("Ingrese el rango de Revoluciones "));


//Se comprueba que los caracteres ingresados solo sean numeros para entrar en los condicionales de marchas
if (isNaN(rpm)==true){
    console.log("Usted no ingreso un numero valido ,  intente nuevamente ");
}else if(isNaN(rpm)==false){
    if (rpm<1000){
        console.log("Usted debe bajar las marchas");
    }else if(rpm>=1000 && rpm<=3000){
        console.log("Usted esta en la marcha correcta");
    }else{
        console.log("Usted debe aumentar la marcha");
    }
}


