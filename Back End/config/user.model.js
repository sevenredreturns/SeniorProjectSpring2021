const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    otherProfiles: [
        {
            steam: String,
            gog: String,
            psn: String,
            xbox: String
        }
    ]
});

module.exports = mongoose.model('user', userSchema)