module.exports = (sequelize, Sequelize) => {
    const Notification = sequelize.define("notification", {
      body: {
        type: Sequelize.STRING,
      }
//   to be related with both student and teacher
    return Notification;
  });

