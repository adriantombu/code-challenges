const mongoose = require('mongoose')
const schema = mongoose.Schema({
  id: { type: String, unique: true },
  title: String,
  gender_id: String,
  composition: String,
  sleeve: String,
  photo: String,
  url: String,
  mainColor: { type: String, sparse: true }
}, {timestamps: true})

module.exports = mongoose.model('Product', schema)
