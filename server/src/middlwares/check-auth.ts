import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  const token = <string>req.headers.authorization;
  
  //Try to validate the token and get data
  try {
    const jwtPayload = <any>jwt.verify(token, `${process.env.JWT_KEY}`);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    res.status(401).json({
        message: "Auth failed"
    });
    res.end();
    return;
  }

  next();
};