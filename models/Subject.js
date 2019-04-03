const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  studentId: {},
  schedule: {},
  prelimGrade: {},
  midtermGrade: {},
  finalGrade: {},
  overallGrade: {}
});

module.exports = mongoose.model("Admin", SubjectSchema);
