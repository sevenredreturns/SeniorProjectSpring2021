import React from "react";
import {Avatar, Button, Col, Divider, Form, Input, Modal, Row} from "antd";
import { Auth } from 'aws-amplify';

async function setupProfile(changes) {

}

async function signIn(changes) {

    let username = changes.username;
    let password = changes.password;
    try {
        const user = await Auth.signIn(username, password);
        console.log(user);
    } catch (error) {
        console.log('error signing in', error);
    }
}

class LoginPage extends React.Component {
  constructor(props)
  {
      super(props);
      this.state = {
        username: "",
        password: "",
      };
  }

  setValues(changes)
  {
      let signedin = signIn(changes);
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
              <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Row>
                  <Col span={4}>
                    <Input/>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item>
                  <Button type="primary" htmlType="submit">
                      Login
                  </Button>
              </Form.Item>
          </Form>

          <p /><p />
          <Button><a href="/MakeProfile">Make Account</a></Button>
          <button><a href="/ConfirmAccount">Confirm Account</a></button>

      </div>

    );
  }
}

export default LoginPage;
