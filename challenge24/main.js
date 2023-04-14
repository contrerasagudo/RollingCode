//Variables auxiliares
let oro = 0;
let pociones= 0;
let vacios = 0;

// Bucle para abrir y mostrar cada cofre , formula para determinar un numero aleatorio y redondear.
for (i = 0; i <= 9; i++) {
    const contenido = Math.floor(Math.random() * 3);

    //condicionales para llenar los cofres segun el numero aleatorio generado (0 al 3)
    if (contenido === 0) {
        oro += 10;
        console.log(`En el Cofre ${i}: Encontraste 10 de oro`);
    } else if (contenido === 1) {
        pociones += 2;
        console.log(`En el Cofre ${i}: Encontraste 2 pociones de vida`);
    } else {
        vacios++;
        console.log(`En el Cofre ${i}: No encontraste nada`);
    }
}

// Resultado final
console.warn(`En total obtuviste :\n${oro} Monedas de Oro \n${pociones} Pociones de Vida \n${vacios} Estaban Vacios`)
