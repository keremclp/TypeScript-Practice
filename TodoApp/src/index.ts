import { v4 as uuidvV4 } from "uuid" // npm i --save-dev @types/uuid

type Task = {
    id: string
    title: string
    completed: boolean
    createdAt: Date
}
// I can do in the addListItem by declaring task as objects


const list = document.querySelector<HTMLUListElement>('#list')
const form = document.getElementById('new-task-form') as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>('#new-task-title')

const tasks: Task[] = loadTasks()
tasks.forEach(addListItem)

// input.value var ama list.value yok !! 

form?.addEventListener("submit", e=>{

    e.preventDefault()

    if (input?.value == "" || input?.value == null) return
    // question marks does if the input exist then give me the value, if it is not return undefined
    
    const newTask: Task = {
        id: uuidvV4(),
        title: input.value,
        completed: false,
        createdAt : new Date()
    }
    tasks.push(newTask)
    saveTasks();
    // tasks.push(true)  when try to that you got this error :Argument of type 'boolean' is not assignable to parameter of type 'Task' because tasks is assigned as Task   


    addListItem(newTask)
    input.value = ""
})

function addListItem(task: Task ){
    const item = document.createElement("li")
    const label = document.createElement("label")
    const checkbox  = document.createElement("input")
    checkbox.addEventListener("change", ()=>{
        task.completed = checkbox.checked
        // console.log(tasks);
        saveTasks();
        
    })
    checkbox.type = "checkbox"
    checkbox.checked = task.completed
    label.append(checkbox, task.title)
    item.append(label)
    list?.append(item)
    // if we use 'return true' then when you hover the addListItem it says return is boolean
}

function saveTasks(){
    localStorage.setItem("TASKS", JSON.stringify(tasks))
}

function loadTasks(): Task[] {
    const taskJSON = localStorage.getItem('TASKS')
    if (taskJSON == null) return []
    return JSON.parse(taskJSON)
}