import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import cors from 'cors'
import contactRoutes from "./routes/contactRoutes.js"

const app=express();

app.set("port",(process.env.PORT || 8080))
app.use(cors());
app.use(express.json({limit: "50kb"}));
app.use(express.urlencoded({limit: "50kb", extended: true}));



// app.get("/",(req,res)=>{
//     return res.json({"intro":"hello World"});
// })
app.use("/",contactRoutes);

const start=async()=>{

    const connectionDb=await mongoose.connect(`${process.env.MONGODB_URL}`)
        .then(()=>{
            console.log("MongoDb connected");
        })

    app.listen(app.get("port"),()=>{
        console.log("Listening on port 8080");
    })
}

start();