module.exports = function(app) {
    var leaderboard = require('../controllers/leaderboard.controller.js');

    app.post('/api/leaderboard', leaderboard.addLeaderboard);
    app.get('/api/leaderboard/:id', leaderboard.getLeaderboardByID);
    app.get('/api/leaderboard/:name', leaderboard.getLeaderboardByName);
    app.get('/api/leaderboard', leaderboard.getAllLeaderboards);
    app.put('/api/leaderboard', leaderboard.updateLeaderboard);
    app.delete('/app/leaderboard/:id', leaderboard.deleteLeaderboard);
}