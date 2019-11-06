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
        member_1.Member.find().select('_id fullName email created_at updated_at').populate(' role ', ' _id name ')
            .exec()
            .then(docs => {
            // console.log(docs);
            res.json(docs);
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
                cin: req.body.cin,
                role: req.body.role,
                email: req.body.email,
                created_at: new Date(),
                updated_at: new Date()
            });
            yield member.save()
                .then(result => {
                // console.log(result);
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
    /**
     * get one member
     */
    show(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield member_1.Member.findById({ _id: id }).select('_id fullName email created_at updated_at').populate(' role ', ' _id name ')
                .exec()
                .then(result => {
                // console.log(result);
                res.json(result);
            })
                .catch(err => {
                // console.log(err);
                res.json(err);
                res.end();
            });
        });
    }
    /**
     * update one member
     */
    update(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const updatedMember = req.body;
            yield member_1.Member.updateOne({ _id: id }, { $set: updatedMember }).exec()
                .then(result => {
                try {
                    console.log(result);
                    res.json({
                        message: "Member updated !",
                    });
                }
                catch (error) {
                    console.log(error);
                    res.json(error);
                }
            })
                .catch(err => {
                console.log(err);
                res.json(err);
                res.end();
            });
        });
    }
    /**
     * edit one field of a member
     */
    edit(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const updatedField = req.body;
            yield member_1.Member.updateOne({ _id: id }, { $set: updatedField }).exec()
                .then(result => {
                try {
                    console.log(result);
                    res.json({
                        message: "Updated successufully!"
                    });
                }
                catch (error) {
                    console.log(error);
                }
            })
                .catch(err => {
                console.log(err);
            });
        });
    }
    /**
     * delete one member
     */
    delete(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield member_1.Member.findByIdAndRemove({ _id: id }).exec()
                .then(result => {
                try {
                    console.log(result);
                    res.json({
                        message: "Memeber deleted!"
                    });
                }
                catch (error) {
                    console.log(error);
                }
            })
                .catch(err => {
                console.log(err);
            });
        });
    }
}
exports.memberController = new MemeberController();
