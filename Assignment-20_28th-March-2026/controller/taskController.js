const taskModel = require("../model/taskModel")

//GET all tasks.
const getTasks = (req, res) => {
    const tasks = taskModel.getAllTasks()
    res.json(tasks)
}

//GET task by ID.
const getTask = (req, res) => {
    const id = parseInt(req.params.id)
    const task = taskModel.getTaskById(id)
    if (!task) {
        return res.status(404).json({ message: "Task not found" })
    }
    res.json(task)
}

//CREATE task.
const createTask = (req, res) => {
    const { title } = req.body
    if (!title) {
        return res.status(400).json({ message: "Title is required" })
    }
    const newTask = taskModel.addTask({ title })
    res.status(201).json(newTask)
}

//UPDATE task.
const updateTask = (req, res) => {
    const id = parseInt(req.params.id)
    const updatedTask = taskModel.updateTask(id, req.body)
    if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" })
    }
    res.json(updatedTask)
}

//DELETE task.
const deleteTask = (req, res) => {
    const id = parseInt(req.params.id)
    taskModel.deleteTask(id)
    res.json({ message: "Task deleted successfully" })
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}