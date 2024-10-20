import {Schema, model} from "mongoose"

const EventSchema = new Schema([
    {
        metrics: [
            {
                description:{
                    type:String,
                    require:true
                },
                max_points:{
                    type:Number,
                    require:true
                }
            }
        ]
    },{
        round:{
            type:Number,
            require:true
        }
    },{
        status:{
            type:String,
            enum:["pending","active","done"],
            lowecase:true,
            require:true
        },
    },{
        groups:[]
    },{
        judges:[]
    }
]);

export const EventModel = model("events",EventSchema);