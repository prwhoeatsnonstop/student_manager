module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teacher", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
            isEmail: true
        },
        unique: {
        args: 'email',
        msg: 'The email is already taken!'
        }
    }
});
  
    return Teacher;
  };

  //https://stackoverflow.com/questions/53452134/sequelizejs-allows-unique-field-to-be-duplicated
