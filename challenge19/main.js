//Asignacion de variables por consola y creacion de los valores de las pociones
let vida= parseInt(prompt("Ingresa la cantidad de puntos de HP de su Personaje"))

const pocion_chica=25
const pocion_grande=50


//Condicionales para la cura del personaje segun su vida + extra para numero cero.
if (isNaN(vida)==true){
    console.log("Usted no ingreso un valor valido , intente nuevamente");
}else if(isNaN(vida)==false){
    if (vida>0 && vida<50){
        console.log(`Su personaje fue curado ahora tiene ${vida+pocion_grande} puntos de HP`);
    }else if(vida>=50 && vida<75){
        console.log(`Su personaje fue curado ahora tiene ${vida+pocion_chica} puntos de HP`);
    }else if (vida==0){
        console.log("Su personaje no puede curarse , porque ya esta muerto =(");
    }else{
        console.log("Su personaje esta en perfectas condiciones , puedes continuar tu aventura")
    }
}
