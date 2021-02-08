const mongoose = require('mongoose')

let BBSchema = new mongoose.Schema({
      name: String, 
      img: String,
      nickname: String
})


let BBModel = mongoose.model('bbcharacter', BBSchema)

module.exports = BBModel