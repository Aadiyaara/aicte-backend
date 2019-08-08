const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const querySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    authorInvolved: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    dateCreated: {
        type: String,
        required: true
    },
    dateResolved: {
        type: String
    },
    status: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Query', querySchema);