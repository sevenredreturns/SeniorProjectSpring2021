module.exports = function(app) {
    var users = require('../controllers/user.controller.js');

    app.post('/api/user', users.addUser);
    app.get('/api/user/:id', users.getUserByID);
    app.get('/api/user', users.getAllUsers);
    app.get('/api/user/:username', users.getUserByName);
    app.put('/api/user', users.updateUser);
    app.delete('/app/user/:id', users.deleteUser);
}