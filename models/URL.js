const mongoose = require('mongoose')
const Schema = mongoose.Schema
const URL_Schema = new Schema({
  origin_URL:{
    type:String,
    require:true
  },
  shorten_URL_code:{
    type:String,
    require:true
  }
}) 

module.exports = mongoose.model('shorten_URL', URL_Schema)