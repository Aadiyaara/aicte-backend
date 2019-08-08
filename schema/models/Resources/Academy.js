const mongoose = require('mongoose')
const Schema = mongoose.Schema

const academySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    states: [
        {
            type: String,
            required: true
        }
    ],
    workshops: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Workshop'
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

module.exports = mongoose.model('Academy', academySchema)