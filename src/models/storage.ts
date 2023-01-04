import { Schema, Types, model, Model } from "mongoose";
import { Storage } from "../interface/storage";

const StorageSchema = new Schema<Storage>(
    {

    },
    {
        timestamps: true,
        versionKey: false
    }
)

const StorageModel = model('storage', StorageSchema);
export default StorageModel