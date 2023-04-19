let suma_golpes=0

for (i=0;i<=9;i++) {
    let skills=Math.floor(Math.random()*(2001-1000))+1000;

    document.write(`* El Skill Nº${i+1} tuvo un daño de : ${skills}<br>`)

    suma_golpes+=skills
}


document.write(`<br>El daño total provocado por todos los Skills es de : ${suma_golpes}`)