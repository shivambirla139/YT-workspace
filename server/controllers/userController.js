const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (username=='' || email=='' || password=='') {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }
  const usernameAvailable = await User.findOne({ username });
  if (usernameAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({ message: "Register the user" });
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    if (email === '' || password === '') {
      res.status(400).json({ error: 'All fields are mandatory!' });
      return;
    }
    try {
      const user = await User.findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
          {
            user: {
              username: user.username,
              email: user.email,
              id: user.id,
            },
          },
          process.env.ACCESS_TOKEN_SECRET, // Use environment variable for JWT secret
          { expiresIn: '15m' }
        );
  
        // Remove sensitive information from the user object
        delete user.password;
  
        res.status(200).json({ user, accessToken });
      } else {
        res.status(401).json({ error: 'Email or password is not valid' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error! Something went wrong.' });
    }
  });
const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };