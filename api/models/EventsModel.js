import {Schema, model} from "mongoose"

const EventSchema = new Schema([
    {
        name:{
            type:String,
            required:true
        }
    },
    {
        metrics: [
            {
                description:{
                    type:String,
                    required:true
                },
                max_points:{
                    type:Number,
                    required:true
                }
            }
        ]
    },{
        round:{
            type:Number,
            default:0
        }
    },{
        maxRound:{
            type:Number,
            required:true
        }
    },{
        status:{
            type:String,
            enum:["pending","active","done"],
            lowecase:true,
            default:"pending"
        },
    },{
        groups:[]
    },{
        judges:[]
    }
]);

export const EventModel = model("events",EventSchema);