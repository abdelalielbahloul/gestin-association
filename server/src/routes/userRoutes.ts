import { Router } from "express";
import userController from '../controllers/userController';


class UserRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/login', userController.login);
        this.router.post('/register', userController.register);

    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;