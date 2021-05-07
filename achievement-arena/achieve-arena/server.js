var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
console.log("server.js load");

// Configuring the database
const dbConfig = require('./src/config/mongodb.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

const conn = mongoose.connection;

conn.on('connected', function() {
    console.log("MongoDB is connected successfully");
});

conn.on('error', console.error.bind(console, 'mongodb connection error:'));

require('./src/routes/user.router.js')(app);
require('./src/routes/achievements.router.js')(app);
require('./src/routes/game.router.js')(app);
require('./src/routes/leaderboard.router.js')(app);
require('./src/routes/auth.js')(app);

// Create a Server
const server = app.listen(8080, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("App listening at http://%s:%s", host, port)
});

module.exports = conn;

