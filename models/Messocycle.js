const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  exercise: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  load: { type: Number, required: true },
  rest: { type: Number, required: true },
  tempo: { type: Number, required: true },
  notes: { type: String, required: false ,default: ""}
})

const messocycleSchema = new Schema({
  warmUp: { type: Number, required: true },
  coolDown: { type: Number, required: true },
  date: { type: Date, required: true , default:Date.now},
  userId: {type: String, required: true},
  exercises: { type: [ExerciseSchema]}
})

const Exercise = mongoose.model('Messocycle', messocycleSchema);
module.exports = Exercise;