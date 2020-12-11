const path = require('path');
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

// Oprettelse af en personlig profil vha. Mongoose Schema funktionalitet
const profileMongoose = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
},
    hobbies: {
        type: Array,
    },

    job: {
        type: String,
    }
}); 

const profile = mongoose.model('profile', profileMongoose);


module.exports = profile;
