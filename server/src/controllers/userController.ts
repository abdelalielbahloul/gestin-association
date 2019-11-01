import { Request, Response, NextFunction, response } from "express";
import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import { User } from '../models/User';

class UserController {
    
    /**
     * login an user users
     */
    public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.json({
            message: "hello it's login"
        });
    }
    /**
     * resgister of users
     */
    public async register(req: Request, res: Response, next: NextFunction): Promise<void> {

        try {
            await bcryptjs.hash(req.body.password, 10, (error, hash) => {
                if (error){
                    console.log(error);
                    if(!req.body.password || !req.body.email || !req.body.firstName || !req.body.lastName){
                        res.json({
                            message: "An error has occured!"
                        });
                        res.end()
                        return
                    }
                    res.sendStatus(500);
                    res.end();
                    return
                }
    
                const user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hash,
                    created_at: new Date(),
                    updated_at: new Date()
                });
    
                user.save()
                    .then( result => {
                        console.log(result);
                        res.json({
                            msg: result
                        })
                        // res.json({
                        //     message: "Register successfully!"
                        // })
                    })
                    .catch( err => {
                        console.log(err);
                        
                        res.json({
                            error: err
                        });
                        res.end()
                        return
                    })
    
            })
           } catch (e) {
               console.log(e);
               
               res.json(e);
               res.end();
               return
           }
        
    }
}

const userController = new UserController();

export default userController;