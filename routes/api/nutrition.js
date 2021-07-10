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
  const { userId, wake_up, alcohol,alcoholCal, water, date, meals  } = req.body;
  if (!userId || !wake_up || !alcohol || !alcoholCal || !water || !date || !meals) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  let nutrition = null 
  Nutrition.findOne({userId,date}).then((n) => {
    nutrition = n
  }).catch(()=>{  })

  nutrition.wake_up = wake_up
  nutrition.alcohol = alcohol
  nutrition.alcoholCal = alcoholCal
  nutrition.water = water
  nutrition.meals = meals
  nutrition.date = date
  nutrition.userId = userId
  nutrition.save((err, nutrition) => {
    if (err) {
      return res.status(404).json({ msg: err })
    } else {
      return res.status(200).json({ nutrition: nutrition })
    }
  })            
}
const getNutritions = async (req, res) => {
  const { userId, date  } = req.query;
  if (!userId || !date ) {
    return res.status(400).json({ msg: 'Fields are missing' });
  }
  const nutrition = await Nutrition.find({userId,date})
  console.log(nutrition)
  if (nutrition != null ) {
    return res.status(200).json(nutrition)
  } else {
    return res.status(404).json({ msg: "Unable to find nutrition" })
  }
}

nutritionRouter.get('/', requireSignin, getNutritions);
nutritionRouter.post('/',requireSignin ,addNutrition);
module.exports = nutritionRouter;