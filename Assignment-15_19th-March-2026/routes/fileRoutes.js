const express = require("express")
const router = express.Router()
const fileController = require("../controller/fileController")

router.get("/", fileController.getFiles)
router.get("/:id", fileController.getFileById)

module.exports = router