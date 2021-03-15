const {MongoClient} = require('mongodb');
const uri = 'mongodb://localhost:27017';
const dbname = 'achievement-arena';

const client = new MongoClient(uri);

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
    } finally {
        await client.close();
    }
}

getAllUsers().catch(console.dir);
getAllGames().catch(console.dir);
getAllAchievements().catch(console.dir);
getAllMessages().catch(console.dir);

