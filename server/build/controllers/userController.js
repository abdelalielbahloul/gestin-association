"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const bcryptjs_1 = tslib_1.__importDefault(require("bcryptjs"));
const User_1 = require("../models/User");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
class UserController {
    /**
     * login an user users
     */
    login(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const email = req.body.email;
                yield User_1.User.find({ email: email }).exec()
                    .then(user => {
                    if (user.length < 1) {
                        res.json({
                            message: "Auth failed"
                        });
                        res.end();
                        return;
                    }
                    bcryptjs_1.default.compare(req.body.password, user[0].password, (error, result) => {
                        if (error) {
                            res.json({
                                message: "Auth failed"
                            });
                            res.end();
                            return;
                        }
                        if (result) {
                            const payLoad = {
                                email: user[0].email,
                                userId: user[0].password
                            };
                            const token = jsonwebtoken_1.default.sign(payLoad, `${process.env.JWT_KEY}`, { expiresIn: "1H" });
                            return res.json({
                                message: "Auth success!",
                                token: token
                            });
                        }
                    });
                })
                    .catch(er => {
                    console.log(er);
                    res.sendStatus(500);
                    res.end();
                    return;
                });
                // res.json(userLoged);
            }
            catch (e) {
                console.log(e);
            }
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
                        // console.log(result);
                        res.json({
                            msg: "Register successful!"
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
