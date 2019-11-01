import { Router } from "express";
import userController from '../controllers/userController';


class UserRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(){
        this.router.post('/login', userController.login);
    }
}

const userRouters = new UserRoutes();
export default userRouters.router;