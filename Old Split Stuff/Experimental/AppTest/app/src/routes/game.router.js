module.exports = function (app)
{
    var games = require('../controllers/game.controller.js');

    app.post('/api/game', games.addGame);
    app.get('/api/gamebyid/:id', games.getGameByID);
    app.get('/api/gamebyname/:name', games.getGameByName);
    app.get('/api/game/:appid', games.getGameByappid);
    app.get('/api/game', games.getAllGames);
    app.put('/api/game', games.updateGame);
    app.delete('/app/game/:id', games.deleteGame);
};