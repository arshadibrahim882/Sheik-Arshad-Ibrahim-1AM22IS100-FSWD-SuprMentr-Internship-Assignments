const express = require("express")
const connectDB = require("./config/db")
require("dotenv").config()

const app = express()
const PORT = 3000

connectDB()

app.use(express.json())

app.use("/api/auth", require("./routes/authRoutes"))

app.get("/", (req, res) => {
    res.send("Secure Login API Running...")
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})