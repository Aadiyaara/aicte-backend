const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reportSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    workshop: {
        type: Schema.Types.ObjectId,
        ref: 'Workshop'
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    trainer: {
        type: Schema.Types.ObjectId,
        ref: 'Trainer',
        required: true
    },
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Participant'
        }
    ],
    options: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ReportField'
        }
    ],
    answers: [
        {
            type: String
        }
    ],
    dates: {
        type: String,
        required: true
    },
    attendances: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Attendance'
        },
    ],
    dateCreated: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Report', reportSchema)