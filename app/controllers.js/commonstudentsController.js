const db = require("../models");
const Student = db.students;
//this needs access to m-2-m as well
const Op = db.Sequelize.Op;


// GET ALL COMMON STUDENTS
exports.findAll = (req, res) => {
    const student_email = req.query.email;
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


