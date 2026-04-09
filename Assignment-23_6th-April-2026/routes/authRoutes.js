const express = require("express")
const router = express.Router()
const { signup, login } = require("../controller/authController")
const protect = require("../middleware/authMiddleware")

router.post("/signup", signup)
router.post("/login", login)

//Protected route example.
router.get("/profile", protect, (req, res) => {
    res.json({ message: "Welcome to protected profile", user: req.user })
})

module.exports = router