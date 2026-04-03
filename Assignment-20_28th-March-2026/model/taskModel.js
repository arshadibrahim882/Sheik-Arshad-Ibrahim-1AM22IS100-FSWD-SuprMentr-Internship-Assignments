let tasks = [
    { id: 1, title: "Learn MVC", completed: false },
    { id: 2, title: "Build Task API", completed: true }
]

//Get all tasks.
const getAllTasks = () => tasks

//Get task by ID.
const getTaskById = (id) => {
    return tasks.find(task => task.id === id)
}

//Add new task.
const addTask = (taskData) => {
    const newTask = {
        id: tasks.length + 1,
        completed: false,
        ...taskData
    }
    tasks.push(newTask)
    return newTask
}

//Update task.
const updateTask = (id, data) => {
    const task = tasks.find(t => t.id === id)
    if (!task) 
        return null
    if (data.title !== undefined) 
        task.title = data.title
    if (data.completed !== undefined) 
        task.completed = data.completed
    return task
}

//Delete task.
const deleteTask = (id) => {
    tasks = tasks.filter(t => t.id !== id)
}

module.exports = {
    getAllTasks,
    getTaskById,
    addTask,
    updateTask,
    deleteTask
}