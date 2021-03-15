let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017';

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('achievement-arena');

    dbo.collection('games').find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});