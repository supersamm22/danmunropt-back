const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const periodizationSchema = new Schema({
  userId: { type: String, required: true },
  week: { type: Number, required: true },
  year: { type: Number, required: true },
  monday: { type: Number, required: false },
  tuesday: { type: Number, required: false },
  wednesday: { type: Number, required: false },
  thursday: { type: Number, required: false },
  friday: { type: Number, required: false },
  saturday: { type: Number, required: false },
  sunday: { type: Number, required: false },
  notes: { type: String, required: false }
}, { timestamps: true })

const Periodization = mongoose.model('Periodization', periodizationSchema);
module.exports = Periodization;