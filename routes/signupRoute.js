const express = require('express');
const router = express.Router();
const SignUp = require('../models/SignUp')

// Specify what to do when user hits the '/' route/endpoint
router.get('/signUp', (req, res) => {
    res.render('signUp')
})

router.post('/signUp', async(req, res) => {
    try {
        
        const signUp = new SignUp(req.body);
        
        await SignUp.register(signUp, req.body.password, (err) => {
            if (err)
              { 
               throw err
               
              }
              
            res.redirect('/login')
        })
    }
    catch (err) {
        res.status(400).send('Ooops! Something went wrong.')
        console.log(err)
    }
})

//Show  data from database on the  pug file.
// router.get('/', async (req, res) => {
//     try {
//         // Find all the data in the  collection.
        
//         const signUpDetails = await SignUp.find();
//         if (req.query.tor) {
//             signUpDetails = await SignUp.find({ tor: req.query.tor })
        
//         }
//         res.render('signUpList', { users: signUpDetails , title: 'signUp List' })
//     } catch (err) {
//         res.send('Failed to retrive signUp details');
//     }
//   })

//   router.get('/update/:id', async (req, res) => {
//     try {
//         const updateSig = await SignUp.findOne({ _id: req.params.id })
//         res.render('updateSignUp', { user: updateSig })
//     } catch (err) {
//         res.status(400).send("Unable to find item in the database");
//     }
// })


     module.exports = router;