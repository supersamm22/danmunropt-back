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
  const report = req.body.data;
  const habbit = await Habbits.findById(req.auth.id)
  habbit.reports.push(report);
  habbit.save((err, habbit) => {
    if (err) {
      return res.status(404).json({ msg: err })
    } else {
      return res.status(200).json({ habbit: habbit })
    }
  })
}
const getHabbits = async (req, res) => {
  // we get the habbit that entered the post.
  console.log(req)
  const habbit = await Habbits.find()
  console.log(habbit)
  if (habbit != null ) {
    const report = habbit.pop()
    return res.status(200).json({ report })
  } else {
    return res.status(404).json({ msg: "Unable to find habbit" })
  }
}
const addComment = async (req, res) => {
  const habbitId = req.query.habbitId;
  const reportId = req.query.reportId;
  const text = req.body.text;
  const poster = req.auth.id

  const posterData = await Habbits.findById(poster)
  if (posterData instanceof Habbits) {
    const postedBy = posterData.name;
    comment = { postedBy, text }
  } else {
    return res.status(400).json({ msg: "Unable to find poster " })
  }

  const habbit = await Habbits.findById(habbitId)
  if (habbit instanceof Habbits) {
    habbit.reports.map(report => {
      if (report._id.toString() == reportId.toString()) {
        report.comments.push(comment)
      }
    })
    habbit.save((err, habbit) => {
      if (err) {
        return res.status(400).json({ msg: "Unable to add comment" })
      } else {
        return res.status(200).json(comment)
      }
    })
  } else {
    return res.status(400).json({ msg: "Unable to find habbit" })
  }
}

//only admin can get all the habbits.
habbitRouter.get('/habbits', requireSignin, getHabbits);
//to add report of the habbit
habbitRouter.put('/habbits', requireSignin, addHabbit);

//that is allowed 
module.exports = habbitRouter;