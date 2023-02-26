const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const socket = require('socket.io')
const userRoute = require('./routes/user.route')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

/* app.use(require('./routes/booking.route'))
app.use(require('./routes/car.route'))
app.use(require('./routes/dialog.route'))
app.use(require('./routes/user.route')) */

app.use('/api/auth', userRoute)
app.use('/api/messages', require('./routes/messages.route'))

const PORT = process.env.PORT || 5000

mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log('База подключена')
  })
  .catch((e) => {
    console.log(e.toString())
  })

const server = app.listen(PORT, (err) => {
  if (err) {
    return console.log(err.toString())
  }
  console.log(`Сервер запущен на порту ${PORT}`)
})

const io = socket(server, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
  },
})

global.onlineUsers = new Map()

io.on('connection', (socket) => {
  global.chatSocket = socket
  socket.on('add-user', (userId) => {
    onlineUsers.set(userId, socket.id)
  }),
    socket.on('send-msg', (data) => {
      const sendUserSocket = onlineUsers.get(data.to)
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit('msg-receive', data.message)
      }
    })
})
