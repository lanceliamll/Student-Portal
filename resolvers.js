const Student = require("./models/Student");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Create Token
const createToken = (student, secret, expiresIn) => {
  const { studentId, password } = student;
  return jwt.sign({ studentId, password }, secret, { expiresIn });
};

module.exports = {
  Query: {
    //Get Students
    getStudents: async (root, args, ctx) => {
      const students = await Student.find({});
      return students;
    }
  },

  Mutation: {
    //Login Student
    signinStudent: async (root, { studentId, password }, ctx) => {
      const student = await Student.findOne({ studentId });

      if (!student) {
        throw new Error("Student not Found!");
      }

      const isValid = await bcrypt.compare(password, student.password);

      if (!isValid) {
        throw new Error("Incorrect Password!");
      }

      return {
        token: createToken(student, process.env.SECRET, "1hr")
      };
    },

    //Register Students
    registerStudent: async (
      root,
      { studentId, firstName, lastName, email, password },
      ctx
    ) => {
      //Verify if the Student ID is Unique
      const student = await Student.findOne({ studentId });
      if (student) {
        throw new Error("Student already exists with this Student ID.");
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const newStudent = await new Student({
        studentId,
        firstName,
        lastName,
        email,
        password: hashedPassword
      }).save();
      return {
        token: createToken(newStudent, process.env.SECRET, "1hr")
      };
    }
  }
};
