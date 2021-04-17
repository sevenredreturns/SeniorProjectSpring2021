module.exports = function(app) {
    var achievements = require('../controllers/achievements.controller.js');

    app.post('/api/achievements', achievements.addAchievement);
    app.get('/api/achievements/:id', achievements.getAchievementsByID);
    app.get('/api/achievements', achievements.getAllAchievements);
    app.put('/api/achievements', achievements.updateAchievements);
    app.delete('/app/achievements/:id', achievements.deleteAchievements);
}