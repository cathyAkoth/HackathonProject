const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');




const { PORT } = process.env || 5000 
const { WELCOME_MESSAGE, DATABASE_URL } = process.env

const loginRoutes = require("./routes/loginRoute")






// declare app isntance
const app = express();

// load middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))



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
