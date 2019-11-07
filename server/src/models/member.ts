import mongoose, { model, Model, Schema, Document } from "mongoose";

const memberSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    fullName : {
        type: String, 
        required: true
    },
    cin: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        // ref: 'MemberRule',
        required: true
    },
    email: { 
        type: String,
        required: true, 
        unique: true, 
        index: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    created_at: { type: Date, createdAt: true },
    updated_at: { type: Date, updatedAt: true }
});

interface Member extends Document {
    _id: mongoose.Types.ObjectId,
    fullName: string,
    cin: string,
    role: mongoose.Types.ObjectId,
    email: string,
    created_at?: Date,
    updated_at?: Date 
}
export const Member: Model<Member> = model('Member', memberSchema);