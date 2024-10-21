import { Schema,model } from "mongoose";

const GradesSchema = new Schema([
    {
        groupID: {
            type: Schema.Types.ObjectId,
            required: true
        },
        round: {
            type: Number,
            required: true
        },
        eventID: {
            type: Schema.Types.ObjectId,
            required: true
        },
        grades: [
            {
                metricID: {
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