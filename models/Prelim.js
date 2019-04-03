const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PrelimSchema = new Schema({
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
  prelimExam: {}
});

module.exports = mongoose.model("Prelim", PrelimSchema);
