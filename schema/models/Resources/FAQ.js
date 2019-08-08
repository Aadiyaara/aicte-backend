const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const faqSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    link: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('FAQ', faqSchema);