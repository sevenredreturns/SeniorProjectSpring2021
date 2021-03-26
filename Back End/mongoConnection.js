const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/achievement-arena', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

module.exports = db