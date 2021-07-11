const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeakSchema = new Schema({
  name: {type: String, required: true},
  monday: { type: Number, required: true },
  tuesday: { type: Number, required: true },
  wednesday: { type: Number, required: true },
  thursday: { type: Number, required: true },
  friday: { type: Number, required: true },
  saturday: { type: Number, required: true },
  sunday: { type: Number, required: true },
  points: { type: Number, required: true }
})

const exerciseSchema = new Schema({
  userId: { type: String, required: true },
  week: { type: Number, required: true },
  date: { type: Date, required: true , default:Date.now},
  habits: { type: [WeakSchema]}
})

const Exercise = mongoose.model('Habit', exerciseSchema);
module.exports = Exercise;