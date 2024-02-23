import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
dotenv.config()
const app = express();

// parsing json data
app.use(express.json());
app.use(cookieParser());
// connect to db
mongoose.connect("mongodb+srv://shashankbisht53734:lzRAJ3TigKM1sbqt@cluster0.w6soca5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
   useUnifiedTopology: true
}).then(()=>{
    console.log("connected")
}).catch((err)=>{
console.log(err)
})

// using middleware
app.use('/api/user',userRoutes)

app.listen(8080,()=>{
    console.log("listen")
})

app.get('/api/refetch',(req,res)=>{
    if(!req.cookies || !req.cookies.access_token){
        return res.status(400).json({error:'No token'})
    }
    const token = req.cookies.access_token;
    jwt.verify(token,"shanky",{},async(err,data)=>{
        if(err){
            return res.status(400).json({error:'Invalid token'})
        }
        res.status(200).json(data)
    })
})

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server Error'
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    })
})