const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
      name: String, 
      email: String, 
      phone: String, 
      website: String, 
      username: String
}) 

let UserModel = mongoose.model('user', UserSchema)
module.exports = UserModel