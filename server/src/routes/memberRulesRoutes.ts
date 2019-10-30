import { Router } from "express";
import { memberRulesController } from '../controllers/memberRulesController';

class MemberRoute {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', memberRulesController.index);
        this.router.post('/', memberRulesController.create);
        this.router.get('/:id', memberRulesController.show);
        this.router.put('/:id', memberRulesController.update);
        this.router.patch('/:id', memberRulesController.edit);
        this.router.delete('/:id', memberRulesController.delete);
    }
}

const memberRoutes = new MemberRoute();
export default memberRoutes.router;