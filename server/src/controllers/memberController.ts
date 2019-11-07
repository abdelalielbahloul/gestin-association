import { Member } from "../models/member"
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

class MemeberController {
    
    /**
     * get all memebers
     */
    public index(req: Request,res: Response) {
        Member.find().select('_id fullName role email created_at updated_at')
            .exec()
            .then( docs => {
                // console.log(docs);
                res.json(docs);
                
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
            cin: req.body.cin,
            role: req.body.role,
            email: req.body.email,
            created_at: new Date(),
            updated_at: new Date()
        });
        await member.save()
            .then( result => {
                // console.log(result);
                
                res.json({
                    msg: "Member created successfully!"
                })
            }).catch(err => {
                console.log(err);
                res.json(err);
                res.end();
            })
    }
    /**
     * get one member
     */
    public async show(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        await Member.findById({ _id: id }).select('_id fullName email created_at updated_at').populate(' role ', ' _id name ')
            .exec()
            .then( result => {
                // console.log(result);
                
                res.json(result);
            })
            .catch( err => {
                // console.log(err);
                
                res.json(err);
                res.end();
            });
    }
    /**
     * update one member
     */
    public async update(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const updatedMember = req.body;
        await Member.updateOne({ _id: id }, { $set: updatedMember}).exec()
        .then( result => {
            
            try {
                console.log(result);
                res.json({
                    message: "Member updated !",
                })
            } catch (error) {
                console.log(error);
                res.json(error)
            }
        })
        .catch( err => {
            console.log(err);
            res.json(err);
            res.end();
        });
    }
    /**
     * edit one field of a member
     */
    public async edit(req: Request, res:Response, next: NextFunction): Promise<void> {
        const id = req.params.id;
        const updatedField = req.body;
        await Member.updateOne({ _id: id}, {$set: updatedField}).exec()
            .then( result => {
                try {
                    console.log(result);
                    res.json({
                        message:"Updated successufully!"
                    })
                    
                } catch (error) {
                    console.log(error);
                    
                }
            })
            .catch( err => {
                console.log(err);
                
            })
    }
    /**
     * delete one member
     */
    public async delete(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        await Member.findByIdAndRemove({ _id: id }).exec()
            .then( result => {
                try {
                    console.log(result);
                    res.json({
                        message: "Memeber deleted!"
                    });
                } catch (error) {
                    console.log(error);
                    
                }
                
            })
            .catch( err => {
                console.log(err);
                
            })
    }
    
}

export const memberController = new MemeberController();
