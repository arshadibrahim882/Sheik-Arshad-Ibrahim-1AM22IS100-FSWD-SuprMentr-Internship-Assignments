const express = require("express")
const connectDB = require("./config/db")

const PORT = 3000
const app = express()

//Connect DB.
connectDB()

//Middleware.
app.use(express.json())

//Routes.
app.use("/api/blog", require("./routes/blogRoutes"))

//Server.
app.listen(PORT, () => {
    console.log(`Server successfully running on http://localhost:${PORT}`)
})