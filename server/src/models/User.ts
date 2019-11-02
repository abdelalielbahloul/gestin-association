import mongoose, { model, Model, Schema, Document, mongo } from "mongoose";

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { 
        type: String, 
        required: true
    },
    lastName: { 
        type: String, 
        required: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        index: true
    },
    password: { 
        type: String, 
        required: true 
    },
    created_at: { type: Date, createdAt: true },
    updated_at: { type: Date, updatedAt: true }
})

interface User extends Document {
    _id: mongoose.Schema.Types.ObjectId,
    firstName: string,
    lastName: string,
    email: string
    password: string,
    created_at: Date,
    updated_at: Date
}

export const User: Model<User> = model('User', userSchema);