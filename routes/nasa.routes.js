const router = require("express").Router();

// so that we are able to use the `process.env` variable here
require("dotenv").config()
const axios = require('axios')

/* GET home page */
router.get("/mars", (req, res, next) => {
    let key = process.env.NASA_KEY
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${key}`)
        .then((result) => {
            // actual response is in result.data
            res.render('nasa.hbs', {photos: result.data.photos})
        })
        .catch((err) => {
          next(err)
        })


});

module.exports = router;
