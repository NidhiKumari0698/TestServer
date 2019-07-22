const mongoose = require('mongoose');

const StudentData = mongoose.model(
  'StudentData',
  new mongoose.Schema({
    name: String,
    email: String,
    rollNo: String,
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ClassData',
    },
  })
);

module.exports = StudentData;
