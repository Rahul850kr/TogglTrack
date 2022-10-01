const express = require('express')

const clientrouter = express.Router()


const { authentication } = require('../Middlewares/authentication')
const UserModel = require('../Models/UserModel')
const { ClientModel } = require('../Models/Client')



clientrouter.post("/",authentication,async(req, res)=>{
    const {name} = req.body
    const p = req.body.userId
    try{
          const out = await ClientModel.create({name,clientofuser:p})
         return res.status(200).json(out)
    }catch(e){
         return  res.status(400).json({ msg:"Something went wrong"})
    }
})


clientrouter.get("/",authentication,async(req, res)=>{
 
    const p = req.body.userId
    try{
          const out = await ClientModel.find({clientofuser:p}).populate("clientofuser")
          return res.status(200).json(out)
    }catch(e){
          return res.status(400).json({ msg:"Something went wrong"})
    }
})



clientrouter.delete("/:id",authentication,async(req, res)=>{
    const p = req.body.userId
    try{
          const out = await ClientModel.findOneAndDelete({_id:req.params.id,clientofuser:p})
          res.status(200).json(out)
    }catch(e){
           res.status(400).json({ msg:"Something went wrong"})
    }
})


module.exports = clientrouter