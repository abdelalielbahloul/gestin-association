import mongoose, { model, Model, Schema, Document } from "mongoose";

const memberRuleSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String, required: true}
});

interface MemberRule extends Document{
    _id: mongoose.Schema.Types.ObjectId,
    name: string,
}

export const MemberRule: Model<MemberRule> = model('MemberRule', memberRuleSchema);