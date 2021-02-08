const mongoose = require('mongoose')
require('./User.model')

let PostSchema = new mongoose.Schema({
    comment: String, 
    myUserId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'user'
    }
}) 

let PostModel = mongoose.model('post', PostSchema)

module.exports = PostModel


