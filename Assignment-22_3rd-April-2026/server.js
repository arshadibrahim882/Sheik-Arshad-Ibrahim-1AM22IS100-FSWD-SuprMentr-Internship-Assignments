const express = require("express")
const connectDB = require("./config/db")

const app = express()
const PORT = 3000

connectDB()

app.use(express.json())

app.use("/api/products", require("./routes/productRoutes"))

app.get("/", (req, res) => {
    res.send("CRUD Lab API Running...")
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})