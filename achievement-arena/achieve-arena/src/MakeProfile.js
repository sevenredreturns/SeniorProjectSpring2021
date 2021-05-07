import React from "react";
import {Avatar, Button, Col, Divider, Form, Input, Modal, Row} from "antd";

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
                  <Input/>
              </Form.Item>
              <Form.Item label="Last Name" name="lastname">
                  <Input/>
              </Form.Item>
              <Form.Item label="Username" name="username">
                  <Input/>
              </Form.Item>
              <Form.Item label="Password" name="password">
                  <Input/>
              </Form.Item>
              <Form.Item label="Avatar" name="avatar_src">
                  <Input/>
              </Form.Item>
              <Form.Item label="Bio" name="bio">
                  <Input/>
              </Form.Item>
              <Form.Item>
                  <Button type="primary" htmlType="submit">
                      Submit
                  </Button>
              </Form.Item>
          </Form>
      <p>{"To sync games you need to go to edit your profile > privacy settings and change all the drop downs there to public before pressing sync. You can change them back after sync is complete."}</p>
      <Button type="primary">Sync</Button>
      <p/><p/><p/><Button type="primary"><a>Continue</a></Button>
      </div>

    );
  }
}

export default MakeProfile;
