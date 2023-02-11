const User = require('../models/User.model')
const bcrypt = require('bcrypt')

module.exports.UserController = {
  register: async (req, res, next) => {
    try {
      const { username, email, password } = req.body
      const usernameCheck = await User.findOne({ username })
      if (usernameCheck) {
        return res.json({ message: 'Username already used', status: false })
      }

      const emailCheck = await User.findOne({ email })

      if (emailCheck) {
        return res.json({ message: 'Email already used', status: false })
      }

      const { BCRYPT_ROUNDS } = process.env

      const hash = await bcrypt.hash(password, Number(BCRYPT_ROUNDS))
      const user = await User.create({
        email,
        username,
        password: hash,
      })
      delete user.password
      return res.json({ status: true, user })
    } catch (error) {
      next(error)
    }
  },

  login: async (req, res, next) => {
    try {
      const { username, password } = req.body
      const user = await User.findOne({ username })
      if (!user) {
        return res.json({
          message: 'Incorrect username or password',
          status: false,
        })
      }

      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (!isPasswordValid) {
        return res.json({
          message: 'Incorrect username or password',
          status: false,
        })
      }
      delete user.password

      return res.json({ status: true, user })
    } catch (error) {}
  },
}
