const express = require("express")
const userRoutes = require("./routes/userRoutes")
const logger = require("./middleware/logger")
const errorHandler = require("./middleware/errorHandler")

const app = express()
const PORT = 3000

app.use(express.json())

//Logger middleware.
app.use(logger)

//Basic routes.
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Hello Server!" })
})

app.get("/about", (req, res) => {
    res.json({ message: "This is the About page" })
})

app.get("/contact", (req, res) => {
    res.json({ message: "Contact us at 1am22is100@amceducation.in" })
})

//User routes.
app.use("/users", userRoutes)

//404 handler.
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" })
})

//Error handler.
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})