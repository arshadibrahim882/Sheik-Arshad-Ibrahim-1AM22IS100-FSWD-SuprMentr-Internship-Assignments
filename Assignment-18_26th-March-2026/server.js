const express = require("express")
const bookRoutes = require("./routes/bookRoutes")
const authorRoutes = require("./routes/authorRoutes")

const app = express()
const PORT = 3000

app.use(express.json())

//Routes.
app.use("/books", bookRoutes)
app.use("/authors", authorRoutes)

//Home route.
app.get("/", (req, res) => {
    res.json({ message: "Bookstore API is running..." })
})

//404 handler.
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})