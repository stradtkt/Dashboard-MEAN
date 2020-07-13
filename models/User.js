const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: [1, 'You must have at least 1 letter for your first name']
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: [1, 'You must have at least 1 letter for your last name']
    },
    email: {
        type: String,
        required: true,
        trim: true,
        min: [2, 'You must have at least 2 letter for your email address']
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: [4, 'You must have at least 4 letter for your password'],
        max: [10, 'You must have 10 or less for your password']
    }
});

module.exports = User = mongoose.model('User', UserSchema);