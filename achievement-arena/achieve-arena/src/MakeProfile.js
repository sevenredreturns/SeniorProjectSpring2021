import React                                    from "react";
import {Button, Col, Divider, Form, Input, Row} from "antd";
import {Auth}                                   from 'aws-amplify';


import {CheckOutlined, CloseOutlined} from '@ant-design/icons';

const {TextArea} = Input;

async function setupProfile(changes)
{
    let newuname = {
        "username": changes.username
    };

    let sendOption = {
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body   : JSON.stringify(newuname)
    };
    console.log(sendOption);

    let uid = await fetch('/api/user', sendOption);
    let uid2 = await uid.json();
    let userid = uid2._id;

    let profilestuff = {
        "_id"    : {
            "$oid": userid
        },
        firstName: changes.firstname,
        lastName : changes.lastname,
        bio      : changes.bio,
        avatarurl: changes.avatarurl,
        email: changes.email
    };

    let sendOption2 = {
        method : 'PUT',
        headers: {'Content-Type': 'application/json'},
        body   : JSON.stringify(profilestuff)
    };

    console.log(sendOption2)

    let fullprofile = await fetch('/api/user', sendOption2);
    let allin = await fullprofile.json();
    console.log(allin);
}

async function signUp(changes)
{
    let username = changes.email;
    let password = changes.password;
    let email = changes.email;
    try
    {
        const {user} = await Auth.signUp({
                                             username,
                                             password,
                                             attributes: {
                                                 email
                                             }
                                         });
        console.log(user);
    } catch (error)
    {
        console.log('error signing up:', error);
    }
}

async function setValues(changes)
{
    let signup = await signUp(changes);
    changes.newuser = await signup;
    let updated = await setupProfile(changes);
    console.log(updated);
}

class MakeProfile extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            submitted    : false,
            otherProfiles: [],
            steamID      : "",
            username     : "",
            password     : "",
            firstname    : "",
            lastname     : "",
            avatarurl    : "",
            email        : "",
            bio          : ""
        };
    }

    submit(changes) {
      setValues(changes);
      this.setState({submitted: true});
    }

    isSubmitted()
    {
      if(this.state.submitted === true) {
        return (<CheckOutlined/>);
      }
      return (<CloseOutlined />);

    }

    letFinish()
    {
      if(this.state.submitted === true) {
        return (<Button><a href="/Leaderboard">Finish</a></Button>);
      }
      return (null);
    }


    render()
    {
        return (
            <div>
                <p/>
                <Form layout="vertical" colon={true}
                      onFinish={(changes) => this.submit(changes)}

                >
                    <Form.Item label="First Name" name="firstname" rules={[{
                        required: true, message: 'Please input your first name!'
                    }]}>
                        <Row>
                            <Col span={4}>
                                <Input/>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item label="Last Name" name="lastname" rules={[{
                        required: true, message: 'Please input your last name!'
                    }]}>
                        <Row>
                            <Col span={4}>
                                <Input/>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item label="Username" name="username" rules={[{
                        required: true, message: 'Please input a username!'
                    }]}>
                        <Row>
                            <Col span={4}>
                                <Input/>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{
                        required: true, message: 'Please input a password!'
                    }]}>
                        <Row>
                            <Col span={4}>
                                <Input/>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item label="E-mail" name="email" rules={[{
                        required: true,
                        message : 'Please input an email address!'
                    }]}>
                        <Row>
                            <Col span={4}>
                                <Input/>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item label="Avatar URL" name="avatar_src">
                        <Row>
                            <Col span={8}>
                                <Input/>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item label="Bio" name="bio">
                        <TextArea autoSize={{minRows: 3, maxRows: 5}}/>
                    </Form.Item>
                    <Divider orientation="left">Steam Profile</Divider>
                    {"To sync games you need to go to edit your (profile > privacy settings) and change all the drop downs there to public before pressing sync. You can change them back after sync is complete."}
                    <p/>
                    <Form.Item label="" name="connectSteam">
                        <Button><a href="auth/steam">Connect to Steam</a></Button>
                    </Form.Item>
                    <Divider orientation="left">Submit Before Finish</Divider>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        {this.isSubmitted()}
                    </Form.Item>
                </Form>
                {this.letFinish()}
            </div>

        );
    }
}

export default MakeProfile;
