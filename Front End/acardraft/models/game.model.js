const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new mongoose.Schema({
    name: String,
    steamID: String,
    gogID: String,
    system: String,
    achievements: Schema.Types.ObjectId
});

module.exports = mongoose.model('game', gameSchema)