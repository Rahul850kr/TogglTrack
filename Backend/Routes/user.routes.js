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
    res.status(400).json("Already regestered please Login");
  } else {
    bcrypt.hash(password, 6, async (err, hash) => {
      if (err) {
        res.status(400).json("Already regestered please Login");
      }
      const new_user = new UserModel({ email, password: hash, name });
      await new_user.save();
      res.status(200).json({ msg: "Signup success" });
    });
  }
});

userController.post("/login", async (req, res) => {
  
  const {email,password} = req.body
   try{
    const oldUser= await UserModel.findOne({email})
    
    if(!oldUser){
      return res.status(404).json("User not found")
    }
   
    const hashedpassword = await bcrypt.compare(password, oldUser.password)

    if(!hashedpassword){
        return res.status(404).json("Password incorrect")
      }
      const token = jwt.sign({ userId:oldUser._id}, process.env.SECRET) 
      return res.status(200).json({message:"Login Success",token}) 
   }catch(err){
          return res.status(404).json("Something went wrong")
   }
});




module.exports = {
  userController
};
