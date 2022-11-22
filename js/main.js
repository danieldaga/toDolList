
const form = document.querySelector("#form")
const noteInput = document.querySelector(".input")
const addTask = document.querySelector("#addTask")
const reset = document.querySelector("#reset")
const taskList = document.querySelector("#taskList")

const taskArr = localStorage.getItem("note") ? JSON.parse(localStorage.getItem("note")) : []

form.addEventListener("submit", e => {
    e.preventDefault()
    taskArr.push(noteInput.value)
    localStorage.setItem("note", JSON.stringify(taskArr))
    taskCreator(noteInput.value)
    noteInput.value = ""
})

const taskCreator = (str) => {
    let task = document.createElement("li")
    task.innerHTML =
        `
                  <div class=" checkbox-con">
                            ${str}
                            </button>
                            <button class="btnDelete" onclick="taskDelete(this.parentNode)">
                                <span class="btn-text-one-delete">Delete</span>
                            </button>
                  `
    taskList.appendChild(task)
}

const taskDelete = (btn) => {
    let taskToUpgrade = btn.parentNode
    const index = taskArr.indexOf(taskToUpgrade)
    taskArr.splice(index, 1)
    localStorage.setItem("note", JSON.stringify(taskArr))
    taskToUpgrade.remove()
}
