const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MidtermSchema = new Schema({
  studentId: {},
  quiz1: {},
  quiz2: {},
  quiz3: {},
  totalQuiz: {},
  recitation1: {},
  recitation2: {},
  recitation3: {},
  totalRecitation: {},
  assignment1: {},
  assignment2: {},
  totalAssignment: {},
  project: {},
  classStanding: {},
  midtermExam: {},
  classAverage: {},
  midtermGrade: {}
});

module.exports = mongoose.model("Midterm", MidtermSchema);
