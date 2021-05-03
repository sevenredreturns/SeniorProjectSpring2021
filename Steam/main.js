var express = require('express')
  , passport = require('passport')
  , util = require('util')
  , session = require('express-session')
  , SteamStrategy = require('./').Strategy
  , authRoutes = require('./examples/signon/routes/auth');
const SteamAPI = require('steamapi');
const steam = new SteamAPI('6B328D41EE66949204BBCEBA81C3852A');

var User = express();

passport.use(new SteamStrategy({
    returnURL: 'http://localhost:3000/auth/steam/return',
    realm: 'http://localhost:3000/',
    apiKey: '6B328D41EE66949204BBCEBA81C3852A'
  },
  function(identifier, profile, done) {
    User.findByOpenID({ openId: identifier }, function (err, user) {
      return done(err, user);
    });
  }
));

var app = express();

app.get('/auth/steam',
  passport.authenticate('steam'),
  function(req, res) {
    // The request will be redirected to Steam for authentication, so
    // this function will not be called.
  });

app.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


steamID = User.findByOpenID

steam.getUserOwnedGames(steamID).then(result => {
    console.log(result)
}).catch(console.error)
