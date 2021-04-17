const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderboardSchema = new mongoose.Schema({
                                                  appid  : Number,
                                                  places: [{
                                                      user : Schema.Types.ObjectId,
                                                      place: Number,
                                                      score: Number
                                                  }
                                                  ]
                                              });

module.exports = mongoose.model('leaderboard', leaderboardSchema);