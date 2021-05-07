import React from "react";
import {Avatar, Button, Col, Divider, Form, Input, Modal, Row} from "antd";
import { Auth } from 'aws-amplify';

async function confirmSignUp(changes) {
    let username = changes.username;
    let code = changes.code;
    try {
        let confirmed = await Auth.confirmSignUp(username, code);
        console.log(confirmed)

    } catch (error) {
        console.log('error confirming sign up', error);
    }
}

class ConfirmAccount extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            username: "",
            code: "",
        };
    }

    setValues(changes)
    {
        let signedin = confirmSignUp(changes);
        console.log(signedin);
        //window.location.reload();
        return (<a href="/Leaderboard" />)
    }

    render() {
        return (
            <div>
                <p />
                <Form layout="vertical" colon={true}
                      onFinish={(changes) => this.setValues(changes)}>
                    <Form.Item label="E-mail address" name="username" rules={[{ required: true, message: 'Please input your e-mail address!' }]}>
                        <Row>
                            <Col span={4}>
                                <Input/>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item label="Confirmation Code" name="code" rules={[{ required: true, message: 'Please input your Confirmation Code!' }]}>
                        <Row>
                            <Col span={4}>
                                <Input/>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Confirm
                        </Button>
                    </Form.Item>
                </Form>

                <p /><p />

            </div>

        );
    }
}

export default ConfirmAccount;
