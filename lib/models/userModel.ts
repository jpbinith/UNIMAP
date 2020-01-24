import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const baseOptions = {
    discriminatorKey: 'itemtype', // our discriminator key, could be anything
    collection: 'items', // the name of our collection
  };

export const UserSchema = new Schema({
    username: {
        type: String,
        required: "Enter a unique username",
        unique: true
    },
    password: {
        type: String,
        required: "Password must be at least 5 letters"
    },
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String            
    },
    phone: {
        type: Number            
    },
    created_date: {
        type: Date,
        default: Date.now
    }
}, baseOptions);
