"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jwt = tslib_1.__importStar(require("jsonwebtoken"));
exports.checkAuth = (req, res, next) => {
    //Get the jwt token from the head
    const token = req.headers.authorization;
    //Try to validate the token and get data
    try {
        const jwtPayload = jwt.verify(token, `${process.env.JWT_KEY}`);
        res.locals.jwtPayload = jwtPayload;
    }
    catch (error) {
        //If token is not valid, respond with 401 (unauthorized)
        res.status(401).json({
            message: "Auth failed"
        });
        res.end();
        return;
    }
    next();
};
