import * as express from "express";
import * as bodyParser from "body-parser";
import { userRoutes } from "./routes/userRoutes";
import { categoryRoutes } from "./routes/categoryRoutes";
import { productRoutes } from "./routes/productRoutes";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public userRoute: userRoutes = new userRoutes();
    public categoryRoute: categoryRoutes = new categoryRoutes();
    public productRoute: productRoutes = new productRoutes();
    public mongoUrl: string = 'mongodb://localhost/UNIMAP';

    constructor() {
        this.app = express();
        this.config();
        this.userRoute.routes(this.app);
        this.categoryRoute.routes(this.app);
        this.productRoute.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;