"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const memberRulesController_1 = require("../controllers/memberRulesController");
class MemberRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', memberRulesController_1.memberRulesController.index);
        this.router.post('/', memberRulesController_1.memberRulesController.create);
        this.router.get('/:id', memberRulesController_1.memberRulesController.show);
        this.router.put('/:id', memberRulesController_1.memberRulesController.update);
        this.router.patch('/:id', memberRulesController_1.memberRulesController.edit);
        this.router.delete('/:id', memberRulesController_1.memberRulesController.delete);
    }
}
const memberRoutes = new MemberRoute();
exports.default = memberRoutes.router;
