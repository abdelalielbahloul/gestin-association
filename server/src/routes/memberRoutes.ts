import { Router } from "express";
import { memberController } from "../controllers/memberController";

class MemberRoute {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', memberController.index);
        this.router.post('/', memberController.create);
    }
}

const memberRoutes = new MemberRoute();
export default memberRoutes.router;