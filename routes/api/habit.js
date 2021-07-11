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
  Habit.findOne({ userId, week }).then((n) => {
    habit = n
  }).catch(() => { })
  if (habit == null) {
    habit = Habit()
  }

  habit.week = week
  habit.habits = habits
  habit.userId = userId
  habit.update((err, habit) => {
    if (err) {
      return res.status(404).json({ msg: err })
    } else {
      return res.status(200).json({ habit: habit })
    }
  })
}
const getHabits = async (req, res) => {
  const { userId, week } = req.query;
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

habitRouter.get('/', requireSignin, getHabits);
habitRouter.post('/', requireSignin, addHabit);
module.exports = habitRouter;