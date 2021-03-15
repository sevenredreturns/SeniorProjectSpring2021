const {MongoClient} = require('mongodb');
const si = require('search-index');
const uri = 'mongodb://localhost:27017';
const dbname = 'achievement-arena';

const client = new MongoClient(uri);

//General Mass Retrieval Functions
async function getAllGames() {

    try {
        await client.connect();

        const db = client.db(dbname);
        const games = db.collection('games');

        const cursor = games.find({});
        console.log("async");
        for await (const doc of cursor) {
            console.log(doc);
        }
        await cursor.close();
    } finally {
        await client.close();
    }
}

async function getAllUsers() {

    try {
        await client.connect();

        const db = client.db(dbname);
        const users = db.collection('users');

        const cursor = users.find({});
        console.log("async");
        for await (const doc of cursor) {
            console.log(doc);
        }
        await cursor.close();
    } finally {
        await client.close();
    }
}

async function getAllAchievements() {

    try {
        await client.connect();

        const db = client.db(dbname);
        const achievements = db.collection('achievements');

        const cursor = achievements.find({});
        console.log("async");
        for await (const doc of cursor) {
            console.log(doc);
        }
        await cursor.close();
    } finally {
        await client.close();
    }
}

async function getAllMessages() {

    try {
        await client.connect();

        const db = client.db(dbname);
        const messages = db.collection('messages');

        const cursor = messages.find({});
        console.log("async");
        for await (const doc of cursor) {
            console.log(doc);
        }
        await cursor.close();
    } finally {
        await client.close();
    }
}

//Search Functions
async function getUserByName(uname) {
    try {
        await client.connect();

        const db = client.db(dbname);
        const users = db.collection('users');

        const cursor = users.find({_id: uname.toUpperCase()});
        console.log("async");
        for await (const doc of cursor) {
            console.log(doc);
        }
        await cursor.close();
    } finally {
        await client.close();
    }

}

async function getGamesByName(gname) {
    try {
        await client.connect();

        const db = client.db(dbname);
        const games = db.collection('games');

        const cursor = games.find({_id: gname.toUpperCase()});
        console.log("async");
        for await (const doc of cursor) {
            console.log(doc);
        }
        await cursor.close();
    } finally {
        await client.close();
    }

}

async function getAchievementsByGame(gname) {
    try {
        await client.connect();

        const db = client.db(dbname);
        const achievements = db.collection('achievements');

        const cursor = achievements.find({game: gname});
        console.log("async");
        for await (const doc of cursor) {
            console.log(doc);
        }
        await cursor.close();
    } finally {
        await client.close();
    }
}

//Completely new record Functions
async function addUser(uname, pword) {
    const newUser = {
        _id: uname.toUpperCase(),
        username: uname,
        password: pword
    };

    try {
        await client.connect();

        const db = client.db(dbname);
        const users = db.collection('users');
        await users.insertOne(newUser, function (err, result) {

            console.log(result)
        });
    } finally {
        await client.close();
    }

}

async function addGame(gname, system){
    const newGame = {
        _id: gname.toUpperCase() + system.toUpperCase(),
        name: gname,
        system: system
    };

    try {
        await client.connect();

        const db = client.db(dbname);
        const games = db.collection('games');
        await games.insertOne(newGame, function (err, result) {

            console.log(result)
        });
    } finally {
        await client.close();
    }
}

//Testing The Functions here.  Will delete.

//getAllUsers().catch(console.dir);
//getAllGames().catch(console.dir);
//getAllAchievements().catch(console.dir);
//getAllMessages().catch(console.dir);
//getUserByName('melodyrose').catch(console.dir);
//getGamesByName('Test Game').catch(console.dir);
//getAchievementsByGame('World of Goo').catch(console.dir);
//addUser('newerUser', 'newerunsecure').catch(console.dir);
//getAllUsers().catch(console.dir);
addGame('Monster Hunter World', 'PS4').catch(console.dir);
getAllGames().catch(console.dir);