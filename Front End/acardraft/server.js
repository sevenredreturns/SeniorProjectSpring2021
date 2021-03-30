var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');

const User = require('./app/models/user.model.js');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(async () =>
    {
        console.log("Successfully connected to MongoDB.");

    }).catch(err =>
{
    console.log('Could not connect to MongoDB');
    process.exit();
});

require('./app/routes/user.router.js')(app);

// Create a Server
var server = app.listen(8080, function ()
{
    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})

