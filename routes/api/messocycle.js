const { Router } = require('express');
const Messocycle = require('../../models/Messocycle');
const expressJwt = require('express-jwt');
const messocycleRouter = Router();

const requireSignin = expressJwt({
  secret: 'secret',
  messocycleProperty: "auth",
  algorithms: ['HS256']
});
const addMessocycle = async (req, res) => {
  
  const {warm_up,  cool_down,  exercises, userId} = req.body;
  const messocycle =  Messocycle()
  messocycle.warm_up = warm_up
  messocycle.cool_down = cool_down
  messocycle.exercises = exercises
  messocycle.userId = userId
  messocycle.save((err, messocycle) => {
    if (err) {
      return res.status(404).json({ msg: err })
    } else {
      return res.status(200).json({ messocycle: messocycle })
    }
  })            
}
const getMessocycles = async (req, res) => {
  const messocycle = await Messocycle.find({userId:req.query.userId})
  console.log(messocycle)
  if (messocycle != null ) {
    return res.status(200).json(messocycle)
  } else {
    return res.status(404).json({ msg: "Unable to find messocycle" })
  }
}

messocycleRouter.get('/', requireSignin, getMessocycles);
messocycleRouter.post('/',requireSignin ,addMessocycle);
module.exports = messocycleRouter;