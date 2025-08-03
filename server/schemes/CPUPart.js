const mongoose = require('mongoose');
const Part = require('./Part');

const cpuSchema = new mongoose.Schema({
  cores: Number,
  core_clock: Number,
  boost_clock: { type: Number, default: null },
  tdp: Number
});

const CPUPart = Part.discriminator('CPU', cpuSchema);
module.exports = CPUPart;
