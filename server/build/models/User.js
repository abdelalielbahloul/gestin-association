"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const userSchema = new mongoose_1.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
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
    created_at: { createdAt: true },
    updated_at: { updatedAt: true }
});
exports.User = mongoose_1.model('User', userSchema);
