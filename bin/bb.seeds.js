// 1. Connect to your db

require('../db/index.js')

// 2. Get your Model

const BBModel = require('../models/BB.model.js')

// 3. Close the connection once you're done with seeding

// Use axios to get data from external server
const axios = require('axios')
const mongoose = require('mongoose')

axios.get('https://www.breakingbadapi.com/api/characters')
  .then((response) => {
      BBModel.insertMany(response.data)
        .then(() => {
          console.log('Data inserted')
          mongoose.connection.close()
        
        })
        .catch(() => {
          console.log('Err while inserting')
          mongoose.connection.close()
        })
  })
  .catch(() => {
      console.log('Err while fetching')
  })