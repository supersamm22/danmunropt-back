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
  
  const {wakeUp,   alcoholTotal,  water,  exercises, userId} = req.body;
  const messocycle =  Messocycle()
  messocycle.wakeUp = wakeUp
  messocycle.alcoholTotal = alcoholTotal
  messocycle.water = water
  messocycle.exercises = exercises
  messocycle.userId = userId
  console.log(messocycle)
  messocycle.save((err, messocycle) => {
    if (err) {
      return res.status(404).json({ msg: err })
    } else {
      return res.status(200).json({ messocycle: messocycle })
    }
  })            
}
const getMessocycles = async (req, res) => {
  // we get the messocycle that entered the post.
  const messocycle = await Messocycle.find({userId:req.query.userId})
  console.log(messocycle)
  if (messocycle != null ) {
    return res.status(200).json(messocycle)
  } else {
    return res.status(404).json({ msg: "Unable to find messocycle" })
  }
}
const addComment = async (req, res) => {
  const messocycleId = req.query.messocycleId; 
  const reportId = req.query.reportId;
  const text = req.body.text;
  const poster = req.auth.id

  const posterData = await Messocycle.findById(poster)
  if (posterData instanceof Messocycles) {
    const postedBy = posterData.name;
    comment = { postedBy, text }
  } else {
    return res.status(400).json({ msg: "Unable to find poster " })
  }

  const messocycle = await Messocycles.findById(messocycleId)
  if (messocycle instanceof Messocycles) {
    messocycle.reports.map(report => {
      if (report._id.toString() == reportId.toString()) {
        report.comments.push(comment)
      }
    })
    messocycle.save((err, messocycle) => {
      if (err) {
        return res.status(400).json({ msg: "Unable to add comment" })
      } else {
        return res.status(200).json(comment)
      }
    })
  } else {
    return res.status(400).json({ msg: "Unable to find messocycle" })
  }
}

//only admin can get all the messocycles.
messocycleRouter.get('/', requireSignin, getMessocycles);
//to add report of the messocycle
messocycleRouter.post('/',requireSignin ,addMessocycle);

//that is allowed 
module.exports = messocycleRouter;