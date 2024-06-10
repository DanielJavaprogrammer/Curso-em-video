
function timeNow() {
    var showHoras = window.document.querySelector("#horas");

    var horario = new Date();
    var hora = horario.getHours();
    var minutos = horario.getMinutes();

    showHoras.innerHTML = `${hora}<span>:</span>${minutos}`
}

setInterval(timeNow(60000));