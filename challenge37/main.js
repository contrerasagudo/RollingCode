
function juego(){

    boton=document.getElementById("boton1");
    boton2=document.getElementById("boton2");
    

    let numeroAleatorio = Math.floor(Math.random()*100);

   
    let contador = 9;

    let respuesta = (prompt('Introduzca un numero del 1 al 100'));

    

    while( respuesta!=numeroAleatorio && contador>0 ){
        if(isNaN(respuesta) ||respuesta.trim()===""){
            respuesta = prompt(`ingreso un caracter no valido , por querer bugear el codigo se le resta un turno igual , le quedan ${contador} intentos`);
        }else if(respuesta>numeroAleatorio){
            respuesta = prompt(`El Numero magico es menor , le quedan ${contador} intentos`);
        }else{
            respuesta = prompt(`El Numero magico es mayor , le quedan ${contador} intentos`);
        }
        contador--;
    }

    if(contador==0){
        document.getElementById("resultado").innerHTML = 'Numero Magico = ' + numeroAleatorio;
        alert("Agoto sus intentos");
        boton.remove("disable")
        boton2.disabled=false

    }else{
        document.getElementById("resultado").innerHTML = 'Numero Magico = ' + numeroAleatorio;
        alert("Acerto el numero secreto");
        boton.remove("disable")
        boton2.disabled=false

    }
    
}

function rejugar(){
    location.reload()
}