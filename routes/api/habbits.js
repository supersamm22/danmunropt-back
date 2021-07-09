const { Router } = require('express');
const Habbit = require('../../models/Habbit');
const expressJwt = require('express-jwt');
const habbitRouter = Router();

const getHabbits = async (req, res) => {
  try {
    const habbits = await Habbits.find().select("name isAdmin email reports");
    if (!habbits) throw Error('No habbits exist');
    res.json({ habbits: habbits });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
//---
const requireSignin = expressJwt({
  secret: 'secret',
  habbitProperty: "auth",
  algorithms: ['HS256']
});
//---
const isAdmin = async (req, res, next) => {
  const habbit = await Habbits.findById(req.auth.id)
  if (habbit instanceof Habbits) {
    if (habbit.isAdmin) {
      next()
    } else {
      return res.status(403).json({ msg: "Unauthorized access!" })
    }
  } else {
    return res.status(404).json({ msg: "Connection Error" })
  }

}
//---
const checkAdmin = async (req, res) => {
  const habbit = await Habbits.findById(req.auth.id)
  if (habbit instanceof Habbits) {
    if (habbit.isAdmin) {
      res.status(200).json({ isAdmin: true })
    } else {
      return res.status(403).json({ msg: "Unauthorized access!" })
    }
  } else {
    return res.status(404).json({ msg: "Connection Error" })
  }

}
//---
const addReport = async (req, res) => {
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
const getMyReport = async (req, res) => {
  // we get the habbit that entered the post.
  const habbit = await Habbits.findById(req.auth.id)
  if (habbit instanceof Habbits) {
    const report = habbit.reports.pop()
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
habbitRouter.get('/', requireSignin, isAdmin, getHabbits);
//to add report of the habbit
habbitRouter.post('/report', requireSignin, addReport);
//to get his own report
habbitRouter.get("/myreport", requireSignin, getMyReport);
//add newComment
habbitRouter.post("/addComment", requireSignin, isAdmin, addComment);

habbitRouter.get("/isAdmin", requireSignin, checkAdmin)

//that is allowed 
module.exports = habbitRouter;