const fileModel = require("../model/fileModel")

//GET all files.
const getFiles = (req, res) => {
    try {
        const files = fileModel.getAllFiles()
        res.status(200).json(files)
    } catch (error) {
        res.status(500).json({ message: "Error retrieving files" })
    }
}

//GET file by ID.
const getFileById = (req, res) => {
    const id = parseInt(req.params.id)
    const file = fileModel.getFileById(id)
    if (!file) {
        return res.status(404).json({ message: "File not found" })
    }
    res.status(200).json(file)
}

module.exports = {
    getFiles,
    getFileById
}