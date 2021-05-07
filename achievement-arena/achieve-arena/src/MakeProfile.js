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
        ownedGames: [],
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
              <Form.Item label="First Name" name="firstname">
                <Row>
                  <Col span={4}>
                    <Input/>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item label="Last Name" name="lastname">
                <Row>
                  <Col span={4}>
                    <Input/>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item label="Username" name="username">
                <Row>
                  <Col span={4}>
                    <Input/>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item label="Password" name="password">
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
              <Form.Item label="" name="sync">
              {"To sync games you need to go to edit your profile > privacy settings and change all the drop downs there to public before pressing sync. You can change them back after sync is complete."}<p/>
                  <Button type="primary">Sync</Button>
              </Form.Item>
              <Form.Item>
                  <Button type="primary" htmlType="submit">
                      <a href="/Leaderboard">Submit</a>
                  </Button>
              </Form.Item>
          </Form>
      </div>

    );
  }
}

export default MakeProfile;
