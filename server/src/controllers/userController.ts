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
    /**
     * resgister of users
     */
    public register(req: Request, res: Response, next: NextFunction) {
        res.json({
            message: "Hello! it's register"
        })
    }
}

const userController = new UserController();

export default userController;