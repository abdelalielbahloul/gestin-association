"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const member_1 = require("../models/member");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
class MemeberController {
    /**
     * get all memebers
     */
    index(req, res) {
        member_1.Member.find().select('_id fullName email created_at updated_at')
            .exec()
            .then(docs => {
            // console.log(docs);
            res.json({
                count: docs.length,
                memberInfos: docs
            });
        }).catch(err => {
            console.log(err);
            res.json(err);
            res.end();
        });
    }
    /**
     * create a new memeber
     */
    create(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const member = new member_1.Member({
                _id: new mongoose_1.default.Types.ObjectId(),
                fullName: req.body.fullName,
                email: req.body.email,
                created_at: new Date(),
                updated_at: new Date()
            });
            yield member.save()
                .then(result => {
                console.log(result);
                res.json({
                    msg: "Member created successfully!"
                });
            }).catch(err => {
                console.log(err);
                res.json(err);
                res.end();
            });
        });
    }
}
exports.memberController = new MemeberController();
