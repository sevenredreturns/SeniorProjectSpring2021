import React, { Component, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  Row,
  Col,
  Divider,
  Avatar,
  Breadcrumb,
  Layout,
  Menu,
  Dropdown,
  PageHeader,
  Modal,
  Button,
  Input,
  Upload, Form
} from "antd";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";

const pageUserID = "6079858623c4150084b79241";
const userID = "6079858623c4150084b79241";
//const fs = require('fs');

class ProfilePage extends React.Component
{

  constructor(props)
  {
      super(props);
      this.state = {
        user: [],
        username: "",
        bio: "",
        avatarurl: "",
        loading: true,
        visible: false,
        formRef: true};
  }

  componentDidMount()
  {
      this.setState({loading: true});
      fetch('/api/user/' + pageUserID)
          .then(response => response.json())
          .then(data => this.setState({username: data.username, bio: data.bio, avatarurl: data.avatarurl, loading: false}));
  }

  updateValues(changes) {
    if(changes.username != null && changes.username != "") {
      this.setState({username: changes.username});
    }
    if(changes.bio != null && changes.bio != "") {
      this.setState({bio: changes.bio});
    }
    if(changes.avatar_src != null && changes.avatar_src != "") {
      this.setState({avatarurl: changes.avatar_src});
    }
    this.setState({visible: false});
  }

  App() {
    return (
      <>
        <Button type="primary" onClick={() => {this.setState({visible: true})}}>
          Edit Profile
        </Button>
        <Modal
          visible={this.state.visible}
          title="Editing your profile"
          onCancel={() => this.setState({visible: false})}
          footer={null}
        >
          <Form layout="vertical" colon={true} onFinish = {(changes) => this.updateValues(changes)}>
            <Form.Item label="Username" name = "username">
    			     <Input/>
            </Form.Item>
            <Form.Item label="Bio" name = "bio">
    			     <Input/>
            </Form.Item>
            <Form.Item label="Avatar" name = "avatar_src">
    			     <Input/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
              Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }

  render()
  {
    if (userID === pageUserID) {
      return(
    	<>
              <Divider orientation="left">Profile</Divider>
              <Row justify="center" align="middle">
                <Col flex={4}></Col>
                <Col span={2}>
                  <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
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
      </>
      );
      console.log("This is you");
    } else {
      return(
      <>
              <Divider orientation="left">Profile</Divider>
              <Row justify="center" align="middle">
                <Col flex={4}></Col>
                <Col span={2}>
                  <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
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
              {console.log("This isn't you")}
    	  </>
      );
    }
  }
}

export default ProfilePage;
