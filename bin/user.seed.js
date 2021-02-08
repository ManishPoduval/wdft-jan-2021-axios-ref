// make sure db is connected while seeding
require('../db')
// get my db model
let UserModel = require('../models/User.model')

let mongoose = require('mongoose')
let axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        //console.log(response.data)
        UserModel.insertMany(response.data)
          .then(() => {
              mongoose.connection.close()
          })
    })
    .catch(() => {
        console.log('Error. Something went wrong')
    })