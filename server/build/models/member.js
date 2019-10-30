"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_mongoose_1 = require("ts-mongoose");
const memberSchema = ts_mongoose_1.createSchema({
    _id: ts_mongoose_1.Type.objectId(),
    fullName: ts_mongoose_1.Type.string({ required: true }),
    email: ts_mongoose_1.Type.string({
        required: true,
        unique: true,
        index: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }),
    created_at: ts_mongoose_1.Type.date({ createdAt: true }),
    updated_at: ts_mongoose_1.Type.date({ updatedAt: true })
});
exports.Member = ts_mongoose_1.typedModel('Member', memberSchema);
