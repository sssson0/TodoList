let taskInput = document.getElementById("tesk-input");
let addButton = document.getElementById("add-button");
let taps = document.querySelectorAll(".task-taps div" );
let taskList = [];
let mode ="all";
let filterList = [];
addButton.addEventListener('click',addTask);

for(let i= 1; i < taps.length; i++){
    taps[i].addEventListener("click",function(event){
        filter(event)})
}

function addTask(){
    let task = {
        id : randomIdGenerate(),
        taskContent : taskInput.value,
        isComplete : false
    }
    taskList.push(task);
    console.log(taskList);
    render();
}

function render(){
    let list = [];
    if(mode === "all"){
        list = taskList;
    } else if(mode === "ongoing" || mode === "done"){
        list = filterList;
    } 


    let resultHTML = "";
    for (let i = 0; i < list.length; i++) {
        if(list[i].isComplete==true){
            resultHTML += `<div class="task">
        <div class="task-done">${list[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${list[i].id}')">check</button>
            <button onclick="deleteTask('${list[i].id}')">delete</button>
        </div>
    </div>`;
        } else{
        resultHTML += `<div class="task">
        <div>${list[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${list[i].id}')">check</button>
            <button onclick="deleteTask('${list[i].id}')">delete</button>
        </div>
    </div>`;
        }
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id){
    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(taskList)
}

function deleteTask(id){
    for(let i = 0; i < taskList.length;i++){
        if(taskList[i].id ==id){
            taskList.splice(i,1);
            break;
        }
    }
    render();
    console.log(taskList)
}

function filter(event){
    mode = event.target.id;
    filterList = [];
    if(mode === "all"){
        render();
    } else if(mode === "ongoing"){
        for(let i = 0; i<taskList.length; i++){
            if(taskList[i].isComplete === false){
                filterList.push(taskList[i]);
            }
        }
        render()
        // console.log('ss',filterList)
    } else if(mode === "done"){
        for(let i = 0; i<taskList.length; i++){
            if(taskList[i].isComplete === true){
                filterList.push(taskList[i]);
            }
        }
        render();
    }
}

function randomIdGenerate(){
    return '_' + Math.random().toString(36).substring(2.9);
}