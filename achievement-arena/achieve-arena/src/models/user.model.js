const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
                                           username     : String,
                                           email        : String,
                                           firstName    : String,
                                           lastName     : String,
                                           bio          : String,
                                           avatarurl    : String,
                                           otherProfiles: [
                                               {
                                                   steam: String,
                                                   gog  : String,
                                                   psn  : String,
                                                   xbox : String
                                               }
                                           ],
                                           friends      : [{
                                               userid: String,
                                               name  : String
                                           }],
                                           ownedGames   : [{
                                               appid       : Number,
                                               name        : String,
                                               achievements: [
                                                   {
                                                       api        : String,
                                                       name       : String,
                                                       description: String,
                                                       achieved   : Boolean,
                                                       unlockTime : Number,
                                                       points     : Number
                                                   }],
                                               visible     : String,
                                               earnedPoints: Number
                                           }],
                                           profileTotal : Number
                                       });
module.exports = mongoose.model('user', userSchema);