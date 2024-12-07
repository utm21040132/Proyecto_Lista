import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UsersController from './controllers/UsersController.js';
import EventsController from './controllers/EventsController.js';
import GroupsController from  './controllers/GroupsController.js';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Conectado c="));

app.use(cors());
app.use(helmet());
app.use(express.json());


app.get("/", (req,res)=>{
    res.send("Is not working (it is)")
})

app.get("/user/list", UsersController.getUsers)
app.post("/user/register", UsersController.register)
app.post("/user/login", UsersController.login)
app.put("/user/updatePorfile/:id", UsersController.updateProfile)

app.get("/event/list", EventsController.getEvents)
app.post("/event/create", EventsController.createEvent)
app.post("/event/:idEvent/:idGroup")

app.get("/group/list/", GroupsController.getGroups)

app.listen(4000, ()=>console.log("Server is running"))
