require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

require('./models/Product')

app.use('/', require('./routes'))

app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404

  next(err)
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json({status: err.status, error: err.message})
})

app.listen(port)
