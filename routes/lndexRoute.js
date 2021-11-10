const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index');
  });
// Checks username and password using passport.
// router.post('/', passport.authenticate('local', {failureRedirect: '/login'}), (req,res) =>{
//   req.session.user = req.user;
  //.redirect('/request');

  module.exports = router;