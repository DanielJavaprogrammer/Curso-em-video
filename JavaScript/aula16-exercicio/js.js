

document.getElementById("enviar").addEventListener("click", function () {
    var valor = document.getElementById("numberBox").value;
    var secao = document.getElementById("textbox");
    var result = document.getElementById("result");
    var numero = [];




    // var item = document.createElement('option'); // Criou o elemento Option (filho da <select>)
    // secao.appendChild(item); //adiciona um "filho" a variavel "secao" que no caso é o "select" e entre parenteses colocamos o que queremos adicionar, que no caso é o "item", que recebeu o valor de "option"
    // item.textContent = "Number " + valor + " added."; // determina que texto de "item" que no caso é um "option"

    var text = document.createElement('p');
    result.appendChild(text);
    text.innerText = "Hello World";
});

