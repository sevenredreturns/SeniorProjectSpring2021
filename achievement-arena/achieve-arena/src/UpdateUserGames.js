import React, {Component}                  from 'react';
import {Avatar, Col, Divider, Layout, Row} from 'antd';
import "antd/dist/antd.css";
import "./index.css";

const {Header, Footer, Content} = Layout;
const
    userID = "6079858623c4150084b79241";
const
    steamID = "76561198006215063";

async function gamesArray()
{
    let response = await fetch('/api/steamgamesbyuid/' + steamID);
    let data = await response.json();

    let response2 = await fetch('api/user/' + userID);
    let user = await response2.json();

/*    fetch('/api/updateUsersAchievements/', {
        method: 'PUT',
        body: JSON.stringify(data.data)
    })*/

}

console.log(gamesArray());

class UpdateUserGames extends React.Component
{


}
export default UpdateUserGames