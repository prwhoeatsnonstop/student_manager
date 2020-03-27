module.exports = app => {
    const students = require("../controllers/student.controller.js");
    const { Op } = require("sequelize");
  
    var router = require("express").Router();
  
    // HOME PAGE
    // router.get('/', function (req, res) {
    //     res.render('index', {title: 'Student Registration'});
    // });

    // REGISTER A STUDENT
    router.post("/register", students.create);
  
    // GET ALL COMMON STUDENTS
    router.get("/commonstudents", students.findAll);
  
    // SUSPEND A SPECIFIED STUDENT
    router.post("/suspend", students.create);
  
    // RETRIEVE LIST OF STUDENTS WHO CAN RECEIVE A GIVEN NOTIFICATION
    //https://sequelize.org/master/manual/model-querying-basics.html#the-basics
    router.post("/retrievefornotifications", students.findAll({
        where: {
            [Op.or]: [
                //{student with @ mentioned}
                //{registered with teacher}
            ]
        }
    }));
  
    app.use('/api', router);
  };
