const express = require("express");
const router = express.Router();

const {
  getStudents,
  getStudentById,
  addStudent
} = require("../controllers/StudentController");

//Routes.
router.get("/students", getStudents);
router.get("/students/:id", getStudentById);
router.post("/students/add", addStudent);

module.exports = router;