const mongoose = require('mongoose');
const {Schema} = mongoose;

const MessageSchema = new Schema({
    subject: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: true,
        min: [5, 'The message must have a minimum of 5 characters']
    },
    isRead: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});