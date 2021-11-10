const express = require("express");
require('dotenv').config()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
app.use(express.json())

const port = 5000;
const url = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(uri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(5000, () => console.log('listening on port 5000'));


