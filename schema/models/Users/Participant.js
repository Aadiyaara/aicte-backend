const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const participantSchema = new Schema({
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
    }
})

module.exports = mongoose.model('Participant', participantSchema);