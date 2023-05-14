let boton1 = document.getElementById("start");
let boton2 = document.getElementById("pause");

let centesima = document.getElementById("centesimas");
let seg = document.getElementById("segundos");
let min = document.getElementById("minutos");
let horas = document.getElementById("horas");

count_centesimas = 0;
count_segundos = 0;
count_minutos = 0;
count_horas = 0;


function start() {

    boton1.disabled = true
    boton2.disabled = false

    cronometro = window.setInterval(() => {

        if (count_centesimas == 100) {
            count_centesimas = 0;
            count_segundos++;
            if (count_segundos == 60) {
                count_segundos = 0;
                count_minutos++
            } if (count_minutos == 60) {
                count_minutos = 0;
                count_horas++
            }
        }

        if (count_centesimas < 10) {
            centesima.innerHTML = "0" + count_centesimas
        } else { centesima.innerHTML = count_centesimas }

        if (count_segundos < 10) {
            seg.innerHTML = "0" + count_segundos
        } else { seg.innerHTML = count_segundos }

        if (count_minutos < 10) {
            min.innerHTML = "0" + count_minutos
        } else { min.innerHTML = count_minutos }

        if (count_horas < 10) {
            horas.innerHTML = "0" + count_horas
        } else { horas.innerHTML = count_horas }

        count_centesimas++;


    }, 10)
}


function pause() {
    clearInterval(cronometro)
    boton1.disabled = false
    boton1.innerHTML = "Resume"

}


function reset() {
    location.reload()
}

