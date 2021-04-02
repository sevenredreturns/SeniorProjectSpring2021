const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    game: String,
    achievements: [
        {
            title: String,
            description: String,
            points: Number
        }
    ]
});

module.exports = mongoose.model('achievement', achievementSchema)