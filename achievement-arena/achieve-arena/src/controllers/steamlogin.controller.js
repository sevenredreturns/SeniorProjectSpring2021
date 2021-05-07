var express = require('express')
    , router = express.Router()
    , passport = require('passport');

router.get('/steam',
           passport.authenticate('steam', { failureRedirect: '/' }),
           function(req, res) {
               res.redirect('/');
           });

