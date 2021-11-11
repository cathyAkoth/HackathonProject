const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

//Require express session inorder to monitor authentication.
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});



const { PORT } = process.env || 5000 
const { WELCOME_MESSAGE, DATABASE_URL } = process.env

const SignUp = require('./models/SignUp')
const signUpRoutes = require("./routes/signUpRoute")
const lndexRoutes = require("./routes/lndexRoute")
const studentFormRoutes = require("./routes/studentFormRoute")
const loginRoutes = require("./routes/loginRoute")
const customerRoutes = require("./routes/customerReqRoute")



// declare app isntance
const app = express();

// load middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

app.use(express.static('public'));
app.use('/public/images', express.static(__dirname + '/public/images'));

app.use(express.urlencoded({extended: true}))
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(SignUp.createStrategy());
passport.serializeUser(SignUp.serializeUser());
passport.deserializeUser(SignUp.deserializeUser());


app.use('/Index', lndexRoutes);
app.use('/',studentFormRoutes);
app.use('/request', customerRoutes);
app.use('/', signUpRoutes);
app.use('/login', loginRoutes);



// spin up the server 
mongoose.connect(DATABASE_URL).then(() => {
    // successful connection
    app.listen(PORT, ()=> {
        let message = `${WELCOME_MESSAGE} http://localhost:${PORT}`
        console.log(message)
    })
}).catch(error => {
    console.error("Failed to start the server due to : ",error)
})

app.set('view engine', 'pug');
app.set('views', './views');
