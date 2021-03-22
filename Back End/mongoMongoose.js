const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function ()
{
    // we're connected!
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
        ]
    });

    userSchema.plugin(require('mongoose-autopopulate'));

    const gameSchema = new mongoose.Schema({
        name: String,
        steamID: String,
        gogID: String,
        system: String
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

    });

    const messageSchema = new mongoose.Schema({

    });
    console.log("Connected!")
});


