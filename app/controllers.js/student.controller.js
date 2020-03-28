const db = require("../models");
const Student = db.students;
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
    const student = {
      student_email: req.body.student_email,
      teacher_email: req.body.teacher_email,
      is_Suspend: req.body.is_Suspend ? req.body.is_Suspend : false
    };
  
    // Save student in the database
    Student.create(student)
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

// GET ALL COMMON STUDENTS
exports.findAll = (req, res) => {
    const student_email = req.query.student_email;
    //like is does the keyword exist in the db
    var condition = student_email ? { student_email: { [Op.like]: `%${student_email}%` } } : null;
  
    Student.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving emails of students."
        });
      });
  };

// SUSPEND A SPECIFIED STUDENT
exports.update = (req, res) => {
    const id = req.params.id;
  
    Student.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Status of student has been updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update status of student with id=${id}. Maybe student was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating status of student with id=" + id
        });
      });
  };

// RETRIEVE LIST OF STUDENTS WHO CAN RECEIVE A GIVEN NOTIFICATION
exports.findAll({
    where: {
        [Op.or]: [
            //{student with @mentioned}
            //{registered with teacher}
        ]
    }
}) = (req, res) => {

}

