const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionSchema = new Schema({
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: true,
    },
    actionText: {
        type: String,
        required: true,
    },
    dateExecuted: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Action', actionSchema);