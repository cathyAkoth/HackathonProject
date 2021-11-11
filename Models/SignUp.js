const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const signUpSchema = new mongoose.Schema({
    fname: {
        type: String,
        
    },
    lname: {
        type: String,
        
    },
    username:{
        type: String,
        //unique: true,

    password:{
        type:String,
    }
        
    }
  });

signUpSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('SignUp', signUpSchema);