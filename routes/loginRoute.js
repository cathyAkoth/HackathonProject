const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    res.render('login');
  });
// Checks username and password using passport.
router.post('/', passport.authenticate('local', {failureRedirect: '/login'}), (req,res) =>{
  req.session.user = req.user;
  res.redirect('/request');
})
  module.exports = router;