function updateTime() {
    var hoje = new Date();
    var hora = hoje.getHours().toString().padStart(2, '0');
    var minutos = hoje.getMinutes().toString().padStart(2, '0');
    var segundos = hoje.getSeconds().toString().padStart(2, '0');;
    var clock = window.document.querySelector(".clock p");
    clock.innerHTML = `${hora}<span class="pontos">:</span>${minutos}<span class="pontos">:</span>${segundos}`

}

setInterval(updateTime, 1000)