/* Realizar una calculadora simple que incluya suma, resta, multiplicación y división */

function calculadora() {
    switch(select_user){
        case 1:
            return (`El resultado es : ${n1+n2}`);
        case 2:
            return (`El resultado es : ${n1-n2}`);
        case 3:
            return(`El resultado es : ${n1*n2}`);
        case 4:
            return(`El resultado es : ${n1/n2}`);
    }
}


while (true){
    select_user=parseInt(prompt(`Bienvenido a la calculadora basica marca patito \nPresione 1 para sumar\nPresione 2 para restar\nPresione 3 para multiplicar\nPresione 4 para dividir\nPresione "0" para salir`));
    if (select_user===0){
        break
    }else if ( select_user>=1 && select_user<=4){
        n1=parseInt(prompt("Ingrese el primero numero"))
        n2=parseInt(prompt("Ingrese el segundo numero"))
        alert(calculadora())
        break
    }else{
        alert("Valor no valido , intente nuevamente")
    }    
    }

    alert("Gracias por Utilizar nuestro servicio")