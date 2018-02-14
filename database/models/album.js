const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title: { type: String, trim: true },
  date: { type: Date },
  copiesSolid: { type: Number },
  numberTracks: { type: Number },
  image: { type: String, trim: true },
  revenue: { type: Number }
}, {
  timestamps: true
});

module.exports = albumSchema;
