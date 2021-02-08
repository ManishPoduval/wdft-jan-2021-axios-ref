const router = require("express").Router();
const BBModel = require('../models/BB.model.js')
const axios = require('axios')
/* GET characters page */

router.get("/characters", (req, res, next) => {
  //fetch all the characters from our db
      BBModel.find()
        .then((characters) => {
            res.render('characters.hbs', {characters})
        })
        .catch((error) => {
              next(error)
        })
});

router.get("/quotes", (req, res, next) => {
  // fetch all the quotes from bb's server

  axios.get('https://www.breakingbadapi.com/api/quotes')
    .then((result) => {
      // directly show an hbs page to the user
      res.render('quotes.hbs', {quotes: result.data})
    })
    .catch((error) => {
          next(error)
    })

});

module.exports = router;

