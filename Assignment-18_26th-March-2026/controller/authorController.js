let authors = require("../data/authors")

//GET all authors.
const getAuthors = (req, res) => {
    res.json(authors)
}

//GET author by ID.
const getAuthorById = (req, res) => {
    const id = parseInt(req.params.id)
    const author = authors.find(a => a.id === id)
    if (!author) {
        return res.status(404).json({ message: "Author not found" })
    }
    res.json(author)
}

//POST new author.
const addAuthor = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ message: "Name is required" })
    }
    const newAuthor = {
        id: authors.length + 1,
        name
    }
    authors.push(newAuthor)
    res.status(201).json(newAuthor)
}

module.exports = {
    getAuthors,
    getAuthorById,
    addAuthor
}