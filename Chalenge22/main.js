//Nombre de paciente con validacion
let paciente = prompt("Ingrese su nombre")
while(paciente.length==0){
    paciente=prompt("Usted no ingreso ningun cracter\nIntente su nombre nuevamente")
}

//Sexo del paciente , con bucle para ingreso y condicional si es femenino
let sexo=prompt("Ingrese su sexo F para femenino o M para masculino").toLowerCase()
while (sexo!=="m" && sexo!=="f") {
    sexo=prompt("No valido.\n Por favor Ingrese su sexo F para femenino o M para masculino").toLowerCase()
}
if (sexo=="f"){
    embarazo=confirm("esta embarazada?")
}

//Ingreso de dolencias
let dolencias=prompt("Ingrese su dolencia\n1.Dolor de cabeza\n2.Dolor de muela\n3.Dolor de panza\n4.Dolor de pecho\n5.Dolor de ojos")

//Condicionales sobre tratamiento
if(dolencias==1 && sexo=="m"){
    alert(`Paciente ${paciente}\nSexo : ${sexo}\nSe le recomienda una Tomografia`);
}else if (dolencias==1 && sexo=="f" && embarazo==false){
    alert(`Paciente ${paciente}\nSexo : ${sexo}\nSe le recomienda una Tomografia`);
}else if (dolencias==1 && sexo=="f" && embarazo==true){
    alert(`Paciente ${paciente}\nSexo : ${sexo}\nNo es posible realizar una tomografia , Se le recomienda tratamientos alternativo por su condicion de gestante , consulte con su Medico`);
}else if(dolencias==2){
    alert(`Paciente ${paciente}\nSexo : ${sexo}\nSe le recomienda una Extraccion`);
}else if(dolencias==3){
    alert(`Paciente ${paciente}\nSexo : ${sexo}\nSe le recomienda una Hepaltagina`);
}else if (dolencias==4){
    alert(`Paciente ${paciente}\nSexo : ${sexo}\nSe le recomienda controlar la presion sanguinea`);
}else if(dolencias==5){
    alert(`Paciente ${paciente}\nSexo : ${sexo}\nSe le recomienda una Topografia cornea`);
}else{alert("Dolencias no validas , refresque la pagina y siga las instrucciones")}