async function gamesArray(userID, steamID)
{
    let response = await fetch('/api/steamgamesbyuid/' + steamID);
    let data = await response.json();

    let gameList = [];

    var i = 0;
    while (i < data.length)
    {
        let entry = {
            "appid"  : data[i].appID,
            "name"   : data[i].name,
            "logourl": data[i].logoURL,
            "iconURL": data[i].iconURL
        };
        if (entry.name)
        {
            gameList.push(entry);
        }
        i++;
    }
    console.log(gameList);
    let cheevoList = [];

    i = 0;
    while (i < gameList.length)
    {

        let cheevo1 = await fetch(
            '/api/achievementsfromsteam/' + steamID + '/' + gameList[i].appid);
        let cheevo2 = await cheevo1.json();
        cheevo2.appid = gameList[i].appid;
        if (cheevo2.achievements)
        {
            for (let j = 0; j < cheevo2.achievements.length; j++)
            {
                cheevo2.achievements[j].points = 100;
            }

            console.log(cheevo2);
            cheevoList.push(cheevo2);
        }
        i++;
    }

    console.log(cheevoList);

    let ownedGames = [];
    var k = 0;
    while (k < cheevoList.length)
    {
        let newentry = {
            "appid"       : cheevoList[k].appid,
            "name"        : cheevoList[k].gameName,
            "achievements": cheevoList[k].achievements
        };
        console.log(newentry);
        ownedGames.push(newentry);
        k++;
    }

    console.log(ownedGames);

    const toSend = {
        "_id"       : {
            "$oid": userID
        },
        "ownedGames": ownedGames
    };
    console.log(toSend);


    const sendOptions =
              {
                  method : 'PUT',
                  headers: {'Content-Type': 'application/json'},
                  body   : JSON.stringify(toSend)
              };

    console.log(sendOptions);


    let updated = await fetch('/api/updateUsersGames/', sendOptions);
    let fullupdate = await updated.json();
    console.log(fullupdate);


}

module.exports = gamesArray;