import * as mongoose from 'mongoose';
import { categorySchema } from '../models/categoryModel';

const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

export const productSchema = new Schema({
    productId: {
        type: Number,
        default: 0,
        unique: true
    },
    productName: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },category: {
        type: categorySchema,
        ref: 'Category'
    }
});

autoIncrement.initialize(mongoose.connection);
productSchema.plugin(autoIncrement.plugin, {
    model: 'productSchema',
    field: 'productId',
    startAt: 1,
    incrementBy: 1
  });