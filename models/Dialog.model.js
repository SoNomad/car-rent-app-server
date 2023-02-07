const mongoose = require('mongoose')

const dialogWindowSchema = mongoose.Schema({
  admin: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    default: '',
  },
  client: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  messages: {
    type: Array,
    required: true,
  },
})

const Dialog = mongoose.model('Dialog', dialogWindowSchema)
module.exports = Dialog
