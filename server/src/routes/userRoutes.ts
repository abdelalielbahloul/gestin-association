import { Router } from "express";
import userController from '../controllers/userController';


class UserRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(){
        this.router.post('/login', userController.login);
        this.router.post('/register', userController.register);

    }
}

const userRouters = new UserRoutes();
export default userRouters.router;