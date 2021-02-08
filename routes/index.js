const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// create a GET /createPost 

const PostModel = require('../models/Post.model');

router.get('/createpost', (req, res, next) => {
    // trying to hard code and create a post linked to a user
    // we wont ever do this. Once auth
    PostModel.create({comment: 'This was hard to grasp', myUserId: '602135a74a545b1d9c80adc0' })
      .then(() => {
          res.send('Data inserted in Post model')
      })
      .catch((err) => {
        next(err)
      })
})

router.get('/display', (req, res, next) => {

      //Note: populate() takes the schema key as a parameter that has a reference to another collection. 

      // without Populate your output would look like
      /*
      {
          "_id": "602140658a88173fd8c44665",
          "comment": "This was hard to grasp",
          "myUserId": "602135a74a545b1d9c80adc0",
          "__v": 0
      }
      */

     
      // With populate it basically will 
       /*
       1. grab the value of that key, in our case "myUserId" , 
       2. look for the schema and see if has been refernced
       3. Find a value in that model same as the  value of "myUserId"
       4. and finnaly will popualte the result in the"myUserId" value itself
      /*
      {
          "_id": "602140658a88173fd8c44665",
          "comment": "This was hard to grasp",
          "myUserId": {
                "_id": "602135a74a545b1d9c80adc0",
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "__v": 0
          },
          "__v": 0
      }

      */
 
      PostModel.find()
        .populate('myUserId')
        .then((posts) => {
            // send all posts to the user
            // res.json sends a json information to the user
            res.json(posts)
        })
        .catch((err) => {
          next(err)
        })
})


// create GET /display posts route

module.exports = router;
