// Carregar as tarefas salvas do localStorage
function carregarTarefas() {
    let tarefasSalvas = localStorage.getItem("tarefas");
    if (tarefasSalvas) {
        return JSON.parse(tarefasSalvas);
    } else {
        return [];
    }
}

// Salvar as tarefas no localStorage
function salvarTarefas(tarefas) {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

const allTasks = carregarTarefas();

document.getElementById("send-task").addEventListener("click", function () {
    let task = document.getElementById("name-task").value.trim();
    let list = document.querySelector(".tasks-list");

    if (task === "") {
        alert("Please, you cannot do this. Try a valid task.");
        return;
    }

    let item = document.createElement("li");
    item.textContent = task;
    list.appendChild(item);

    allTasks.push(task);
    salvarTarefas(allTasks);
    console.log(allTasks);

    let removeBTN = document.createElement("button");
    removeBTN.textContent = "Remove";

    item.appendChild(removeBTN);

    removeBTN.addEventListener("click", function () {
        list.removeChild(item);
        let index = allTasks.indexOf(task);
        if (index > -1) {
            allTasks.splice(index, 1);
        }
        salvarTarefas(allTasks);
    });

    document.getElementById("name-task").value = "";
});

// Função chamada na segunda página para exibir as tarefas
function tarefasAdicionadas() {
    let tarefas = carregarTarefas();
    let divTarefas = document.querySelector("#tarefas");

    tarefas.forEach(function (tarefa) {
        let paragrafo = document.createElement("p");
        paragrafo.textContent = tarefa;
        divTarefas.appendChild(paragrafo);
    });
}
