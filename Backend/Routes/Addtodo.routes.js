const express = require('express')
const { authentication } = require('../Middlewares/authentication')
const UserModel = require('../Models/UserModel')
const TodoModel = require('../Models/TodoModel')

const Addtodorouter = express.Router()

Addtodorouter.get("/todo", authentication,async (req, res)=>{
    try{
        const p = req.body.userId
        const out = await TodoModel.find({Author:p})
        res.status(200).json(out)
    }catch(e){
        res.status(400).json({ msg:"Something went wrong"})
    }
   
})

Addtodorouter.post("/todo",authentication,async(req, res)=>{
      const {NAME,TEMPLATE,VISIBILITY,Client} = req.body
      const p = req.body.userId
      try{
            const out = await TodoModel.create({NAME,TEMPLATE,VISIBILITY,Client,Author:p})
            res.status(200).json(out)
      }catch(e){
             res.status(400).json({ msg:"Something went wrong"})
      } 
})

Addtodorouter.delete("/todo/:id", authentication,async (req, res)=>{
     
     try{
        const p = req.body.userId
        await TodoModel.findOneAndDelete({Author:p,_id:req.params.id})
        res.status(200).json({msg:"Deleted"})
     }catch(e){
        res.status(400).json({ msg:"Something went wrong"})
     }
    
    
})



module.exports = Addtodorouter