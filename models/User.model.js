const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
})

const User = mongoose.model('User', userSchema)
module.exports = User
