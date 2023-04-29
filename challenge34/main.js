class Persona {
    constructor(nombre, edad, sexo, peso, altura, date) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = this.generarDNI();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.date = date;
    }
    mostrarGeneracion() {
        if (this.date > 1994) {
            console.log("Pertenece a Generacion Z")
        } else if (this.date > 1987) {
            console.log("Pertenece a la Generacion Y")
        } else if (this.date > 1969) {
            console.log("Pertenece a la Generacion X")
        } else if (this.date > 1949) {
            console.log("Pertenece a los Baby Boomers")
        } else if (this.date > 1930) {
            console.log("Pertenece a la Silent Generation")
        }else{
            console.log("Lo sentimos su generacion no esta en nuestra base de datos")
        }
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            console.log(`La persona ${this.nombre} es mayor de edad`)

        } else {
            console.log(`La persona ${this.nombre} es menor de edad`)
        }
    }
    generarDNI() {
        let dni = ""
        for (let i = 0; i < 8; i++) {
            dni += Math.floor(Math.random() * 10)
        }
        return dni

    }
    mostrarDatos() {
        console.log(`El nombre es: ${this.nombre}\nLa edad: ${this.edad}\nEl sexo : ${this.sexo}\nEl peso : ${this.peso} Kg\nLa altura : ${this.altura} Cmts\nEl año de nacimiento : ${this.date}\nEl numero de DNI : ${this.dni}`)
    }

}


//Objetos instanciados para prueba
let rodrigo = new Persona("Rodrigo", 32, "M", 81, 170, 1990);
let claudia = new Persona ("Claudia",30 ,"F",65,160,1998);
let abueloSimpson = new Persona ("Abel",80 ,"M",65,180,1943);
