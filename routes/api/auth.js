const express = require('express');
const bcrypt = require('bcryptjs');
// import config from '../../config';
const expressJwt = require('express-jwt');
require('dotenv').config();
const jwt = require('jsonwebtoken');
// import auth from '../../middleware/auth';
// User Model
const User = require('../../models/User.js');

// const { JWT_SECRET } = config;

const authRouter = express.Router();


/**
 * @route   POST api/auth/login
 * @desc    Login user
 * @access  Public
 */

authRouter.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password

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

    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: 3600 });
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

