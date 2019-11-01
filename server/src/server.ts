import express, { Application, Request, Response, NextFunction } from "express";
import dotenv  from "dotenv";
import morgan from "morgan";
import bodyParser from 'body-parser';
import mongoose  from "mongoose";
import cors from "cors";

import memberRoutes from "./routes/memberRoutes";
import memberRulesRoutes from "./routes/memberRulesRoutes";
import userRoutes from "./routes/userRoutes";


class Server {

    public app: Application;
    public options :any = {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
        autoIndex: true, // Don't build indexes
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        reconnectInterval: 500, // Reconnect every 500ms
        poolSize: 10, // Maintain up to 10 socket connections
        // If not connected, return errors immediately rather than waiting for reconnect
        bufferMaxEntries: 0,
        connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4 // Use IPv4, skip trying IPv6
      };

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.connection();
    }

    config(): void {
        dotenv.config();//geting the envirenements variables from the .env file
        this.app.set('port', process.env.PORT);
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.urlencoded({ extended: false}));
        this.app.use(bodyParser.json());
        this.app.use(cors())
        this.app.use( (req: Request, res:Response, next:NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
                'Access-Control-Allow-Headers',
                'origin, X-Requested-With, Content-Type, Accept, Authorization'
            );
            if(req.method === 'OPTIONS'){
                res.header('Access-Control-Allow-Methods', 'GET, PUT, DELETE, PATCH, POST');
                return res.status(200).json({});
            }

            next();
        });

    }
    routes(): void {
        this.app.use('/members', memberRoutes);
        this.app.use('/memberRules', memberRulesRoutes);
        this.app.use('/user', userRoutes);

    }
    start(): void {
        const port = this.app.get('port');
        this.app.listen(port, () => {
            console.log(`Server runing on port ${port}`);
            
        })
    }

    connection(): void {
        mongoose.set('useNewUrlParser', true);
        mongoose.connect( `${process.env.DATABASE}`, this.options);
    }
}

const server = new Server();
server.start();