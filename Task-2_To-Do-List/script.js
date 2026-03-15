/*
    TO-DO LIST.
    Add, Complete, Delete, Update, Clear.
*/

//elements.
const input = document.getElementById("taskInput")
const addBtn = document.getElementById("Add")
const taskList = document.getElementById("taskList")
const clearBtn = document.getElementById("Clear")
const taskCount = document.getElementById("taskcount")

//local storage data.
let tasks = JSON.parse(localStorage.getItem("tasks")) || []

//LOAD TASKS.
function loadTasks(){

    taskList.innerHTML = ""

    tasks.forEach(function(task, index){
        createTaskElement(task.text, task.completed, index)
    })

    updateCount()
}

//CREATE TASK ELEMENT.
function createTaskElement(text, completed, index){

    const li = document.createElement("li")

    if(completed){
        li.classList.add("completed")
    }

    //task text.
    const span = document.createElement("span")
    span.textContent = text

    //mark completed.
    span.addEventListener("click", function(){
        tasks[index].completed = !tasks[index].completed
        saveAndReload()
    })

    //EDIT BUTTON.
    const editBtn = document.createElement("button")
    editBtn.textContent = "Edit"

    editBtn.addEventListener("click", function(){

        let newText = prompt("Update your task:", text)

        if(newText !== null && newText.trim() !== ""){
            tasks[index].text = newText.trim()
            saveAndReload()
        }
    })

    //DELETE BUTTON.
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"

    deleteBtn.addEventListener("click", function(){
        tasks.splice(index, 1)
        saveAndReload()
    })

    li.appendChild(span)
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)

    taskList.appendChild(li)
}

//ADD TASK.
function addTask(){

    const taskText = input.value.trim()

    if(taskText === ""){
        alert("Please enter a task")
        return
    }

    //add to array.
    tasks.push({
        text: taskText,
        completed: false
    })

    input.value = ""

    saveAndReload()
}

//UPDATE COUNT.
function updateCount(){
    taskCount.textContent = tasks.length + " task(s)"
}

//SAVE + RELOAD.
function saveAndReload(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
    loadTasks()
}

//CLEAR ALL.
clearBtn.addEventListener("click", function(){

    tasks = []
    localStorage.removeItem("tasks")
    loadTasks()
})

//EVENTS.
addBtn.addEventListener("click", addTask)

input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        addTask()
    }
})

//INITIAL LOAD.
loadTasks()