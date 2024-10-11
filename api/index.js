import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Conectado c="));

app.use(cors());
app.use(helmet());

app.get("/", (req,res)=>{
    res.send("Is not working (it is)")
})

app.listen(4000, ()=>console.log("Server is running"))
