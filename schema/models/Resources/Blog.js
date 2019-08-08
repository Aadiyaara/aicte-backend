const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    subHeading: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    bold: {
        type: String
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    },
    links: [
        {
            type: String
        }
    ],
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

module.exports = mongoose.model('Blog', blogSchema);