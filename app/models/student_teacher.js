module.exports = (sequelize, Sequelize) => {
    const StudentTeacher = sequelize.define("student_teacher", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true
      }
    });
    
    Student.belongsToMany(Teacher, { as: 'Teachers', through: { model: StudentTeacher, unique: false }, foreignKey: 'student_id' });
    Teacher.belongsToMany(Student, { as: 'Students', through: { model: StudentTeacher, unique: false }, foreignKey: 'teacher_id' });

    // Student.belongsToMany(Teacher, { through: StudentTeacher });
    // Teacher.belongsToMany(Student, { through: StudentTeacher });

    return StudentTeacher;
  };

//https://sequelize.readthedocs.io/en/v3/api/associations/belongs-to-many/
//https://stackoverflow.com/questions/22958683/how-to-implement-many-to-many-association-in-sequelize 

