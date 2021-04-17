const mongoose = require('mongoose');

const subAchievementSchema = new mongoose.Schema(
    {
        name       : String,
        displayName: String,
        description: String,
        icon       : String,
        icongray   : String,
        points     : Number
    });

const achievementSchema = new mongoose.Schema({
                                                  appid       : Number,
                                                  achievements:
                                                      [
                                                          subAchievementSchema
                                                      ]
                                              });


module.exports = mongoose.model('achievement', achievementSchema);
