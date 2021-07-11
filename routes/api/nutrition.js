const { Router } = require('express');
const Nutrition = require('../../models/Nutrition');
const expressJwt = require('express-jwt');
const nutritionRouter = Router();

const requireSignin = expressJwt({
  secret: 'secret',
  nutritionProperty: "auth",
  algorithms: ['HS256']
});
const addNutrition = async (req, res) => {
  const { userId, wake_up, alcohol, alcohol_cal, water, date, meals, comment } = req.body;
  if (!userId || !wake_up || !water || !date || !meals) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  let nutrition = Nutrition()
  let id = ""
  const n = await Nutrition.findOne({ userId: userId, date: date })
  if (n) {
    id = n._id
    nutrition = n
  }

  nutrition.wake_up = wake_up
  nutrition.comment = comment
  nutrition.alcohol = alcohol
  nutrition.alcohol_cal = alcohol_cal
  nutrition.water = water
  nutrition.meals = meals
  nutrition.date = date
  nutrition.userId = userId

  if (id) {
    Nutrition.findByIdAndUpdate(id, nutrition, {}, function (err) {
      if (err) {
        return res.status(404).json({ msg: err })
      } else {
        return res.status(200).json({ nutrition: nutrition })
      }
    });
  } else {
    nutrition.save((err, nutrition) => {
      if (err) {
        return res.status(404).json({ msg: err })
      } else {
        return res.status(200).json({ nutrition: nutrition })
      }
    })
  }
}
const getNutritions = async (req, res) => {
  const { userId, date } = req.query;
  if (!userId || !date) {
    return res.status(400).json({ msg: 'Fields are missing' });
  }
  const nutrition = await Nutrition.find({ userId, date })
  console.log(nutrition)
  if (nutrition != null) {
    return res.status(200).json(nutrition)
  } else {
    return res.status(404).json({ msg: "Unable to find nutrition" })
  }
}

nutritionRouter.get('/', requireSignin, getNutritions);
nutritionRouter.post('/', requireSignin, addNutrition);
module.exports = nutritionRouter;