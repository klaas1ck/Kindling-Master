const user = require('../models/loginMongoose.js');
const path = require('path');
const express = require('express')
const router = express.Router()
 module.exports = async (req,res)=> { 
    await user.create(req.body, (error, user) => { // Denne del gør at clienten direkte fra interface kan sende data til databasen       
        res.render('index');   
        console.log('Account has been created');
      });               
};

