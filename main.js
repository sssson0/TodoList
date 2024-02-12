let taskInput = document.getElementById("tesk-input");
let addButton = document.getElementById("add-button");
let taskList = [];
addButton.addEventListener('click',addTask);

function addTask(){
    let taskContent = taskInput.value
    taskList.push(taskContent)
    console.log(taskList)
    render();
}

function render(){
    let resultHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        resultHTML += `<div class="task">
        <div>${taskList[i]}</div>
        <div>
            <button>check</button>
            <button>delete</button>
        </div>
    </div>`;
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}