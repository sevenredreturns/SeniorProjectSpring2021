let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017';

function getAllGames() {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db('achievement-arena');

        dbo.collection('games').find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}

function getAllUsers(){
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db('achievement-arena');

        dbo.collection('users').find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}

function getAllAchievements(){
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db('achievement-arena');

        dbo.collection('achievements').find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}

function getAllMessages(){
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db('achievement-arena');

        dbo.collection('messages').find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}

getAllUsers();
getAllGames();
getAllAchievements();
getAllMessages();

