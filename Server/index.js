import express from "express"//we are using type:module so we can use import export
import dotenv from "dotenv"
import connectDB from "./Configs/ConnectDB.js"
import authRouter from "./Routes/auth.route.js"
import cookieParser from "cookie-parser"
dotenv.config()
const app=express()
app.use(express.json())
app.use(cookieParser())
app.get("/",(req,res)=>{
    res.json("Hello from server")
})
app.use("/api/auth",authRouter)
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server Started on port ${PORT}`)
    connectDB()
})