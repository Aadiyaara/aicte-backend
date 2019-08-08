const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const msgSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    by: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Msg', msgSchema);