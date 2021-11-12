const express = require('express');
const router = express.Router();
const  StudentForm = require('../models/StudentForm');


router.get('/', (req, res) => {
     
  res.render('studentForm');

});

  
  router.post('/', async(req, res) => { 
    
    try{
    console.log(req.body)
    const studentForm = new StudentForm (req.body);
    
    await studentForm.save()
    res.redirect('/')
    }catch(err){
      console.log(err);
      res.send('oops something went wrong')
   
    }

    })

    router.get('/student', async (req, res) => {
      try {
          // Find all the data in the Employee collection.
          let studentFormDetails = await StudentForm.find();
          if (req.query.role) {
            studentFormDetails = await StudentForm.find({ role: req.query.role })
            }
          res.render('studentList', { users: studentFormDetails, title: 'Student List' })
      } catch (err) {
          res.send('Failed to retrive student details');
      }
  })

  
  router.post('/delete', async (req, res) => {
    try {
        await StudentForm.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
})


  
  module.exports = router;