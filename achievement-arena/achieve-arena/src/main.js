const api = require('steam-js-api');
const passport = require('passport');
const util = require('util');
const session = require('express-session');
const passportSteam = require('passport-steam');
const SteamStrategy = passportSteam.Strategy;
const express = require('express');

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new SteamStrategy({
                                   returnURL: 'http://localhost:3000/auth/steam/return',
                                   realm: 'http://localhost:3000/',
                                   apiKey: '6B328D41EE66949204BBCEBA81C3852A'
                               },
                               function(identifier, profile, done) {
                                   // asynchronous verification, for effect...
                                   process.nextTick(function () {

                                       // To keep the example simple, the user's Steam profile is returned to
                                       // represent the logged-in user.  In a typical application, you would want
                                       // to associate the Steam account with a user record in your database,
                                       // and return that user instead.
                                       profile.identifier = identifier;
                                       return done(null, profile);
                                   });
                               }
));

var app = express();


app.get('/auth/steam',
        passport.authenticate('steam'),
        function (req, res)
        {
            // The request will be redirected to Steam for authentication, so
            // this function will not be called.
        });

app.get('/auth/steam/return',
        passport.authenticate('steam', {failureRedirect: '/login'}),
        function (req, res)
        {
            // Successful authentication, redirect home.
            res.redirect('/');
        });

api.setKey('6B328D41EE66949204BBCEBA81C3852A');
//steamID = User.findByOpenID;
appID = [];
moreInfo = true; // Provide more info (name, links)

api.getOwnedGames(steamID, appID, moreInfo).then(result =>
                                                 {
                                                     console.log(
                                                         result.data.games[0]);
                                                 }).catch(console.error);
