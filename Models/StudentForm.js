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
  dob:{
      type: String,
      //required:'please select',
  },
  residence:{
    type: String,
    //required: 'please enter service'
  },
  occupation:{
    type: String,
    //required: 'please fill in',
  },
 nationality:{
      type: String,
      //required: 'please fill in',
  },
  gender:{
    type: String,
    //required:'please select',
  },
  category:{
  type: String,
  //require: 'please enter '
  },
  


  
})
// Export mongoose model.
module.exports = mongoose.model('StudentForm', studentFormSchema)