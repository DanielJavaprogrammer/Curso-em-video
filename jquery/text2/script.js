const allTasks = [];

document.getElementById("send-task").addEventListener("click", function () {

    let task = document.getElementById("name-task").value.trim();
    let list = document.querySelector(".tasks-list");

    if (task.length == " ") {
        alert("Please, you cannot do this. Try a valid task.")
        return
    }

    let item = document.createElement("li");
    item.textContent = task;
    list.appendChild(item);

    allTasks.push(task);
    console.log(allTasks);

    var removeBTN = document.createElement("button");
    removeBTN.textContent = "Remove";


    item.appendChild(removeBTN);

    removeBTN.addEventListener("click", function () {
        list.removeChild(item);
    })

    document.getElementById("name-task").value = "";

})

