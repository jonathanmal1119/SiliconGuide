const mongoose = require('mongoose');

const options = { discriminatorKey: 'category', collection: 'parts' };

const basePartSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: Number, default: null },
  link: { type: String }
}, options);

const Part = mongoose.model('Part', basePartSchema);
module.exports = Part;
