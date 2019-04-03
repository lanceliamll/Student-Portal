const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema({
  // studentId: {
  //   type: [Schema.Types.ObjectId],
  //   ref: "Student"
  // },
  sectionName: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Section", SectionSchema);
