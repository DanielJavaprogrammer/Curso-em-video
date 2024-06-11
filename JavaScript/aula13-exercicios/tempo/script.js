var fundo = document.querySelector("body");

function timeup() {

    var hora = new Date();
    var relogio = hora.getHours();
    var minutos = hora.getMinutes();
    var nome = document.querySelector(".horario");
    var img = document.querySelector(".tempo-foto img")
    var doisPontos = ":"

    if (relogio > 0 && relogio < 12) {
        nome.innerHTML = `Agora são ${relogio}<span class="piscar">:</span>${minutos} hora(s)`;
        fundo.style.backgroundColor = "#fffdcd"
    } else if (relogio >= 12 && relogio < 19) {
        nome.innerHTML = `Agora são ${relogio}<span class="piscar">:</span>${minutos} hora(s)`;
        fundo.style.backgroundColor = "#f0ab50"
        img.src = "afternoon.jpg"

    } else {
        nome.innerHTML = `Agora são ${relogio}<span class="piscar">:</span>${minutos} hora(s)`;
        fundo.style.backgroundColor = "rgb(34,34,34)"
        img.src = "night.jpg"
    }
}
setInterval(timeup, 1000);