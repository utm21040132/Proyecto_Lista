import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true    
    },
    email: {
        type: String,
        required: true   
    },
    curp: {
        type: String,
        required: true   
    },
    rol: {
        type: String,
        enum: ["administrator", "participant", "judge"],
        lowercase: true,
        required: true   
    },
    password: {
        type: String,
        required: true
    }
});

export const UserModel = model("users", UserSchema);
