const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: String,
    steamID: String,
    gogID: String,
    system: String,
    achievements: ObjectId
});

module.exports = mongoose.model('game', gameSchema)