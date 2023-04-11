// Pedimos al usuario que ingrese la cantidad de vida
let vida_personaje = parseInt(prompt("Ingrese la cantidad de vida de su personaje"))


//Version con conectores logicos
if (vida_personaje > 0 && vida_personaje <= 20) {
    console.log("Su personaje esta debil , corre !!!");
}
else if (vida_personaje >= 21 && vida_personaje <= 50) {
    console.log("Preparese para entrar en modo defensivo");
} else if (vida_personaje >= 51 && vida_personaje <= 80) {
    console.log("Preparese para entrar en modo moderado");
} else if (vida_personaje >= 81 && vida_personaje <= 100) {
    console.log("Preparese para entrar en modo ofensivo")
} else {
    alert("Los parametros no son correctos")
}



//Version sin conectores logicos (&& , || , !)
if (vida_personaje > 100) {
    alert("Numero no valido es mayor que 100");
} else if (vida_personaje > 80) {
    console.log("Modo ataque");
} else if (vida_personaje > 50) {
    console.log("Modo Moderado");
} else if (vida_personaje > 20) {
    console.log("Modo Defensivo");
} else if (vida_personaje > 0) {
    console.log("Corre como Forest Gump")
} else {
    alert("Numero no valido es menor que 0");
}



