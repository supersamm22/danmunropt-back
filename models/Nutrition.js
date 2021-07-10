const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  time: { type: Date, required: true },
  steak: { type: String, required: true },
  calories: { type: Number, required: true },
  protein: { type: Number, required: true },
  carbohydrates: { type: Number, required: true },
  fats: { type: Number, required: true }
})

const exerciseSchema = new Schema({
  userId: { type: String, required: true },
  wake_up: { type: Date, required: true },
  alcohol: { type: Boolean, required: true },
  alcoholCal: { type: Number, required: true },
  water: { type: Number, required: true },
  date: { type: String, required: true },
  meals: { type: [MealSchema]}
})

const Exercise = mongoose.model('Nutrition', exerciseSchema);
module.exports = Exercise;