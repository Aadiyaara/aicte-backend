const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workshopSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    trainers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Trainer'
        }
    ],
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Participant'
        }
    ],
    dates: {
        type: String,
        required: true
    },
    report: {
        type: Schema.Types.ObjectId,
        ref: 'Report'
    },
    feedback: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Feedback'
        }
    ],
    certificates: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Certificate'
        }
    ],
    dateCreated: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Workshop', workshopSchema)