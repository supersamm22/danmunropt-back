const { Router } = require('express');
const Messocycle = require('../../models/Messocycle');
const expressJwt = require('express-jwt');
const messocycleRouter = Router();
const Mongoose = require('mongoose');

const requireSignin = expressJwt({
  secret: 'secret',
  messocycleProperty: "auth",
  algorithms: ['HS256']
});
const addMessocycle = async (req, res) => {
  const { warm_up, cool_down, exercises, userId } = req.body;
  if (!userId || !exercises) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }
  const messocycle = Messocycle()
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
const editMessocycle = async (req, res) => {
  const { warm_up, cool_down, exercises, userId, _id } = req.body;
  if (!userId || !exercises || !_id) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }
  const messocycle = await Messocycle.findById(_id)
  if (!messocycle) {
    return res.status(400).json({ msg: 'Not found' });
  }
  messocycle.warm_up = warm_up
  messocycle.cool_down = cool_down
  messocycle.exercises = exercises
  messocycle.userId = userId
  Messocycle.findByIdAndUpdate(messocycle._id, messocycle, {}, function (err) {
    if (err) {
      return res.status(404).json({ msg: err })
    } else {
      return res.status(200).json({ messocycle: messocycle })
    }
  })
}

const getMessocycles = async (req, res) => {
  if (!req.query.userId) {
    return res.status(404).json({ msg: "Id required" })
  }
  const messocycle = await Messocycle.find({ userId: req.query.userId })
  console.log(messocycle)
  if (messocycle != null) {
    return res.status(200).json(messocycle)
  } else {
    return res.status(404).json({ msg: "Unable to find messocycle" })
  }
}
const deleteMessocycles = async (req, res) => {
  const { _id } = req.body;
  console.log(req.body, req.query)
  if (!_id) {
    return res.status(400).json({ msg: 'Id is required' });
  }
  // return res.status(200).json({ msg: 'Id is required' });
  Messocycle.deleteOne({ _id: Mongoose.Types.ObjectId(_id) }, function (err) {
    if (err) return res.status(400).json({ msg: `${err}` });
    return res.status(200).json({ msg: "deleted" })
  });
}

messocycleRouter.get('/', requireSignin, getMessocycles);
messocycleRouter.post('/', requireSignin, addMessocycle);
messocycleRouter.delete('/', requireSignin, deleteMessocycles);
messocycleRouter.put('/', requireSignin, editMessocycle);

module.exports = messocycleRouter;