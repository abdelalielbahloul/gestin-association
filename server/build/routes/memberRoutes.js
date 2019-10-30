"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const memberController_1 = require("../controllers/memberController");
class MemberRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', memberController_1.memberController.index);
        this.router.post('/', memberController_1.memberController.create);
        this.router.get('/:id', memberController_1.memberController.show);
        this.router.put('/:id', memberController_1.memberController.update);
        this.router.patch('/:id', memberController_1.memberController.edit);
        this.router.delete('/:id', memberController_1.memberController.delete);
    }
}
const memberRoutes = new MemberRoute();
exports.default = memberRoutes.router;
