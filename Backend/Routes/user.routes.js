const { Router } = require("express");
const { UserModel } = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const userController = Router();

userController.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  const exist1 = await UserModel.find({ email });
  if (exist1.length > 0) {
    res.send("Already regestered please Login");
  } else {
    bcrypt.hash(password, 6, async (err, hash) => {
      if (err) {
        res.send("Something Went Wrong");
      }
      const new_user = new UserModel({ email, password: hash, name });
      await new_user.save();
      res.json({ msg: "Signup success" });
    });
  }
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  const hash = user.password;
  bcrypt.compare(password, hash, (err, result) => {
    if (err) {
      res.send("Something Went Wrong");
    }
    if (result) {
      const token = jwt.sign({ userId: user._id }, process.env.SECRET);
      res.json({ message: "Login Success", token });
    } else {
      res.send("Invalid credentials");
    }
  });
});




module.exports = {
  userController
};
