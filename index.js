// De brugte NPM installs er herunder blevet requiret således den kan bruges. 
const express = require('express'); 
const app = express(); 
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const router = express.Router();
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');

// Her henter vi funktioner fra andre mapper
const user = require('./models/loginMongoose');
const profile = require('./models/profileMongoose')
const userController = require('./controllers/StoreUser');
const Login = require('./controllers/Login');
const authMongoose = require('./middlewares/authMongoose.js');
const authMongoose2 = require('./middlewares/authMongoose2.js');
const Logout = require('./controllers/Logout');
const deleteUserController = require('./controllers/deleteUser.js')
const profileController = require('./controllers/storeProfile.js')


// Gør NPM udvidelserne aktive
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'Kindling'}));
app.use(fileUpload());

// mongoose.connect gør at clienten har forbindelse til databasen. 

mongoose.connect('mongodb://localhost/eksamen', {useNewUrlParser: true});

// Express server
app.listen(4500, () => {
    console.log('App listening on port 4500');
});

// routes for get
app.get("/", authMongoose2, (req,res) => {
    res.render('index');
});

app.get('/mainpage', authMongoose,  (req,res)=>{         
    res.render('mainpage')
});

app.get("/profile", (req,res) => {
    res.render('profile');
});

// routes for post
app.post("/register", userController);
app.post("/login", Login);
app.post('/createprofiles', profileController)

// Post for at logge ud og delete. 
app.post('/mainpage/logout', Logout)
app.post('/mainpage/delete/:id', deleteUserController)