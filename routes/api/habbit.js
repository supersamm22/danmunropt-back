const { Router } = require('express');
const Habbit = require('../../models/Habbit');
const expressJwt = require('express-jwt');
const habbitRouter = Router();

const requireSignin = expressJwt({
  secret: 'secret',
  habbitProperty: "auth",
  algorithms: ['HS256']
});
const addHabbit = async (req, res) => {
  
  const {warm_up,  cool_down,  exercises, userId} = req.body;
  const habbit =  Habbit()
  habbit.warm_up = warm_up
  habbit.cool_down = cool_down
  habbit.exercises = exercises
  habbit.userId = userId
  habbit.save((err, habbit) => {
    if (err) {
      return res.status(404).json({ msg: err })
    } else {
      return res.status(200).json({ habbit: habbit })
    }
  })            
}
const getHabbits = async (req, res) => {
  const habbit = await Habbit.find({userId:req.query.userId})
  console.log(habbit)
  if (habbit != null ) {
    return res.status(200).json(habbit)
  } else {
    return res.status(404).json({ msg: "Unable to find habbit" })
  }
}

habbitRouter.get('/', requireSignin, getHabbits);
habbitRouter.post('/',requireSignin ,addHabbit);
module.exports = habbitRouter;