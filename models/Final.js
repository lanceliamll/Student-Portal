const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FinalSchema = new Schema({
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
  finalExam: {},
  classAverage: {},
  finalGrade: {}
});

module.exports = mongoose.model("Final", FinalSchema);
