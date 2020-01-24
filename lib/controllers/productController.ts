import * as mongoose from 'mongoose';
import { productSchema } from '../models/productModule';
import { categorySchema } from '../models/categoryModel';
import { Request, Response } from 'express';

const Product = mongoose.model('Product', productSchema);
const Category = mongoose.model('Category', categorySchema);

export class ProductController {

    public addProduct(req: Request, res: Response) {
        Product.findOne({ productName: req.body.productName }, (err, product) => {
            let newProduct = new Product();
            newProduct.productName = req.body.productName;
            newProduct.description = req.body.description;
            if (err) {
                return res.send(err);
            }
            if (product == null) {
                Category.findOne(req.body.cId, (err, category) => {
                    if (err) {
                        res.send(err);
                    }
                    res.json(category);
                    if (category == null) {
                        res.send("Category not exists");
                    } else {
                        newProduct.category = category;
                        newProduct.save((err, product) => {
                            if (err) {
                                res.send(err);
                            }
                            res.json(product);
                        });
                    }
                });
            } else {
                res.send("Product Name already exists");
            }
        });
    }
    public getProducts(req: Request, res: Response) {
        Product.find({}, (err, product) => {
            if (err) {
                res.send(err);
            }
            res.json(product);
        });
    }

    public getProductWithID(req: Request, res: Response) {
        Product.findOne({ productId: req.params.productId }, (err, product) => {
            if (err) {
                res.send(err);
            }
            res.json(product);
        });
    }

    public updateProduct(req: Request, res: Response) {
        Product.findOneAndUpdate({ productId: req.params.productId }, req.body, { new: true }, (err, product) => {
            if (err) {
                res.send(err);
            }
            res.json(product);
        });
    }

    public deleteProduct(req: Request, res: Response) {
        Product.remove({ productId: req.params.productId }, (err, product) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted Product!' });
        });
    }
}