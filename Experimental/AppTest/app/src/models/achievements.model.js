const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    appid: number,
    achievements: [
        {
            name: String,
            displayName: String,
            description: String,
            icon: String,
            icongray: String
            points: Number
        }
    ]
});

module.exports = mongoose.model('achievement', achievementSchema)