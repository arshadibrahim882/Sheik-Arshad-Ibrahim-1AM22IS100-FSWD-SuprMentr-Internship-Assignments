const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://1am22is100_db_user:oyi0vIlVIdEvTm13@cluster0.fccepka.mongodb.net/")
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB