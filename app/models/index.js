const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require("./student.js")(sequelize, Sequelize);
db.teachers = require("./teacher.js")(sequelize, Sequelize);
db.student_teacher = require("./student_teacher.js")(sequelize, Sequelize);
db.notifications = require("./notification.js")(sequelize, Sequelize);


module.exports = db;