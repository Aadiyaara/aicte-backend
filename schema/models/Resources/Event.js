const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    trainer: {
        type: Schema.Types.ObjectId,
        ref: 'Trainer'
    },
    workshop: {
        type: Schema.Types.ObjectId,
        ref: 'Workshop'
    },
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Participant'
        }
    ],
    date: {
        type: String,
        required: true
    },
    report: {
        type: Schema.Types.ObjectId,
        ref: 'Report'
    },
    dateCreated: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Event', eventSchema)