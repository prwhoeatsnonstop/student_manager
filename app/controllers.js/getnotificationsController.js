const db = require("../models");
const Student = db.students;
const Notification = db.notifications;
const Op = db.Sequelize.Op;


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

