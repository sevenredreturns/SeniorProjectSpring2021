module.exports = function(app) {
    var users = require('../controllers/user.controller.js');

    app.post('/api/game', users.addUser);
    app.get('/api/game/:id', users.getUserByID);
    app.get('/api/game', users.getAllUsers);
    app.put('/api/game', users.updateUser);
    app.delete('/app/user/:id', users.deleteUser);
}