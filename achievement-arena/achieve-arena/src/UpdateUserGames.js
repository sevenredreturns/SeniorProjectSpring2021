import React    from 'react';
import {Layout} from 'antd';
import "antd/dist/antd.css";
import "./index.css";

const {Header, Footer, Content} = Layout;
const
    userID = "6079858623c4150084b79243";
const
    steamID = "76561198107606725";

async function gamesArray()
{
    let response = await fetch('/api/steamgamesbyuid/' + steamID);
    let data = await response.json();

    let gameList = [];
    for (let i = 0; i < data.length; i++)
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
    }
    console.log(gameList);
    let cheevoList = [];

    for (var i = 0; i < gameList.length; i++)
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

    }

    console.log(cheevoList);

    let ownedGames = [];

    for (var k = 0; k < cheevoList.length; k++)
    {
        let newentry = {
            "appid"       : cheevoList[k].appid,
            "name"        : cheevoList[k].gameName,
            "achievements": cheevoList[k].achievements
        };
        console.log(newentry);
        ownedGames.push(newentry);
    }

    console.log(ownedGames);

    const toSend = {
        "_id"       : {
            "$oid": userID
        },
        "ownedGames": ownedGames
    }
    console.log(toSend)


    const sendOptions =
              {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body  : JSON.stringify(toSend)
              };

    console.log(sendOptions);


    let updated = await fetch('/api/updateUsersGames/', sendOptions)
    let fullupdate = await updated.json();
    console.log(fullupdate);


}

console.log(gamesArray());

class UpdateUserGames extends React.Component
{


}

export default UpdateUserGames;