import { MemberRule } from "../models/memberRule";
import { Request, Response, NextFunction } from "express";
import mongoose  from 'mongoose';

class MemberRulesController {

    /**
     * get all rules
     */
    public async index(req: Request, res: Response, next: NextFunction): Promise<void> {
        await MemberRule.find().select('_id name').exec()
            .then( result => {
                console.log(result);
                try {
                    res.json(result)
                } catch (error) {
                    res.sendStatus(500);
                    res.end();
                }
            })
            .catch( err => {
                console.log(err);
                res.sendStatus(500);
                res.end();
            });
    }
    /**
     * create a rule
     */
    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        const newRule = new MemberRule({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name
        });
        await newRule.save()
            .then( result => {
                console.log(res);
                
               try {
                res.json({
                    message: "a new rule was created!"
                })
               } catch (error) {
                   console.log(error);
                   
                   res.sendStatus(500);
                   res.end();
               }
            })
            .catch( err => {
                console.log(err);
                
                res.sendStatus(500);
                res.end();
            })
    }
    /**
     * get one rule
     */
    public async show(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id = req.params.id;
        await MemberRule.findOne({ _id: id }).select('_id name ').exec()
            .then(result => {
                console.log(result);
                
                try {
                    res.json(result);
                    
                } catch (error) {
                    console.log(error);
                    
                }
            })
            .catch(err => {
                console.log(err);
                
                res.sendStatus(500);
                res.end();
            });
    }
    /**
     * update a rule object
     */
    public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id = req.params.id;
        const updatedRule = req.body;
        await MemberRule.updateOne({ _id: id }, { $set: updatedRule }).exec()
            .then(result => {
                console.log(result);
                
            })
            .catch( err => {
                console.log(err);
                
            })
    }
    /**
     * edit a field of object
     */
    public async edit(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id = req.params.id;
        const updatedField = req.body;
        await MemberRule.updateOne({ _id: id }, { $set: updatedField }).exec()
            .then( result => {
                console.log(result);

                try {
                    res.json({
                        message: "Rule was updated successful!"
                    })  
                } catch (error) {
                    console.log(error);
                    
                    res.sendStatus(500)
                    res.end()
                }              
            })
            .catch( err => {
                console.log(err);
                
                res.sendStatus(500)
                res.end();
            })
    }
    /**
     * delete a rule
     */
    public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id = req.params.id;
        await MemberRule.deleteOne({_id: id }).exec()
            .then( result=> {
                console.log(result);
                
                try {
                    res.json({
                        messsage: "Rulewas deleted"
                    })
                } catch (error) {
                    console.log(error);
                    
                    res.sendStatus(500);
                    res.end();
                }
            })
            .catch( err => {
                console.log(err);
                
                res.sendStatus(500);
                res.end();
            })
    }
}

export const memberRulesController = new MemberRulesController();