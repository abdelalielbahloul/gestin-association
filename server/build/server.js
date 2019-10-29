"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
    }
    routes() {
    }
    start() {
        const port = this.app.get('port');
        this.app.listen(port, () => {
            console.log(`Server runing on port ${port}`);
        });
    }
}
const server = new Server();
server.start();
