import { Schema,model } from "mongoose";

const GroupSchema = new Schema([
    {
        name:{
            type:String,
            required:true   
        }
    },{
        id_members:[]
    },{
        leader:{
            type:String,
            required:true
        }
    },{
        round: {
            type: Number,
            default:0
        }
    },{
        grades: []
    }
])

export const GroupModel = model("groups",GroupSchema)