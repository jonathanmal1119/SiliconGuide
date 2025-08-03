const mongoose = require('mongoose');
const Part = require('./Part');

const gpuSchema = new mongoose.Schema({
  vram: Number,
  core_clock: Number,
  tdp: Number
});

const GPUPart = Part.discriminator('GPU', gpuSchema);
module.exports = GPUPart;
