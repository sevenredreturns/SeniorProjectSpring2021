const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("Connected!")
});

const userSchema = new mongoose.Schema({

});

const gameSchema = new mongoose.Schema({

});

const achievementSchema = new mongoose.Schema({

});

const leaderboardSchema = new mongoose.Schema({

});

const messageSchema = new mongoose.Schema({
    
});