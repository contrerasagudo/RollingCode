//var para el array con los 3 objetos
let array_productos = []

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimedatos() {
        console.log(`El producto es ${this.nombre}\nEl precio es $${this.precio}\nEl codigo es ${this.codigo}`);
    }
}

//Instancia de los 3 objetos
let producto1 = new Producto(1569, "Manteca", 150);
let producto2 = new Producto(3698, "Gaseosa", 450);
let producto3 = new Producto(4089, "Desodorante", 350);

//Se combinan en 1 array
array_productos.push(producto1, producto2, producto3);

//Se muestra con la funcion imprimedatos
for (let i = 0; i < array_productos.length; i++) {
    console.log(array_productos[i].imprimedatos());
}




