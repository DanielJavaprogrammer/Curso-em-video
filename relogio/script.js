
function timeNow() {
    var showHoras = window.document.querySelector("#horas");

    var horario = new Date();
    var hora = horario.getHours();
    var minutos = horario.getMinutes();

    showHoras.innerHTML = `${hora}<span class="piscar">:</span>${minutos}`
}

setInterval(timeNow(1000));