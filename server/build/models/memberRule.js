"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const memberRuleSchema = new mongoose_1.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    name: { type: String, required: true }
});
exports.MemberRule = mongoose_1.model('MemberRule', memberRuleSchema);
