import React from "react";
import {Avatar, Button, Col, Divider, Form, Input, Modal, Row} from "antd";

const { TextArea } = Input

async function setupProfile(changes) {

}

class MakeProfile extends React.Component {
  constructor(props)
  {
      super(props);
      this.state = {
        otherProfiles: [],
        steamID: "",
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        avatarurl: "",
        bio: ""
      };
  }

  setValues(changes)
  {
      let updated = setupProfile(changes);
      window.location.reload();
  }

  render() {
    return (
      <div>
      <p />
          <Form layout="vertical" colon={true}
                onFinish={(changes) => this.setValues(changes)}>
              <Form.Item label="First Name" name="firstname" rules={[{ required: true, message: 'Please input your first name!' }]}>
                <Row>
                  <Col span={4}>
                    <Input/>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item label="Last Name" name="lastname" rules={[{ required: true, message: 'Please input your last name!' }]}>
                <Row>
                  <Col span={4}>
                    <Input/>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input a username!' }]}>
                <Row>
                  <Col span={4}>
                    <Input/>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input a password!' }]}>
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
                  <TextArea autoSize={{ minRows: 3, maxRows: 5 }}/>
              </Form.Item>
              <Divider orientation="left">Steam Profile</Divider>
              {"To sync games you need to go to edit your (profile > privacy settings) and change all the drop downs there to public before pressing sync. You can change them back after sync is complete."}<p/>
              <Form.Item label="Enter Your Steam ID" name="steamID" rules={[{ required: true, message: 'Please input a steamID!' }]}>
                <Row>
                  <Col span={4}>
                    <Input/>
                  </Col>
                </Row>
              </Form.Item>
              <Divider orientation="left">Online Submit when complete</Divider>
              <Form.Item>
                  <Button type="primary" htmlType="submit">
                      Submit
                  </Button>
              </Form.Item>
          </Form>
          <Button><a href="/Leaderboard">Finish</a></Button>
      </div>

    );
  }
}

export default MakeProfile;
