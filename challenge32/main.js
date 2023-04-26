//funciones para que range te muestre los numeros mientras se arrastra el selector
addEventListener("load", rango, false);
function rango() {
    document.getElementById("draft").addEventListener("change", cambio_rango, false);
    document.getElementById("crew").addEventListener("change", cambio_rango, false)
}

function cambio_rango() {
    document.getElementById("draft2",).innerHTML = document.getElementById("draft").value;
    document.getElementById("crew2",).innerHTML = document.getElementById("crew").value;
}


//Var para mostrar el resultado de si saquear o no
let informes2=document.getElementById("saqueo")

// Capturar el formulario
const formulario = document.getElementById("reporte_pirata");



// Funcion para mostrar el resultado y prevenir el reinicio de la pagina y formulario al enviar
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // capturamos los valores del formulario(reporte_pirata)
    const draft = parseInt(document.getElementById('draft').value);
    const crew = parseInt(document.getElementById('crew').value);

    // Creacion de un nuevo objeto
    const barco = new Barco(draft, crew);

    // Comprobamos si el botin es bueno o no en base al objeto barco+funcion buen_botin
    if (barco.buen_botin()) {
        informes2.innerText='El barco tiene mas de 20Kg de tesoros , preparen el saqueo....';

    } else {
        informes2.innerText='El barco tiene menos de 20Kg de tesoros, no vale la pena';
    }
});

//Constructor de clase con funcion para determinar peso y evaluarlo
class Barco {
    constructor(draft, crew) {
        this.draft = draft;
        this.crew = crew;
    }
    buen_botin() {
        
        const pesoTotal = this.draft - (this.crew * 1.5);

        if (pesoTotal >= 20) {
            return true; 
        } else {
            return false; 
        }
    }
}











