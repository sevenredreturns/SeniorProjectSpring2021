module.exports = function (app)
{
    var achievements = require('../controllers/achievements.controller.js');
    var steamgames = require('../js/achievementHelpers.js');

    app.post('/api/achievements', achievements.addAchievement);
    app.get('/api/achievementsbyid/:id', achievements.getAchievementsByID);
    app.get('/api/achievements/:appid', achievements.getAchievementsByAppid);
    app.get('/api/achievements', achievements.getAllAchievements);
    app.put('/api/achievements', achievements.updateAchievements);
    app.delete('/app/achievements/:id', achievements.deleteAchievements);
    app.get('/api/achievementsfromsteam/:steamid/:appid', steamgames.getAchievementsFromSteam);
};