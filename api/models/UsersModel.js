import { Schema, model } from "mongoose";

const UserSchema = new Schema([
    {
        name:{
            type:String,
            require:true    
        }

    },{
        email:{
            type:String,
            require:true   
        }
    },{
        curp:{
            type:String,
            require:true   
        }
    },{
        rol:{
            type:String,
            require:true   
        }
    }
])

export const UserModel = model("users",UserSchema)