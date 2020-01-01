import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

export const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    cId: {
        type: Number,
        default: 0,
        unique: true
    }
});

autoIncrement.initialize(mongoose.connection);
categorySchema.plugin(autoIncrement.plugin, {
    model: 'categorySchema',
    field: 'cId',
    startAt: 1,
    incrementBy: 1
  });