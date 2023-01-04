import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interface/user.interface";

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true 
        },
        description: {
            type: String,
            default: 'this is a description'
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const userModel = model('user', UserSchema);
export default userModel