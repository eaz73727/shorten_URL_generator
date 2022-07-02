const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB)

const db = mongoose.connection

db.on('error', () => {
  console.log('mongoDB error')
})

db.once('open', () => {
  console.log('mongoDB connected!')
})

module.exports = db