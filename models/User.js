const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const { Schema } = mongoose;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  reports: [
    {
      bp_dystolic: {
        type: Number,
        required: true,
      },
      bp_systolic: {
        type: Number,
        required: true,
      },
      daily_steps: {
        type: Number,
        required: true,
      },
      digestion: {
        type: String,
        required: true,
      },
      energy_evening: {
        type: String,
        required: true,
      },
      energy_midday: {
        type: String,
        required: true,
      },
      energy_morning: {
        type: String,
        required: true,
      },
      exercise_complience: {
        type: String,
        required: true,
      },
      hunger: {
        type: String,
        required: true,
      },
      libido_evening: {
        type: String,
        required: true,
      },
      libido_morning: {
        type: String,
        required: true,
      },
      medicaton: {
        type: String,
        required: true,
      },
      morning_weight: {
        type: Number,
        required: true,
      },
      resting_heart_rate: {
        type: Number,
        required: true,
      },
      satiety: {
        type: String,
        required: true
      },
      session_enthusiasm: {
        type: String,
        required: true
      },
      sleep_duration: {
        type: String,
        required: true
      },
      sleep_quality: {
        type: String,
        required: true
      },
      stress_evening: {
        type: String,
        required: true
      },
      stress_midday: {
        type: String,
        required: true
      },
      stress_morning: {
        type: String,
        required: true
      },
      training_energy: {
        type: String,
        required: true,
      },
      waist_circumference: {
        type: Number,
        required: true,
      },
      report_date: {
        type: Date,
        default: Date.now,
      },
      comments: [
        {
          text: String,
          created: { type: Date, default: Date.now },
          postedBy: { type: String, required: true }
        }
      ]
    }
  ]
});

module.exports = mongoose.model('User', UserSchema);
