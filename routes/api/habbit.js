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
  const {week, userId, habbits} = req.body;
  if (!userId || !week  || !habbits) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  let habbit = null 
  Habbit.findOne({userId,week}).then((n) => {
    habbit = n
  }).catch(()=>{  })
  if(habbit == null ){
    habbit = Habbit()
  }

  habbit.week = week
  habbit.habbits = habbits
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
  const { userId, week  } = req.query;
  if (!userId || !week ) {
    return res.status(400).json({ msg: 'Fields are missing' });
  }
  const habbit = await Habbit.find({userId,week})
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