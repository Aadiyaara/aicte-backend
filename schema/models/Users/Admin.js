const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateJoined: {
        type: String,
        required: true
    },
    actions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Action'
        }
    ]
})

module.exports = mongoose.model('Admin', adminSchema);