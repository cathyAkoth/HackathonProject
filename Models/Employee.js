// Requiring mongoose.
const mongoose = require('mongoose');
// Create a schema for data that is needed to be saved.
const employeeSchema = new mongoose.Schema({
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
      // unique: true,
      //required:'please select',
  },
  phoneNumber:{
    type: String,
    //required: 'please enter service'
  },
  country:{
    type: String,
    //required: 'please fill in',
  },
  course:{
      type: String,
      //required: 'please fill in',
  },
  status:{
    type: String,
    //required:'please select',
  },
  

  
})
// Export mongoose model.
module.exports = mongoose.model('Employee', employeeSchema)