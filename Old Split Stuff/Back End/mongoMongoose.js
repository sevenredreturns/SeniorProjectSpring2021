const db = require('mongoConnection');
const mongoose = require('mongoose');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function ()
{
    // we're connected!
});

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    otherProfiles: [
        {
            steam: String,
            gog: String,
            psn: String,
            xbox: String
        }
    ],
    ownedGames: [{
        steamNumber: String,
        achievements: [Number]
    }]

});

userSchema.plugin(require('mongoose-autopopulate'));

const gameSchema = new mongoose.Schema({
    name: String,
    steamID: String,
    gogID: String,
    system: String,
    score: Number
});

const achievementSchema = new mongoose.Schema({
    game: String,
    achievements: [
        {
            title: String,
            description: String,
            points: Number
        }
    ]
});

const leaderboardSchema = new mongoose.Schema({
    game: String,
    places: [{
        user: String,
        place: Number,
        score: Number
    }
    ]
});

const messageSchema = new mongoose.Schema({});

console.log("Connected!");
const user = mongoose.model('user', userSchema);
console.log("User Schema Made");
const game = mongoose.model('game', gameSchema);
console.log("Game Schema Made");
const achievements = mongoose.model('achievements', achievementSchema);
console.log("Achievement Schema Made");
const leaderboard = mongoose.model('leaderboard', leaderboardSchema);
console.log("Leaderboard Schema Made");
const message = mongoose.model('message', messageSchema);
console.log("Message Schema Made");

addUser = (req, res) =>
{

    const newUser = new user({
        username: req.body.username
    })

    user.save().then(data =>
    {
        res.status(200).json(data);
    }).catch(err =>
    {
        res.status(500).json({
            message: "User failed to be added!",
            error: err.message
        });
    });
}

getUserByID = (req, res) =>
{
    user.findById(req.params.id).select('-__v')
        .then(user =>
        {
            res.status(200).json(user);
        }).catch(err =>
    {
        if (err.kind === 'ObjectId')
        {
            return res.status(404).send(
                {
                    message: "user not found with id " + req.params.id,
                    error: err
                });
        }
        return res.status(500).send(
            {
                message: "Error retrieving user with id " + req.params.id,
                error: err
            });
    });
}

addGame = (req, res) =>
{

}

addGameAchievements = (req, res) =>
{

}

addLeaderboard = (req, res) =>
{

}

addMessage = (req, res) =>
{

}

getAllUsers = (req, res) =>
{
    user.find().select('-__v').then(userInfos => {
        res.status(200).json(userInfos);
    }).catch(error => {
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
}

getAllGames = (req, res) =>
{

}

getAllAchievements = (req, res) =>
{

}

getAllLeaderboards = (req, res) =>
{

}

getAllMessages = (req, res) =>
{

}

getUserByName = (req, res) =>
{

}

getGameByName = (req, res) =>
{

}


module.export = {}


//Test Area:
getAllUsers();
