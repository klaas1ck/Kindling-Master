const bcrypt = require('bcrypt');
const path = require('path');
const bodyParser = require('body-parser');
const user = require('../models/loginMongoose.js');


// Her benytter vi FindOne til at finde username i vores database, hvis det passer så er next step det samme bare med hashed passwords. 
module.exports = async (req, res) =>{
    const { username, password } = req.body;

    await user.findOne({username:username}, (error,user) => {      
      if (user){ 
        bcrypt.compare(password, user.password, (error, same) =>{
          if(same){ 
              
           req.session.userId = user._id
           res.redirect('/mainpage');
              console.log('Logged into the mainpage');
          } else {
              res.send('Wrong login');
              console.log('Wrong Login');
          }
         
        })
      } else {
          console.log('username issue');
          res.send('Wrong Login');
      }
      
    })
};

