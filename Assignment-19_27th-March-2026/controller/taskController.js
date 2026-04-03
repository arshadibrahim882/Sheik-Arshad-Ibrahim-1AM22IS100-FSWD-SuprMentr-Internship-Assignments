let tasks = require("../data/tasks")

//GET all tasks.
const getTasks = (req, res) => {
    res.json(tasks)
}

//GET task by ID.
const getTaskById = (req, res) => {
    const id = parseInt(req.params.id)
    const task = tasks.find(t => t.id === id)
    if (!task) {
        return res.status(404).json({ message: "Task not found" })
    }
    res.json(task)
}

//POST new task.
const createTask = (req, res) => {
    const { title } = req.body
    if (!title) {
        return res.status(400).json({ message: "Title is required" })
    }
    const newTask = {
        id: tasks.length + 1,
        title,
        completed: false
    }
    tasks.push(newTask)
    res.status(201).json(newTask)
}

//PUT update task.
const updateTask = (req, res) => {
    const id = parseInt(req.params.id)
    const { title, completed } = req.body
    const task = tasks.find(t => t.id === id)
    if (!task) {
        return res.status(404).json({ message: "Task not found" })
    }
    if (title !== undefined) task.title = title
    if (completed !== undefined) task.completed = completed
    res.json(task)
}

//DELETE task.
const deleteTask = (req, res) => {
    const id = parseInt(req.params.id)
    tasks = tasks.filter(t => t.id !== id)
    res.json({ message: "Task deleted successfully" })
}

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}