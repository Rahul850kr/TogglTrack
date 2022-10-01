
const {userController} = require("./Routes/user.routes");
const {connection} = require("./configs/db")
const express = require("express");
const cors = require("cors")
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Homepage")
});

app.use("/user",userController)

app.listen(PORT,async ()=>{
    try{
        await connection;
        console.log("Connected To DB Success")
    }
    catch(err){
        console.log("Failed to connect to DB")
    }
    console.log(`Listening on port ${PORT}`)
});