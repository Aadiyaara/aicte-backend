const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quicklinkSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    subHeading: {
        type: String
    },
    link: {
        type: String,
        required: true,
    },
    kind: {
        type: String,
        required: true
    },
    dateCreated: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Quicklink', quicklinkSchema);