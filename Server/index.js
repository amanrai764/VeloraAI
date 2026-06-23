import express from "express"//we are using type:module so we can use import export
import dotenv from "dotenv"
import connectDB from "./Configs/ConnectDB.js"
dotenv.config()
const app=express()
const PORT=process.env.PORT
app.get("/",(req,res)=>{
    res.json("Hello from server")
})
app.listen(PORT,()=>{
    console.log(`Server Started on port ${PORT}`)
    connectDB()
})