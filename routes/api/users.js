const { Router } = require('express');
// User Model
const User = require('../../models/User');
const expressJwt = require('express-jwt');
const userRouter = Router();

/**
 * @route   GET api/users
 * @desc    Get all users
 * @access  Private
 */
//---
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("name isAdmin email reports");
    if (!users) throw Error('No users exist');
    res.json({ users: users });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
//---
const requireSignin = expressJwt({
  secret: 'secret',
  userProperty: "auth",
  algorithms: ['HS256']
});
//---
const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.auth.id)
  if (user instanceof User) {
    if (user.isAdmin) {
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
  const user = await User.findById(req.auth.id)
  if (user instanceof User) {
    if (user.isAdmin) {
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
  const user = await User.findById(req.auth.id)
  user.reports.push(report);
  user.save((err, user) => {
    if (err) {
      return res.status(404).json({ msg: err })
    } else {
      return res.status(200).json({ user: user })
    }
  })
}
const getMyReport = async (req, res) => {
  // we get the user that entered the post.
  const user = await User.findById(req.auth.id)
  if (user instanceof User) {
    const report = user.reports.pop()
    return res.status(200).json({ report })
  } else {
    return res.status(404).json({ msg: "Unable to find user" })
  }
}
const addComment = async (req, res) => {
  const userId = req.query.userId;
  const reportId = req.query.reportId;
  const text = req.body.text;
  const poster = req.auth.id

  const posterData = await User.findById(poster)
  if (posterData instanceof User) {
    const postedBy = posterData.name;
    comment = { postedBy, text }
  } else {
    return res.status(400).json({ msg: "Unable to find poster " })
  }



  const user = await User.findById(userId)
  if (user instanceof User) {
    user.reports.map(report => {
      if (report._id.toString() == reportId.toString()) {
        report.comments.push(comment)
      }
    })
    user.save((err, user) => {
      if (err) {
        return res.status(400).json({ msg: "Unable to add comment" })
      } else {
        return res.status(200).json(comment)
      }
    })
  } else {
    return res.status(400).json({ msg: "Unable to find user" })
  }
}

//only admin can get all the users.
userRouter.get('/', requireSignin, isAdmin, getUsers);
//to add report of the user
userRouter.post('/report', requireSignin, addReport);
//to get his own report
userRouter.get("/myreport", requireSignin, getMyReport);
//add newComment
userRouter.post("/addComment", requireSignin, isAdmin, addComment);

userRouter.get("/isAdmin", requireSignin, checkAdmin)

//that is allowed 
module.exports = userRouter;