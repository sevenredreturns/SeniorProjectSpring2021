import React             from "react";
import {
    Avatar, Button, Col, Divider, Form, Input, Modal, Row, Table
}                        from "antd";
import {LoadingOutlined} from '@ant-design/icons';


const pageUserID = "6094e8e4d3cc2264602b5d68";
const userID = localStorage.getItem('userid');
console.log(userID);

//const fs = require('fs');

async function sendEdits(changes)
{

    const toSend = {
        "_id"    : {
            "$oid": userID
        },
        username : changes.username,
        bio      : changes.bio,
        avatarurl: changes.avatar_src
    };

    const sendOptions =
              {
                  method : 'PUT',
                  headers: {'Content-Type': 'application/json'},
                  body   : JSON.stringify(toSend)
              };

    let updated = await fetch('/api/user', sendOptions);
    let fullupdate = await updated.json();
    console.log(fullupdate);
}

class ProfilePage extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            user      : [],
            username  : "",
            bio       : "",
            avatarurl : "",
            email     : "",
            ownedGames: [],
            loading   : true,
            visible   : false,
            formRef   : true
        };
    }

    componentDidMount()
    {
        this.setState({loading: true});
        fetch('/api/user/' + pageUserID)
            .then(response => response.json())
            .then(data => this.setState({
                                            username  : data.username,
                                            bio       : data.bio,
                                            avatarurl : data.avatarurl,
                                            ownedGames: data.ownedGames,
                                            loading   : false
                                        }));
    }

    updateValues(changes)
    {
        let updated = sendEdits(changes);
        window.location.reload();
    }


    ListOfGames()
    {
        if (this.state.ownedGames[0] !== undefined)
        {
            var keyNum = 1;
            const columns = [
                {
                    title    : 'Users Owned Games',
                    dataIndex: 'name',
                    key      : 'name',
                }
            ];
            //var data = [];
            console.log("here");
            /*this.state.ownedGames.forEach(function(games){
             games.achievements.forEach(function(achievements) {
             if(achievements.achieved === 1)
             {
             console.log(keyNum);
             if(achievements.name === "")
             {
             data.push({key: keyNum, gameName: games.name, achievements: achievements.api, description: achievements.description})
             }
             else
             {
             data.push({key: keyNum, gameName: games.name, achievements: achievements.name, description: achievements.description})
             }
             keyNum++;
             console.log(keyNum);
             }
             })
             })*/

            return (
                <>
                    <Table columns={columns}
                           dataSource={this.state.ownedGames}/>
                </>
            );
        }

    }

    App()
    {
        return (
            <>
                <Button type="primary" onClick={() =>
                {
                    this.setState({visible: true});
                }}>
                    Edit Profile
                </Button>
                <Modal
                    visible={this.state.visible}
                    title="Editing your profile"
                    onCancel={() => this.setState({visible: false})}
                    footer={null}
                >
                    <Form layout="vertical" colon={true}
                          onFinish={(changes) => this.updateValues(changes)}>
                        <Form.Item label="Username" name="username">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Bio" name="bio">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Avatar" name="avatar_src">
                            <Input/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    <div><Button>Sync Steam Profile</Button></div>
                </Modal>
            </>
        );
    }

    render()
    {
        if (this.state.loading)
        {
            return (<div><p/><Row justify="space-around"
                                  align="middle"><LoadingOutlined/></Row>
            </div>);
        }
        if (userID === pageUserID)
        {
            return (
                <>
                    <Divider orientation="left">Profile</Divider>
                    <Row justify="center" align="middle">
                        <Col flex={4}></Col>
                        <Col span={2}>
                            <Avatar
                                size={{
                                    xs : 24, sm: 32, md: 40, lg: 64, xl: 80,
                                    xxl: 100
                                }}
                                src={this.state.avatarurl}
                            />
                        </Col>
                        <Col flex={4}>{this.state.username}</Col>
                        {this.App()}
                        <Col flex={2}></Col>
                    </Row>
                    <Divider orientation="left"></Divider>
                    <Row justify="space-around" align="middle">
                        <Col span={8}>{this.state.bio}</Col>
                    </Row>
                    <p/><p/><p/><p/>
                    <Row>
                        <Col span={4}>
                            {this.ListOfGames()}
                        </Col>
                    </Row>
                </>
            );
        }
        else
        {
            return (
                <>
                    <Divider orientation="left">Profile</Divider>
                    <Row justify="center" align="middle">
                        <Col flex={4}></Col>
                        <Col span={2}>
                            <Avatar
                                size={{
                                    xs : 24, sm: 32, md: 40, lg: 64, xl: 80,
                                    xxl: 100
                                }}
                                src={this.state.avatarurl}
                            />
                        </Col>
                        <Col flex={4}>{this.state.username}</Col>
                        <Col flex={2}></Col>
                    </Row>
                    <Divider orientation="left"></Divider>
                    <Row justify="space-around" align="middle">
                        <Col span={8}>{this.state.bio}</Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            {this.ListOfGames()}
                        </Col>
                    </Row>
                </>
            );
        }
    }
}

export default ProfilePage;
