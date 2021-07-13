const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  time: { type: String, required: false },
  steak: { type: String, required: false },
  calories: { type: Number, required: false },
  protein: { type: Number, required: false },
  carbohydrates: { type: Number, required: false },
  fats: { type: Number, required: false },
  comment: { type: String, required: false }
})

const exerciseSchema = new Schema({
  comment: { type: String, required: false },
  userId: { type: String, required: true },
  wake_up: { type: String, required: false },
  alcohol: { type: String, required: false },
  alcohol_detail: { type: String, required: false },
  alcohol_cal: { type: Number, required: false },
  water: { type: Number, required: false },
  date: { type: String, required: true },
  meals: { type: [MealSchema] }
}, { timestamps: true })

const Exercise = mongoose.model('Nutrition', exerciseSchema);
module.exports = Exercise;