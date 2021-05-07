const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderboardSchema = new mongoose.Schema({
                                                  key   : Number,
                                                  appid : Number,
                                                  name  : String,
                                                  scores: [{
                                                      key     : Number,
                                                      userid  : String,
                                                      username: String,
                                                      rank    : Number,
                                                      score   : Number
                                                  }
                                                  ]
                                              });

module.exports = mongoose.model('leaderboard', leaderboardSchema);