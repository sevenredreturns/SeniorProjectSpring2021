const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    otherProfiles: [
        {
            steam: String,
            gog: String,
            psn: String,
            xbox: String
        }
    ],
    ownedGames: [{
        steamNumber: String,
        achievements: [Number]
    }]

})

module.exports = mongoose.model('user', userSchema)