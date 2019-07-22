const mongoose = require('mongoose');

const HodData = mongoose.model(
  'HodData',
  new mongoose.Schema({
    name: String,
    dept: String,
    // joiningyear: String,
  })
);

module.exports = HodData;
