const express = require("express")
const router = express.Router()
const { signup, login } = require("../controller/authController")
const protect = require("../middleware/authMiddleware")
const authorizeRoles = require("../middleware/roleMiddleware")

router.post("/signup", signup)
router.post("/login", login)

//USER route.
router.get("/user-dashboard", protect, authorizeRoles("user", "admin"), (req, res) => {
    res.json({ message: "User Dashboard Access Granted" })
})

//ADMIN route.
router.get("/admin-dashboard", protect, authorizeRoles("admin"), (req, res) => {
    res.json({ message: "Admin Dashboard Access Granted" })
})

module.exports = router