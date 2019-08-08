const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    participant: {
        type: Schema.Types.ObjectId,
        ref: 'Participant',
        required: true
    },
    workshop: {
        type: Schema.Types.ObjectId,
        ref: 'Workshop',
        required: true
    },
    options: [
        {
            type: Schema.Types.ObjectId,
            ref: 'FeedbackField'
        }
    ],
    answers: [
        {
            type: String
        }
    ],
    trainer: {
        type: Schema.Types.ObjectId,
        ref: 'Trainer',
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Feedback', feedbackSchema);