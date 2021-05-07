import React from "react";
import {Avatar, Button, Col, Divider, Form, Input, Modal, Row} from "antd";

async function setupProfile(changes) {

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
      let updated = setupProfile(changes);
      window.location.reload();
      return (<a href="/Leaderboard" />)
  }

  render() {
    return (
      <div>
      <p />
          <Form layout="vertical" colon={true}
                onFinish={(changes) => this.setValues(changes)}>
              <Form.Item label="Username" name="username">
                  <Input/>
              </Form.Item>
              <Form.Item label="Password" name="password">
                  <Input/>
              </Form.Item>
              <Form.Item>
                  <Button type="primary" htmlType="submit">
                      Login
                  </Button>
              </Form.Item>
          </Form>

          <p /><p />
          <Button><a href="/MakeProfile">Make Account</a></Button>

      </div>

    );
  }
}

export default LoginPage;
