"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const memberRoutes_1 = tslib_1.__importDefault(require("./routes/memberRoutes"));
class Server {
    constructor() {
        this.options = {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
            autoIndex: true,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 10,
            // If not connected, return errors immediately rather than waiting for reconnect
            bufferMaxEntries: 0,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            family: 4 // Use IPv4, skip trying IPv6
        };
        this.app = express_1.default();
        this.config();
        this.routes();
        this.connection();
    }
    config() {
        dotenv_1.default.config(); //geting the envirenements variables from the .env file
        this.app.set('port', process.env.PORT);
        this.app.use(morgan_1.default('dev'));
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
    }
    routes() {
        this.app.use('/members', memberRoutes_1.default);
    }
    start() {
        const port = this.app.get('port');
        this.app.listen(port, () => {
            console.log(`Server runing on port ${port}`);
        });
    }
    connection() {
        mongoose_1.default.set('useNewUrlParser', true);
        mongoose_1.default.connect(`${process.env.DATABASE}`, this.options);
    }
}
const server = new Server();
server.start();
