const mongoose = require('mongoose');
const Schema = mongoose.Schema; // 
const bcrypt = require('bcrypt');

// Oprettelse af en unik user vha. Mongoose Schema funktionalitet
const loginSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
    type: String,
    required: true
    },
birthday: {
    type: Date,
    required: true,
}
});

// Hash funktionen, samt antallet af rounds. 
loginSchema.pre('save', function(next) {
    const user = this
    bcrypt.hash(user.password, 8, (error, hash) => {
        user.password = hash
        next();
    });
});
const user = mongoose.model('user', loginSchema);
module.exports = user;

