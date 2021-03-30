const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';
const dbname = 'achievement-arena';

const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

//General Mass Retrieval Functions
async function getAllGames()
{

    try
    {
        await client.connect();

        const db = client.db(dbname);
        const games = db.collection('games');

        const cursor = games.find({});
        console.log("async");
        for await (const doc of cursor)
        {
            console.log(doc);
            return doc;
        }
        await cursor.close();
    } finally
    {
        await client.close();
    }
}

async function getAllUsers()
{

    try
    {
        await client.connect();

        const db = client.db(dbname);
        const users = db.collection('users');

        const cursor = users.find({});
        console.log("async");
        for await (const doc of cursor)
        {
            console.log(doc);
        }
        await cursor.close();
    } finally
    {
        await client.close();
    }
}

async function getAllAchievements()
{

    try
    {
        await client.connect();

        const db = client.db(dbname);
        const achievements = db.collection('achievements');

        const cursor = achievements.find({});
        console.log("async");
        for await (const doc of cursor)
        {
            console.log(doc);
        }
        await cursor.close();
    } finally
    {
        await client.close();
    }
}

async function getAllMessages()
{

    try
    {
        await client.connect();

        const db = client.db(dbname);
        const messages = db.collection('messages');

        const cursor = messages.find({});
        console.log("async");
        for await (const doc of cursor)
        {
            console.log(doc);
        }
        await cursor.close();
    } finally
    {
        await client.close();
    }
}

async function getAllLeaderboards()
{

    try
    {
        await client.connect();

        const db = client.db(dbname);
        const leaderboards = db.collection('leaderboards');

        const cursor = leaderboards.find({});
        console.log("async");
        for await (const doc of cursor)
        {
            console.log(doc);
        }
        await cursor.close();
    } finally
    {
        await client.close();
    }
}

//Search Functions
async function getUserByName(uname)
{
    try
    {
        await client.connect();

        const db = client.db(dbname);
        const users = db.collection('users');

        const query = {_id: uname.toUpperCase()};
        const options = {
            projection: {
                otherProfiles: 1,
                ownedGames: 1,
                username: 1,
                friends: 1,
                firstName: 1,
                lastName: 1
            }
        };
        return new Promise((resolve, reject) =>
        {
            try
            {
                users.findOne(query, options);
            } catch (e)
            {
                return reject(e)
            }
        })
    } finally
    {
        await client.close();
    }
}

/*async function getUserByName(uname)
 {
 return MongoClient.connect('mongodb://localhost:27017/achievement-arena').then(function(db) {
 const users = db.collection('users');

 return users.find({_id: uname.toUpperCase()}).toArray();
 }).then(function(items) {
 return items;
 });
 }*/

async function getGamesByName(gname)
{
    try
    {
        await client.connect();

        const db = client.db(dbname);
        const games = db.collection('games');

        const cursor = games.find({_id: gname.toUpperCase()});
        console.log("async");
        for await (const doc of cursor)
        {
            console.log(doc);
        }
        await cursor.close();
    } finally
    {
        await client.close();
    }

}

async function getAchievementsByGame(gname)
{
    try
    {
        await client.connect();

        const db = client.db(dbname);
        const achievements = db.collection('achievements');

        const cursor = achievements.find({game: gname});
        console.log("async");
        for await (const doc of cursor)
        {
            console.log(doc);
        }
        await cursor.close();
    } finally
    {
        await client.close();
    }
}

//Completely new record Functions
async function addUser(uname, pword)
{
    const newUser = {
        _id: uname.toUpperCase(),
        username: uname,
        password: pword
    };

    try
    {
        await client.connect();

        const db = client.db(dbname);
        const users = db.collection('users');
        await users.insertOne(newUser, function (err, result)
        {

            console.log(result)
        });
    } finally
    {
        await client.close();
    }

}

async function addGame(gname, system)
{
    const newGame = {
        _id: gname.toUpperCase() + system.toUpperCase(),
        name: gname,
        system: system
    };

    try
    {
        await client.connect();

        const db = client.db(dbname);
        const games = db.collection('games');
        await games.insertOne(newGame, function (err, result)
        {

            console.log(result)
        });
    } finally
    {
        await client.close();
    }
}

//Second parameter is an array.
async function addAchievement(gname, cheevos)
{
    const newAchievement = {
        game: gname,
        steamAchievements: cheevos
    };

    try
    {
        await client.connect();

        const db = client.db(dbname);
        const achievements = db.collection('achievements');
        await achievements.insertOne(newAchievement, function (err, result)
        {

            console.log(result)
        });
    } finally
    {
        await client.close();
    }
}

async function addLeaderboard(game)
{
    const newLeaderboard = {
        game: game,
        rankings: []
    }

    try
    {
        await client.connect();

        const db = client.db(dbname);
        const leaderboards = db.collection('leaderboards');
        await leaderboards.insertOne(newLeaderboard, function (err, result)
        {

            console.log(result)
        });
    } finally
    {
        await client.close();
    }
}

//Edit Profile Functions

async function editFName(uname, fname)
{
    const query = {_id: uname.toUpperCase()}
    const update = {$set: {firstName: fname}};
    const options = {};
    try
    {
        await client.connect();

        const db = client.db(dbname);
        const users = db.collection('users');
        await users.updateOne(query, update, options);
    } finally
    {
        await client.close();
    }
}

async function editLName(uname, lname)
{
    const query = {_id: uname.toUpperCase()}
    const update = {$set: {lastName: lname}};
    const options = {};
    try
    {
        await client.connect();

        const db = client.db(dbname);
        const users = db.collection('users');
        await users.updateOne(query, update, options);
    } finally
    {
        await client.close();
    }
}

async function editPassword(uname, newpass)
{
    const query = {_id: uname.toUpperCase()}
    const update = {$set: {password: newpass}};
    const options = {};
    try
    {
        await client.connect();

        const db = client.db(dbname);
        const users = db.collection('users');
        await users.updateOne(query, update, options);
    } finally
    {
        await client.close();
    }
}

async function addFriend(uname, frienduname)
{
    const query = {_id: uname.toUpperCase()}
    const update = {$push: {friends: frienduname}};
    const options = {};
    try
    {
        await client.connect();

        const db = client.db(dbname);
        const users = db.collection('users');
        await users.updateOne(query, update, options);
    } finally
    {
        await client.close();
    }
}

async function addOwnedGame(uname, game)
{
    const query = {_id: uname.toUpperCase()}
    const update = {$push: {ownedGames: game}};
    const options = {};
    try
    {
        await client.connect();

        const db = client.db(dbname);
        const users = db.collection('users');
        await users.updateOne(query, update, options);
    } finally
    {
        await client.close();
    }
}

async function addUserAchievement(uname, game, achievement)
{

}

module.exports = {
    getAllUsers,
    getAllGames,
    getAllAchievements,
    getAllMessages,
    getUserByName,
    getGamesByName,
    getAchievementsByGame,
    addUser,
    addGame,
    addAchievement,
    editFName,
    editLName,
    editPassword,
    addFriend,
    addOwnedGame,
    addUserAchievement,
    getAllLeaderboards
};

console.dir(getUserByName('melodyrose'));