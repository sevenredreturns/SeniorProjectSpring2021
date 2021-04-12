const gamesData = require( './AppIDs.json');
const jq = require('./jquery.min.js');
const http = new XMLHttpRequest();
const appIDs = []
{
    for (var i = 0; i < gamesData.length; i++)
    {
        appIDs.push(gamesData[i].appid)
    }

    console.log(appIDs)

    for(var i = 0; i < appIDs.length; i++)
    {
        const url = "https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=6B328D41EE66949204BBCEBA81C3852A&appid=" + appIDs[i];
        http.open("GET", url);
        http.send();

        http.onreadystatechange= function() {
            if(this.readyState === 4 && this.status === 200){
                console.log(http.responseText)
            }
        }
    }

}



//https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=6B328D41EE66949204BBCEBA81C3852A&appid=3830