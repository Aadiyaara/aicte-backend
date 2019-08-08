const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const certificateSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subHeading: {
        type: String
    },
    organization: {
        type: Schema.Types.ObjectId,
        ref: 'Organization',
        required: true
    },
    workshop: {
        type: Schema.Types.ObjectId,
        ref: 'Workshop',
        required: true
    },
    dates: {
        type: String,
        required: true
    },
    dated: {
        type: String,
        required: true
    },
    images: [
        {
            type: String
        }
    ]
})

module.exports = mongoose.model('Certificate', certificateSchema);