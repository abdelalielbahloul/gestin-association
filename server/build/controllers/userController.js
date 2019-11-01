"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const bcryptjs_1 = tslib_1.__importDefault(require("bcryptjs"));
const User_1 = require("../models/User");
class UserController {
    /**
     * login an user users
     */
    login(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            res.json({
                message: "hello it's login"
            });
        });
    }
    /**
     * resgister of users
     */
    register(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield bcryptjs_1.default.hash(req.body.password, 10, (error, hash) => {
                    if (error) {
                        console.log(error);
                        if (!req.body.password || !req.body.email || !req.body.firstName || !req.body.lastName) {
                            res.json({
                                message: "An error has occured!"
                            });
                            res.end();
                            return;
                        }
                        res.sendStatus(500);
                        res.end();
                        return;
                    }
                    const user = new User_1.User({
                        _id: new mongoose_1.default.Types.ObjectId(),
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: hash,
                        created_at: new Date(),
                        updated_at: new Date()
                    });
                    user.save()
                        .then(result => {
                        console.log(result);
                        res.json({
                            msg: result
                        });
                        // res.json({
                        //     message: "Register successfully!"
                        // })
                    })
                        .catch(err => {
                        console.log(err);
                        res.json({
                            error: err
                        });
                        res.end();
                        return;
                    });
                });
            }
            catch (e) {
                console.log(e);
                res.json(e);
                res.end();
                return;
            }
        });
    }
}
const userController = new UserController();
exports.default = userController;
