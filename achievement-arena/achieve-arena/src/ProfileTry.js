import React, {Component} from 'react';
import {
    Avatar, Breadcrumb, Col, Divider, Dropdown, Layout, Menu, PageHeader, Row
}                         from 'antd';
import "antd/dist/antd.css";
import "./index.css";
import achievementHelpers from "./js/achievementHelpers";

const {Header, Footer, Content} = Layout;

const pageUserID = "6079858623c4150084b79241";
const userID = "6079858623c4150084b792421";

let gamelist = achievementHelpers.getAchievementsFromSteam('76561198006215063');

console.log(gamelist)

class ProfileTry extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {user: [], loading: true, visible: false};
    }

    componentDidMount()
    {
        this.setState({loading: true});

        fetch('/api/user/' + pageUserID)
            .then(response => response.json())
            .then(data => this.setState({user: data, loading: false}));
    }


    render()
    {
        const {user, loading} = this.state;

        if (loading)
        {
            return <p>Loading...</p>;
        }

        if (userID === pageUserID)
        {
            return (
                <>
                    <Content
                        mode="horizontal"
                        style={{padding: "0 50px", minHeight: "1000px"}}
                    >
                        <Divider orientation="left">Profile</Divider>
                        <Row justify="center" align="middle">
                            <Col flex={4}></Col>
                            <Col span={2}>
                                <Avatar
                                    size={{
                                        xs : 24, sm: 32, md: 40, lg: 64,
                                        xl : 80,
                                        xxl: 100
                                    }}
                                    src={user.avatarurl}
                                />
                            </Col>
                            <Col flex={4}>{user.username}</Col>
                            <Col flex={2}></Col>
                        </Row>
                        <Divider orientation="left"></Divider>
                        <Row justify="space-around" align="middle">
                            <Col span={8}>{user.bio}</Col>
                        </Row>
                        <Row justify="space-around" align="middle">
                            <Col span={8}>{user.ownedGames.map(game => <div>{game.appid}</div>)}</Col>

                        </Row>
                    </Content>
                </>
            );
            console.log("This is you");
        }
        else
        {
            return (
                <>
                    <Content
                        mode="horizontal"
                        style={{padding: "0 50px", minHeight: "1000px"}}
                    >
                        <Divider orientation="left">Profile</Divider>
                        <Row justify="center" align="middle">
                            <Col flex={4}></Col>
                            <Col span={2}>
                                <Avatar
                                    size={{
                                        xs : 24, sm: 32, md: 40, lg: 64,
                                        xl : 80,
                                        xxl: 100
                                    }}
                                    src={user.avatarurl}
                                />
                            </Col>
                            <Col flex={4}>{user.username}</Col>
                            <Col flex={2}></Col>
                        </Row>

                        <Divider orientation="left"></Divider>
                        <Row justify="space-around" align="middle">
                            <Col span={8}>{user.bio}</Col>
                        </Row>
                        <Row justify="space-around" align="middle">
                            <Col span={8}>{user.ownedGames.map(game => <div>{game.appid}</div>)}</Col>
                            {/*<Col span={8}>{user.ownedGames.appid.achievements.map(game => <li> {game}</li>)}</Col>*/}
                        </Row>
                    </Content>
                </>
            );
            console.log("This isn't you");
        }
    }
}

export default ProfileTry;
