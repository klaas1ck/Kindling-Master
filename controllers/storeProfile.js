const profile = require('../models/profileMongoose.js');
const path = require('path');
const express = require('express')
const router = express.Router()
 module.exports = async (req,res)=> { 
    await profile.create(req.body, (error, profile) => { // Denne del gør at clienten direkte fra interface kan sende data til databasen
        res.render('profile');
        console.log(req.body)
      });
};

