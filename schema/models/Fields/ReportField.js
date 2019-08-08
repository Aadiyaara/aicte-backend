const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reportFieldSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    options: [
        {
            type: String,
            required: true
        }
    ],
    dateCreated: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('ReportField', reportFieldSchema)