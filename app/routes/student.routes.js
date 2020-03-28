module.exports = app => {
    const student_teacher = require("../controllers/student_teacherController.js");
    const { Op } = require("sequelize");
  
    var router = require("express").Router();
  
    // REGISTER A STUDENT
    router.post("/register", student_teacher.create);
  
    // GET ALL COMMON STUDENTS
    router.get("/commonstudents", student_teacher.findAll);
  
    // SUSPEND A SPECIFIED STUDENT
    router.post("/suspend", student_teacher.update);
  
    // RETRIEVE LIST OF STUDENTS WHO CAN RECEIVE A GIVEN NOTIFICATION
    //https://sequelize.org/master/manual/model-querying-basics.html#the-basics
    router.post("/retrievefornotifications", student_teacher.findAll({
        where: {
            [Op.or]: [
                //{student with @mentioned}
                //{registered with teacher}
            ]
        }
    }));
  
    app.use('/api', router);
  };
