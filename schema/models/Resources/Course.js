const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    blogs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Blog'
        },
    ],
    trainers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Trainer'
        }
    ],
    workshops: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Trainer'
        }
    ],
    dateCreated: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Course', courseSchema);