let books = require("../data/books")

//GET all books.
const getBooks = (req, res) => {
    res.json(books)
}

//GET book by ID.
const getBookById = (req, res) => {
    const id = parseInt(req.params.id)
    const book = books.find(b => b.id === id)
    if (!book) {
        return res.status(404).json({ message: "Book not found" })
    }
    res.json(book)
}

//POST new book.
const addBook = (req, res) => {
    const { title, authorId } = req.body
    if (!title || !authorId) {
        return res.status(400).json({ message: "Title and authorId required" })
    }
    const newBook = {
        id: books.length + 1,
        title,
        authorId
    }
    books.push(newBook)
    res.status(201).json(newBook)
}

module.exports = {
    getBooks,
    getBookById,
    addBook
}