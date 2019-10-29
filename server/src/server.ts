import express, { Application } from "express";

class Server {

    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);

    }
    routes(): void {

    }
    start(): void {
        const port = this.app.get('port');
        this.app.listen(port, () => {
            console.log(`Server runing on port ${port}`);
            
        })
    }
}

const server = new Server();
server.start();