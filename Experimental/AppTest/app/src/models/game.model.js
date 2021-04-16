const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new mongoose.Schema({
    name: String,
    appid: Number,
    img_icon_url: String,
    img_logo_url: String
});

module.exports = mongoose.model('game', gameSchema)