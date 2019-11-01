import { Request, Response, NextFunction, response } from "express";
import mongoose from "mongoose";

class UserController {
    
    /**
     * login an user users
     */
    public login(req: Request, res: Response, next: NextFunction) {
        res.json({
            message: "hello it's login"
        });
    }
}

const userController = new UserController();

export default userController;