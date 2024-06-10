var fundo = document.querySelector("body");
function time() {

    var hora = new Date();
    var relogio = hora.getHours();
    var minutos = hora.getMinutes();
    var nome = document.querySelector(".horario");

    if (relogio > 0 && relogio < 12) {
        nome.innerHTML = `Agora são ${relogio}:${minutos} hora(as). Bom dia.`;
        fundo.style.backgroundColor = "#fffdcd"
    } else if (relogio >= 12 && relogio < 19) {
        nome.innerHTML = `Agora são ${relogio}:${minutos} hora(as). Boa tarde.`;
        fundo.style.backgroundColor = "#f0ab50"
    } else {
        nome.innerHTML = `Agora são ${relogio} hora(s)`
        fundo.style.backgroundColor = "rgb(34,34,34)"
    }
}