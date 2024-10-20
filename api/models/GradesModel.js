import { Schema,model } from "mongoose";

const GradesSchema = new Schema([
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true
        },
        event: {
            type: Schema.Types.ObjectId,
            required: true
        },
        round: {
            type: Number,
            required: true
        },
        grades: [
            {
                metric: {
                    type: Schema.Types.ObjectId,
                    required: true
                },
                score: {
                    type: Number,
                    required: true
                }
            }
        ]
    }
]);

export const CalificationsModel = model('grades', GradesSchema);