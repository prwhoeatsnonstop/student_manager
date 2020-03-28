const db = require("../models");
const students = db.student;
//need populate m-2-m table
const student_teacher = db.student_teacher;
const Op = db.Sequelize.Op;


// REGISTER A STUDENT
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Register a student 
    const students = {
      email: req.body.email,
      is_Suspend: req.body.is_Suspend ? req.body.is_Suspend : false
      is_Mention: req.body.is_Mention ? req.body.is_Mention : false
    };
  
    // Save student in the database
    Student.create(students)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while registering student."
        });
      });
  };


