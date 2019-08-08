const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    subHeading: {
        type: String
    },
    bold: {
        type: String
    },
    link: {
        type: String
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    images: [
        {
            type: String
        }
    ],
    status: {
        type: String,
        required: true
    },
    dateCreated: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Announcement', announcementSchema);