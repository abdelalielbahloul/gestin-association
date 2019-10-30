import { Member } from "../models/member"
import { Request, Response } from "express";
import mongoose from "mongoose";

class MemeberController {
    
    /**
     * get all memebers
     */
    public index(req: Request,res: Response) {
        Member.find().select('_id fullName email created_at updated_at')
            .exec()
            .then( docs => {
                // console.log(docs);
                res.json({
                    count: docs.length,
                    memberInfos: docs
                });
                
            }).catch( err => {
                console.log(err);
                res.json(err);
                res.end()
                
            })
    }
    /**
     * create a new memeber
     */
    public async create(req: Request, res: Response): Promise<void> {
        const member = new Member({
            _id: new mongoose.Types.ObjectId(),
            fullName: req.body.fullName,
            email: req.body.email,
            created_at: new Date(),
            updated_at: new Date()
        });
        await member.save()
            .then( result => {
                console.log(result);
                
                res.json({
                    msg: "Member created successfully!"
                })
            }).catch(err => {
                console.log(err);
                res.json(err);
                res.end();
            })
    }
    
}

export const memberController = new MemeberController();
