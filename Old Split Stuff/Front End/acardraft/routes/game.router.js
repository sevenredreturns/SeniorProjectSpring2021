module.exports = function(app) {
    var games = require('../controllers/game.controller.js');

    app.post('/api/game', games.addGame);
    app.get('/api/game/:id', games.getGameByID);
    app.get('/api/game/:name', games.getGameByName);
    app.get('/api/game', games.getAllGames);
    app.put('/api/game', games.updateGame);
    app.delete('/app/game/:id', games.deleteGame);
}