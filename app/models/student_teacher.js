module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teacher", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
          type: Sequelize.STRING(255),
          unique: true,
          validate: {
              isEmail: true
          }
        }
    });
    const Student = sequelize.define("student", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING(255),
        unique: true,
        validate: {
            isEmail: true
        }
      },
      is_Suspend: {
        type: Sequelize.BOOLEAN
      },
      is_Mention: {
        type: Sequelize.BOOLEAN
      }
    });

    const StudentTeacher = sequelize.define("student_teacher", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
    });
    //apply a Super Many-to-Many relationship between Student and Teacher (https://sequelize.org/master/manual/advanced-many-to-many.html#many-to-many-to-many-relationships-and-beyond)
    Student.belongsToMany(Teacher, { through: StudentTeacher });
    Teacher.belongsToMany(Student, { through: StudentTeacher });
    StudentTeacher.belongsTo(Student);
    StudentTeacher.belongsTo(Teacher);
    Student.hasMany(StudentTeacher);
    Teacher.hasMany(StudentTeacher);

    // const Notification = sequelize.define("notification", {
    //   id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    //   },
    //   body: {
    //     type: Sequelize.STRING,
    //   }
    // });
    
    //apply a Super Many-to-Many relationship between Notification and StudentTeacher (https://sequelize.org/master/manual/advanced-many-to-many.html#many-to-many-to-many-relationships-and-beyond)
    // NotificationStudentTeacher.belongsToMany(StudentTeacher, { through: NotificationStudentTeacher });
    // StudentTeacher.belongsToMany(NotificationStudentTeacher, { through: NotificationStudentTeacher });
    // NotificationStudentTeacher.belongsTo(NotificationStudentTeacher);
    // NotificationStudentTeacher.belongsTo(StudentTeacher);
    // NotificationStudentTeacher.hasMany(NotificationStudentTeacher);
    // StudentTeacher.hasMany(NotificationStudentTeacher);

    return Teacher;
    return Student;
    return StudentTeacher;
    // return Notification; 
  };

//https://sequelize.readthedocs.io/en/v3/api/associations/belongs-to-many/
//https://stackoverflow.com/questions/22958683/how-to-implement-many-to-many-association-in-sequelize 

