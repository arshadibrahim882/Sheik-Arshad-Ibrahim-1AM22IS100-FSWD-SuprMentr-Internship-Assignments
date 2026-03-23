const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "../data/files.json")

//read all files.
const getAllFiles = () => {
    const data = fs.readFileSync(filePath)
    return JSON.parse(data)
}

//get file by id.
const getFileById = (id) => {
    const files = getAllFiles()
    return files.find(file => file.id === id)
}

module.exports = {
    getAllFiles,
    getFileById
}