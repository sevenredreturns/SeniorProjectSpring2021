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
                                                  appid       : {type: Number, ref: 'games', autopopulate: {select: 'appid'}},
                                                  achievements:
                                                      [
                                                          subAchievementSchema
                                                      ]
                                              });

achievementSchema.plugin(require('mongoose-autopopulate'));


module.exports = mongoose.model('achievement', achievementSchema);
