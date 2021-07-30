const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeakSchema = new Schema({
  name: { type: String, required: false },
  monday: { type: Number, required: false },
  tuesday: { type: Number, required: false },
  wednesday: { type: Number, required: false },
  thursday: { type: Number, required: false },
  friday: { type: Number, required: false },
  saturday: { type: Number, required: false },
  sunday: { type: Number, required: false },
  points: { type: Number, required: false }
})

const habitSchema = new Schema({
  userId: { type: String, required: true },
  week: { type: Number, required: true },
  year: { type: Number, required: true, default: 2021 },
  min: { type: Number, required: false },
  date: { type: Date, required: true, default: Date.now },
  habits: { type: [WeakSchema] }
}, { timestamps: true })

const Habit = mongoose.model('Habit', habitSchema);
module.exports = Habit;