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


  
  module.exports = router;