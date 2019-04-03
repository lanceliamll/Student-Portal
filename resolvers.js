const Student = require("./models/Student");

module.exports = {
  Query: {
    //Get Students
    getStudents: async (root, args, ctx) => {
      const students = await Student.find({});
      return students;
    }
  },

  Mutation: {
    //Register Students
    registerStudent: async (root, args, ctx) => {
      const newStudent = await new Student({
        ...args.input
      }).save();
      return newStudent;
    }
  }
};
