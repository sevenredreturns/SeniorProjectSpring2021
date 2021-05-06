module.exports = function (app)
{
    var leaderboard = require('../controllers/leaderboard.controller.js');

    app.post('/api/leaderboard', leaderboard.addLeaderboard);
    app.get('/api/leaderboard/:id', leaderboard.getLeaderboardByID);
    app.get('/api/leaderboardbyappid/:appid', leaderboard.getLeaderboardByAppid);
    app.get('/api/leaderboard', leaderboard.getAllLeaderboards);
    app.put('/api/leaderboard', leaderboard.updateLeaderboard);
    app.get('/api/leaderboarduid/:uid', leaderboard.getPlacesByUserID);
    app.get('/api/leaderboardglobaluid/:uid', leaderboard.getGlobalRank);
    app.delete('/api/leaderboard/:id', leaderboard.deleteLeaderboard);
};