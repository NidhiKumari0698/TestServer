const mongoose = require('mongoose');

const ClassData = mongoose.model(
  'ClassData',
  new mongoose.Schema({
    dept: String,
    // sec: String,
    room: String,
    hod: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HodData',
    },
  })
);

module.exports = ClassData;
