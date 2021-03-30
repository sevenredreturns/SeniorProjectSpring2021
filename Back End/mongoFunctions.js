const {MongoClient} = require('mongodb');
const si = require('search-index');
const uri = 'mongodb://localhost:27017';
const dbname = 'achievement-arena';

const client = new MongoClient(uri);

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

        const cursor = users.find({_id: uname.toUpperCase()});
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

async function addFriend(uname,frienduname)
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

async function addOwnedGame(uname,game)
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

/*module.exports = {
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
};*/

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
//addGame('IDK a game I guess', 'PC').catch(console.dir);
addUser('IDTest2','IDTester').catch(console.dir);
//getAllGames().catch(console.dir);
//addAchievement('Monster Hunter World', [{
//    humanID: "1",
//    title: "Sapphire Star",
//    description: "Beat the game"
//}, {humanID: "2", title: "Test Cheevo", description: "Seriously just testing"}]).catch(console.dir);
//getAllAchievements().catch(console.dir);
//editFName("newuser", "Test").catch(console.dir);
//addFriend("newuser","melodyrose").catch(console.dir);