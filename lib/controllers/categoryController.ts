import * as mongoose from 'mongoose';
import { categorySchema } from '../models/categoryModel';
import { Request, Response } from 'express';

const Category = mongoose.model('Category', categorySchema);

export class CategoryController {

    public addCategory(req: Request, res: Response) {
        let newCategory = new Category(req.body);
        Category.findOne({categoryName: req.body.categoryName}, (err, category) =>{
            if (err) {
                return res.send(err);
            }
            if (category == null) {
                newCategory.save((err, category) => {
                    if (err) {
                        res.send(err);
                    }
                    res.json(category);
                });
            } else {
                res.send("Category Name already exists");
            }
        });
    }
    public getCategories(req: Request, res: Response) {
        Category.find({}, (err, category) => {
            if (err) {
                res.send(err);
            }
            res.json(category);
        });
    }

    public getCategoryWithID(req: Request, res: Response) {
        Category.findOne({cId: req.params.categoryId}, (err, category) => {
            if (err) {
                res.send(err);
            }
            res.json(category);
        });
    }

    public updateCategory(req: Request, res: Response) {
        Category.findOneAndUpdate({ cId: req.params.categoryId }, req.body, { new: true }, (err, category) => {
            if (err) {
                res.send(err);
            }
            res.json(category);
        });
    }

    public deleteCategory(req: Request, res: Response) {
        Category.remove({ cId: req.params.categoryId }, (err, category) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted category!' });
        });
    }
}