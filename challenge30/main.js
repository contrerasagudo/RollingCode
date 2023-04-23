// var aux para contar los puntos
let puntos_usuario = 0;
let puntos_cpu = 0;

// marcadores
let caja_puntos_usuario = document.querySelector("#puntos_jugador");
let caja_puntos_cpu = document.querySelector("#puntos_cpu");

//var para desactivar los botones de arma y la visibilidad de cada turno
let chau_arma=document.querySelector(".eleccion")
let muesta_jugada=document.querySelector(".muestra_jugada")

//Muestra que saco cada jugador en cada tirada
let eleccion_usuario = document.querySelector("#turno_jugador");
let eleccion_cpu = document.querySelector("#turno_cpu");

//Mensajes final al terminar la ronda
let mensaje_final=document.querySelector("#final")


//Cuando se presiona algun boton (armas) inicia la funcion de juego
let accion_botones = document.querySelectorAll(".arma");
accion_botones.forEach(botones => {
    botones.addEventListener("click", comienzo_juego)
});

//Funcion , se compara , se suma puntos y se almacena el total
function comienzo_juego(e) {
    turno_cpu = Math.floor(Math.random() * 3);
    turno_jugador = e.currentTarget.id;

    if (turno_cpu === 0) {
        turno_cpu = "piedra";
    } else if (turno_cpu === 1) {
        turno_cpu = "papel";
    } else if (turno_cpu === 2) {
        turno_cpu = "tijera";
    }

    if ((turno_jugador === "piedra" && turno_cpu === "tijera") ||
        (turno_jugador === "tijera" && turno_cpu === "papel") ||
        (turno_jugador === "papel" && turno_cpu === "piedra")
    ) {
        puntos_usuario++;
        caja_puntos_usuario.innerText = puntos_usuario;


    } else if ((turno_cpu === "piedra" && turno_jugador === "tijera") ||
        (turno_cpu === "tijera" && turno_jugador === "papel") ||
        (turno_cpu === "papel" && turno_jugador === "piedra")) 
        {
        puntos_cpu++;
        caja_puntos_cpu.innerText = puntos_cpu;
    }
    //aca se muestra por cada jugada , que saco cada uno
    eleccion_usuario.innerText=turno_jugador
    eleccion_cpu.innerText=turno_cpu

    //cuando algun jugador llega a 5 puntos se desactivan los botones de arma y el texto que mostraba las jugadas
    if(puntos_usuario ==5 || puntos_cpu==5){
        mensaje_final.innerText="Finalizo el juego"
        chau_arma.remove("disabled")
        muesta_jugada.remove("disabled")
    }
}
