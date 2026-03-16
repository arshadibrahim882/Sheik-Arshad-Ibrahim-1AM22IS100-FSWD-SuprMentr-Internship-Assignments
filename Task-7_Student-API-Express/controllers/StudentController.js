const students = require("../data/students");

//GET all students.
exports.getStudents = (req, res) => {
  res.json(students);
};

//GET student by ID.
exports.getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(student);
};

//ADD student.
exports.addStudent = (req, res) => {
  const { name, course } = req.body;
  const newStudent = {
    id: students.length + 1,
    name,
    course
  };
  students.push(newStudent);
  res.json({
    message: "Student added successfully",
    student: newStudent
  });
};