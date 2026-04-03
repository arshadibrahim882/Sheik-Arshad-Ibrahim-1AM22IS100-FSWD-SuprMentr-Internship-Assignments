const express = require("express")
const taskRoutes = require("./routes/taskRoutes")
const errorHandler = require("./middleware/errorHandler")

const app = express()
const PORT = 3000

app.use(express.json())

//Routes.
app.use("/tasks", taskRoutes)

//Home route.
app.get("/", (req, res) => {
    res.json({ message: "Task MVC API running..." })
})

//Error handler middleware.
app.use(errorHandler)

//404 handler.
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" })
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})