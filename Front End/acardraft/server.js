var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
console.log("server.js load");
;

// Configuring the database
const dbConfig = require('./config/mongodb.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {useNewUrlParser: true, useUnifiedTopology: true})

const conn = mongoose.connection;

conn.on('connected', function() {
    console.log("MongoDB is connected successfully");
});

conn.on('error', console.error.bind(console, 'mongodb connection error:'));

require('./routes/user.router.js')(app);
require('./routes/achievements.router.js')(app);
require('./routes/game.router.js')(app);
require('./routes/leaderboard.router.js')(app);

// Create a Server
const server = app.listen(8080, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("App listening at http://%s:%s", host, port)
});

module.exports = conn;

