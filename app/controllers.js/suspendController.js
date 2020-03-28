const db = require("../models");
const Student = db.students;
const Op = db.Sequelize.Op;


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


