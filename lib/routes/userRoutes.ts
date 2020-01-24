import { Request, Response } from "express";
import { UserController } from "../controllers/userController";

export class userRoutes {

    public userController: UserController = new UserController();

    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })
        // Contact 
        app.route('/user')
            // GET endpoint 
            .get(this.userController.getContacts)
            // POST endpoint
            .post(this.userController.addNewUser)

        // get a specific contact
        app.route('/user/:userId')
            .get(this.userController.getContactWithID)
            // update a specific contact
            .put(this.userController.updateContact)
            // delete a specific contact
            .delete(this.userController.deleteContact)
    }
}