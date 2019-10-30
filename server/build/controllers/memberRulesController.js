"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const memberRule_1 = require("../models/memberRule");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
class MemberRulesController {
    /**
     * get all rules
     */
    index(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield memberRule_1.MemberRule.findById({ _id: id }).select('_id name').exec()
                .then(result => {
                console.log(result);
                try {
                    res.json(result);
                }
                catch (error) {
                    res.sendStatus(500);
                    res.end();
                }
            })
                .catch(err => {
                console.log(err);
                res.sendStatus(500);
                res.end();
            });
        });
    }
    /**
     * create a rule
     */
    create(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newRule = new memberRule_1.MemberRule({
                _id: new mongoose_1.default.Types.ObjectId(),
                name: req.body.name
            });
            yield newRule.save()
                .then(result => {
                console.log(res);
                try {
                    res.json({
                        message: "a new rule was created!"
                    });
                }
                catch (error) {
                    console.log(error);
                    res.sendStatus(500);
                    res.end();
                }
            })
                .catch(err => {
                console.log(err);
                res.sendStatus(500);
                res.end();
            });
        });
    }
    /**
     * get one rule
     */
    show(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield memberRule_1.MemberRule.findOne({ _id: id }).select('_id name ').exec()
                .then(result => {
                console.log(result);
                try {
                    res.json(result);
                }
                catch (error) {
                    console.log(error);
                }
            })
                .catch(err => {
                console.log(err);
                res.sendStatus(500);
                res.end();
            });
        });
    }
    /**
     * update a rule object
     */
    update(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    /**
     * edit a field of object
     */
    edit(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    /**
     * delete a rule
     */
    delete(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            memberRule_1.MemberRule.deleteOne({ _id: id }).exec()
                .then(result => {
                console.log(result);
                try {
                    res.json({
                        messsage: "Rulewas deleted"
                    });
                }
                catch (error) {
                    console.log(error);
                    res.sendStatus(500);
                    res.end();
                }
            })
                .catch(err => {
                console.log(err);
                res.sendStatus(500);
                res.end();
            });
        });
    }
}
exports.memberRulesController = new MemberRulesController();
