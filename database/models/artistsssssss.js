const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const albumSchema = require('./album');
const artistSchema = new Schema({
  name: { type: String, trim: true },
  age: { type: Number },
  yearsActive: { type: Number },
  image: { type: String, trim: true },
  genre: { type: String, trim: true },
  website: { type: String, trim: true },
  netWorth: { type: Number },
  labelName: { type: String, trim: true },
  retired: { type: Boolean },
  albums: [albumSchema]
}, {
  timestamps: true
});


module.exports = mongoose.model('Artist', artistSchema);