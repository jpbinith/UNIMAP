import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Base = require('./userModel');

export const studentSchema = Base.discriminator(new Schema({
    batch: {
        type: String,
        required: true,
        unique: true
    }
}));