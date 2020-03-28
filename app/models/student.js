module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
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
    },
      is_Suspend: {
        type: Sequelize.BOOLEAN
      },
      is_Mention: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Student;
  };

  //https://stackoverflow.com/questions/53452134/sequelizejs-allows-unique-field-to-be-duplicated
