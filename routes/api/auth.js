const express = require('express');
const bcrypt = require('bcryptjs');
// import config from '../../config';
const expressJwt = require('express-jwt');
require('dotenv').config();
const jwt = require('jsonwebtoken');
// import auth from '../../middleware/auth';
// User Model
const User = require('../../models/User.js');
const { confirmEmail } = require('../../helper/mailHelper.js');
const mailer = require('../../helper/mailer');

// const { JWT_SECRET } = config;

const authRouter = express.Router();

const createEmailToken = (length = 14) => {
  var text = "";
  var possible = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < length; i++) {
    var sup = Math.floor(Math.random() * possible.length);
    text += i > 0 && sup == i ? "0" : possible.charAt(sup);
  }
  return text;
};


/**
 * @route   POST api/auth/login
 * @desc    Login user
 * @access  Public
 */

authRouter.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password

  console.log(req.body)
  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    // Check for existing user
    const user = await User.findOne({ email });
    if (!user) throw Error('User does not exist');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error('Invalid credentials');

    // you can return later and put JWT_SECRET instead of 'secret'

    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '365d' });
    if (!token) throw Error('Couldnt sign the token');

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
      },
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   POST api/users
 * @desc    Register new user
 * @access  Public
 */

authRouter.post('/register', async (req, res) => {
  console.log(req.body)
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const user = await User.findOne({ email });
    if (user) throw Error('User already exists');

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error('Something went wrong with bcrypt');

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error('Something went wrong hashing the password');

    const newUser = new User({
      name,
      email,
      password: hash,
    });

    const savedUser = await newUser.save();
    if (!savedUser) throw Error('Something went wrong saving the user');

    // you can return later and put JWT_SECRET instead of 'secret'

    const token = jwt.sign({ id: savedUser._id }, 'secret');

    res.status(200).json({
      token,
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email
      },
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

authRouter.post('/forget', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw Error('No user exists');
    var emailToken = user._id + createEmailToken()
    let html = confirmEmail(emailToken, user.name);
    mailer.send(
      "casseglass2021@gmail.com",
      email,
      "Reset password form danmunropt.com",
      html
    ).then(function (response) {
      if (response && response.accepted.length > 0) {
        user.resetToken = emailToken
        User.findByIdAndUpdate(user._id, user, {}, function (err) {
          if (err) {
            return res.status(404).json({ msg: err })
          }
          return res.status(200).json({ msg: "Email sent" })
        })
      } else {
        return res.status(404).json({ msg: "Email failed" })
      }
    }).catch(function (err) {
      return res.status(404).json({ msg: `${err}` })
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

authRouter.post('/reset', async (req, res) => {
  const { password, token } = req.body;
  if (!token || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const user = await User.findOne({ resetToken: token });
    if (!user) throw Error('Invalid token');

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error('Something went wrong with bcrypt');

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error('Something went wrong hashing the password');

    user.resetToken = ""
    user.password = hash

    User.findByIdAndUpdate(user._id, user, {}, function (err) {
      if (err) {
        return res.status(404).json({ msg: err })
      } else {
        return res.status(200).json({ msg: "Password changed" })
      }
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

/**
 * @route   GET api/auth/user
 * @desc    Get user data
 * @access  Private
 */

authRouter.get('/user', async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) throw Error('User does not exist');
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = authRouter;

exports.requireSignin = expressJwt({
  secret: 'secret',
  userProperty: "auth",
  algorithms: ['HS256']
});

