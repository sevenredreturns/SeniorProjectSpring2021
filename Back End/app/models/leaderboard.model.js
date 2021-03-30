const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
    game: String,
    places: [{
        user: String,
        place: Number,
        score: Number
    }
    ]
});

module.exports = mongoose.model('leaderboard', leaderboardSchema)