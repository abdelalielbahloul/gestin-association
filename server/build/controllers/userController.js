"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    /**
     * login an user users
     */
    login(req, res, next) {
        res.json({
            message: "hello it's login"
        });
    }
}
const userController = new UserController();
exports.default = userController;
