"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const userController_1 = tslib_1.__importDefault(require("../controllers/userController"));
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/login', userController_1.default.login);
        this.router.post('/register', userController_1.default.register);
    }
}
const userRouters = new UserRoutes();
exports.default = userRouters.router;
