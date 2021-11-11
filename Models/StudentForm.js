const mongoose = require('mongoose');
// Create a schema for data that is needed to be saved.
const studentFormSchema = new mongoose.Schema({
    firstName: {
    type: String,
    //required: 'please fill in',
  },
  lastName: {
    type: String,
    //required: 'please fill in',
  },
  email:{
    type: String,
    //required:'please select',
},
  phoneNumber:{
    type: String,
    //required: 'please enter service'
  },
  occupation:{
    type: String,
    //required: 'please fill in',
  },
 country:{
      type: String,
      //required: 'please fill in',
  },
  course:{
    type: String,
    //required:'please select',
  },
  status:{
  type: String,
  //require: 'please enter '
  },
  


  
})
// Export mongoose model.
module.exports = mongoose.model('StudentForm', studentFormSchema)