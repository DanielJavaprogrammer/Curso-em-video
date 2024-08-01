function contar() {
    var passo1 = document.getElementById("inicio").value
    var passo2 = document.getElementById("fim").value
    var passo3 = document.getElementById("passos").value
    var result = document.querySelector("#result p")

    var dado1 = Number(passo1);
    var dado2 = Number(passo2);
    var dado3 = Number(passo3);

    if (passo1.length == 0 || passo2.length == 0 || passo3.length == 0) {
        alert("Erro. Faltam dados a ser digitados.");
    } else if (dado1 < dado2) {
        result.innerHTML = "Contando: ..."
        for (var c = dado1; c <= dado2; c += dado3) {
            result.innerHTML += `${c} <p>👉</p>`;
        }
    } else {
        result.innerHTML = "Contando: ..."
        for (var c = dado1; c >= dado2; c -= dado3) {
            result.innerHTML += `${c} <p>👉</p>`;
        }
    }
    result.innerHTML += `<p>🚩</p>`;
}