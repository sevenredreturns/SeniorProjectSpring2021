const api = require('steam-js-api')
var express = require('express')
  , passport = require('passport')
  , util = require('util')
  , session = require('express-session')
  , SteamStrategy = require('./../').Strategy
  , authRoutes = require('./routes/auth');

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

api.setKey('6B328D41EE66949204BBCEBA81C3852A')
steamID = User.findByOpenID
appID = api.getOwnedGames
moreInfo = true // Provide more info (name, links)

api.getOwnedGames(steamID, appID, moreInfo).then(result => {
    console.log(result.data.games[0])
}).catch(console.error)
