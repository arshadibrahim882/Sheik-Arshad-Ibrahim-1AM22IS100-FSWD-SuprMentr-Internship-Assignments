const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://1am22is100_db_user:z70wOybjGKPWmiPO@cluster0.8zt9hal.mongodb.net/")
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("DB Connection Error:", error)
        process.exit(1)
    }
}

module.exports = connectDB