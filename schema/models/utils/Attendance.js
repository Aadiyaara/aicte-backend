const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    participant: {
        type: Schema.Types.ObjectId,
        ref: 'Participant',
        required: true
    },
    trainer: {
        type: Schema.Types.ObjectId,
        ref: 'Trainer',
        required: true
    },
    workshop: {
        type: Schema.Types.ObjectId,
        ref: 'Workshop'
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
    },
    status: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Attendance', attendanceSchema);