const gamesData = require('./AppIDs.json');
const appIDs = []
fs = require('fs');
var body = "";
{
    for (var i = 0; i < gamesData.length; i++)
    {
        appIDs.push(gamesData[i].appid)
    }

    console.log(appIDs)

    for(var i = 0; i < appIDs.length; i++)
    {
        const url = "http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=" + appIDs[i] + "&key=6B328D41EE66949204BBCEBA81C3852A&steamid=76561198006215063&\n"

        fs.appendFile("joelist.txt", url, (err) => {
            if (err) {
                throw err;
            }
            console.log(appIDs[i] + " written.")
        });
        }
}


// http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=440&key=6B328D41EE66949204BBCEBA81C3852A&steamid=76561197972495328
//https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=6B328D41EE66949204BBCEBA81C3852A&appid=3830
// http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=6B328D41EE66949204BBCEBA81C3852A&format=json&include_appinfo=true&steamid=76561198006215063