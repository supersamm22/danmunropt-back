const { Router } = require('express');
const Periodization = require('../../models/Periodization');
const expressJwt = require('express-jwt');
const periodizationRouter = Router();

const requireSignin = expressJwt({
  secret: 'secret',
  periodizationProperty: "auth",
  algorithms: ['HS256']
});
const addPeriodization = async (req, res) => {
  const { week, userId, year, monday, tuesday, wednesday, thursday, friday, saturday, sunday, notes } = req.body;
  if (!userId || !week || !year) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  let periodization = null
  let id = ""
  const h = await Periodization.findOne({ userId, week, year })

  if (h) {
    periodization = h
    id = h._id
  }
  if (periodization == null) {
    periodization = Periodization()
  }

  periodization.week = week
  periodization.year = year
  periodization.userId = userId
  periodization.notes = notes
  periodization.monday = monday
  periodization.tuesday = tuesday
  periodization.wednesday = wednesday
  periodization.thursday = thursday
  periodization.friday = friday
  periodization.saturday = saturday
  periodization.sunday = sunday

  if (id) {
    Periodization.findByIdAndUpdate(id, periodization, {}, function (err) {
      if (err) {
        return res.status(404).json({ msg: err })
      } else {
        return res.status(200).json({ periodization: periodization })
      }
    });
  } else {
    periodization.save((err, periodization) => {
      if (err) {
        return res.status(404).json({ msg: err })
      } else {
        return res.status(200).json({ periodization: periodization })
      }
    })
  }

}
const getPeriodizations = async (req, res) => {
  const { userId, week, year } = req.query;
  if (!userId || !week || !year) {
    return res.status(400).json({ msg: 'Fields are missing' });
  }
  const periodization = await Periodization.find({ userId, week, year })
  if (periodization != null) {
    return res.status(200).json(periodization)
  } else {
    return res.status(404).json({ msg: "Unable to find periodization" })
  }
}

periodizationRouter.get('/', requireSignin, getPeriodizations);
periodizationRouter.post('/', requireSignin, addPeriodization);
module.exports = periodizationRouter;