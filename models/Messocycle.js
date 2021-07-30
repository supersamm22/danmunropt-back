const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessocycleSchema = new Schema({
  exercise: { type: String, required: false },
  sets: { type: Number, required: false },
  reps: { type: Number, required: false },
  load: { type: Number, required: false },
  rest: { type: Number, required: false },
  tempo: { type: Number, required: false },
  notes: { type: String, required: false, default: "" }
})

const messocycleSchema = new Schema({
  warm_up: { type: Number, required: false },
  cool_down: { type: Number, required: false },
  date: { type: Date, required: true, default: Date.now },
  userId: { type: String, required: true },
  exercises: { type: [MessocycleSchema] }
}, { timestamps: true })

const Messocycle = mongoose.model('Messocycle', messocycleSchema);
module.exports = Messocycle;