const user = require('../models/loginMongoose.js');
const path = require('path');
const express = require('express')
const router = express.Router()
module.exports = (req, res) => {
    const users = user.findByIdAndDelete(req.session.userId, (err, user) => { // Finder den user der er logget ind og sletter Useren
        
    })

 req.session.destroy(() => {
        res.redirect('/');
        console.log('User has been deleted');
    })
                        
    };