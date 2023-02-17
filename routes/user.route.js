const { Router } = require('express')
const { UserController } = require('../controllers/user.controller')

const router = Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/setAvatar/:id', UserController.setAvatar)
router.get('/allUsers/:id', UserController.allUsers)

module.exports = router
