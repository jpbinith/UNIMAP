import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { Request, Response } from 'express';
import hash = require('sha1');

const Contact = mongoose.model('User', UserSchema);
export class UserController {

    public addNewUser(req: Request, res: Response) {
        req.body.password = hash(req.body.password);
        let newContact = new Contact(req.body);
        Contact.findOne({ username: req.body.username }, (err, contact) => {
            if (err) {
                return res.send(err);
            }
            if (contact == null) {
                newContact.save((err, contact) => {
                    if (err) {
                        res.send(err);
                    }
                    res.json(contact);
                });
            } else {
                res.send("username already exists");
            }
        })
    }

    public getContacts(req: Request, res: Response) {
        Contact.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public getContactWithID(req: Request, res: Response) {
        Contact.findById(req.params.userId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public updateContact(req: Request, res: Response) {
        Contact.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public deleteContact(req: Request, res: Response) {
        Contact.remove({ _id: req.params.userId }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    }
}