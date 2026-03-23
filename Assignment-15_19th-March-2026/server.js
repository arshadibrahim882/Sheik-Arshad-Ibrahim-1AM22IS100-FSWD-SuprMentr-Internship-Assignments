const express = require("express")
const fileRoutes = require("./routes/fileRoutes")
const logger = require("./middleware/logger")

const app = express()
app.use(express.json())

//logger middleware.
app.use(logger)

//routes.
app.use("/files", fileRoutes)

//home route.
app.get("/", (req, res) => {
    res.send("Folder Architect API running...")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})