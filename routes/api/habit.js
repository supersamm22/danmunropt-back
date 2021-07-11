const { Router } = require('express');
const Habit = require('../../models/Habit');
const expressJwt = require('express-jwt');
const habitRouter = Router();

const requireSignin = expressJwt({
  secret: 'secret',
  habitProperty: "auth",
  algorithms: ['HS256']
});
const addHabit = async (req, res) => {
  const { week, userId, habits } = req.body;
  if (!userId || !week || !habits) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  let habit = null
  let id = ""
  console.log("1")
  const h = await Habit.findOne({ userId, week })
  console.log("h", h)

  if (h) {
    habit = h
    id = h._id
  }
  if (habit == null) {
    habit = Habit()
  }

  habit.week = week
  habit.habits = habits
  habit.userId = userId
  console.log("3")

  if (id) {
    Habit.findByIdAndUpdate(id, habit, {}, function (err) {
      if (err) {
        return res.status(404).json({ msg: err })
      } else {
        return res.status(200).json({ habit: habit })
      }
    });
  } else {
    console.log("4")
    habit.save((err, habit) => {
      if (err) {
        return res.status(404).json({ msg: err })
      } else {
        return res.status(200).json({ habit: habit })
      }
    })
  }
  console.log("10")

}
const getHabits = async (req, res) => {
  const { userId, week } = req.query;
  console.log(req.query)
  if (!userId || !week) {
    return res.status(400).json({ msg: 'Fields are missing' });
  }
  const habit = await Habit.find({ userId, week })
  console.log(habit)
  if (habit != null) {
    return res.status(200).json(habit)
  } else {
    return res.status(404).json({ msg: "Unable to find habit" })
  }
}

habitRouter.get('/', getHabits);
habitRouter.post('/', addHabit);
module.exports = habitRouter;