const api = require('steam-js-api')

api.setKey('6B328D41EE66949204BBCEBA81C3852A')

function getAchievementsFromSteam(steamID, callback)
{
    api.getOwnedGames(steamID).then(result => {
        callback.status(200).json(result.data)
    }).catch(console.error)
}

module.exports = {
    getAchievementsFromSteam
}