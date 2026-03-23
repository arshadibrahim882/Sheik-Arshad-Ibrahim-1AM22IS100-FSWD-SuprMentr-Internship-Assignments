const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")

//Get all users.
router.get("/", userController.getUsers)

//Get user by ID (Route Parameter).
router.get("/:id", userController.getUserById)

module.exports = router