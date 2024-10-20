import { Schema,model } from "mongoose";

const GroupSchema = new Schema([
    {
        name:{
            type:String,
            require:true   
        }
    },{
        participants:[{
            type:Schema.Types.ObjectId,
        }
        ]
    },{
        round: {
            type: Number,
            required: true
        }
    },{
        grades: [
            {
                type: Schema.Types.ObjectId,
            }
        ]
    }
])

export const GroupModel = model("groups",GroupSchema)