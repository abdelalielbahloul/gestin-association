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
        this.router.get('/:id', memberController.show);
        this.router.put('/:id', memberController.update);
        this.router.patch('/:id', memberController.edit);
        this.router.delete('/:id', memberController.delete);
    }
}

const memberRoutes = new MemberRoute();
export default memberRoutes.router;