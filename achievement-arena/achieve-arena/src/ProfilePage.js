import React, { useState, useCallback } from "react";
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
const { Header, Content, Footer } = Layout;
//const fs = require('fs');
const data = "";

var username = "";
var bio = "";
var avatar_src = "";

function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

// this requests the file and executes a callback with the parsed result once
//   it is available
//fetchJSONFile('users.json', function(data){
    // do something with your data
//	data = this.data;
//    console.log(data);
//});

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },
    defaultFileList: []
  };

  const state = {
    loading: false,
    visible: false
  };


  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit Profile
      </Button>
      <Modal
        title="Edit Profile"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={state[0]}
            onClick={handleOk}
          >
            Submit Changes
          </Button>
        ]}
      >
        <p>Avatar Url</p>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
        <p></p>
        <Input></Input>
        <p>Username</p>
        <Input></Input>
        <p>Bio</p>
        <Input></Input>
      </Modal>
    </>
  );
};


//const rawdata = fs.readFileSync('./users.json');
const users = data //JSON.parse(rawdata);

console.log(users);

let user = "";
var i;
for (i = 0; i < users.length; i++) {
  if (users[i]["_id"]["$oid"] === pageUserID) {
    user = users[i]["username"];
    break;
  }
}

var userID = "6079858623c4150084b79241";
var Bio =
  "This would be where the bio is... IF I HAD ONE. Mostly because things seem to be working fine, it just needs some fixing to get things done and make this field a read from file";
var AvatarImage =
  "https://cdn.discordapp.com/attachments/448978250081894413/825743665816535040/162902799_799223194347664_2472862927620242404_n.png";
var UserName = user;

	var usernameToBeChanged = "";
	var bioToBeChanged = "";
	var avatar_srcToBeChanged = "";
const ModalForm = ({ visible, onCancel, onCreate, form }) => {
 console.log(username)
  return (
    <Modal
      visible={visible}
      title="Editing your profile"
      okText="Submit"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical">
        <Form.Item label="Username" name = "username">
			<Input onChange = {value => {username = value.nativeEvent.srcElement.defaultValue;}}/>
        </Form.Item>
        <Form.Item label="Bio" name = "bio">
			<Input type="textarea" onChange = {value => {bio = value.nativeEvent.srcElement.defaultValue;}}/>
        </Form.Item>
        <Form.Item label="Avatar" name = "avatar_src">
			<Input type="textarea" onChange = {value => {avatar_src = value.nativeEvent.srcElement.defaultValue;}} />
        </Form.Item>
      </Form>
    </Modal>
  );

};function refreshPage() {
  window.location.reload();
}

const App2 = () => {
  const [visible, setVisible] = useState(false);
  const [formRef, setFormRef] = useState(true);




  const handleCreate = () => {
	  //UserName = usernameToBeChanged;
	  //Bio = bioToBeChanged;
	  //AvatarImage = avatar_srcToBeChanged;

	  //Data to be added to the JSON file
       setVisible(false);
	   refreshPage();
  };

  const saveFormRef = useCallback(node => {
    if (node !== null) {
      setFormRef(node);
    }
  }, []);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Edit Profile
      </Button>
      <ModalForm
        ref={saveFormRef}
        visible={visible}
        onCancel={() => setVisible(false)}
        onCreate={() => handleCreate()}

      />
    </>
  );
};

const ProfilePage = () =>
{
  function login() {
    userID = "6079858623c4150084b79241";
    refreshPage();
    console.log(userID);
  }

  function logout() {
    userID = null;
    refreshPage();
    console.log(userID);
  }

  function loggedin() {
    if (userID != null) {
      return (
        <Menu>
          <Menu.Item key="0">
            <a>Profile Page</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a>Settings</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">
            <a
              onClick={() => {
                logout();
              }}
            >
              Logout
            </a>
          </Menu.Item>
        </Menu>
      );
    }
    return (
      <Menu>
        <Menu.Item key="4">
          <a
            onClick={() => {
              login();
            }}
          >
            Login
          </a>
        </Menu.Item>
      </Menu>
    );
  }

  if (userID === pageUserID) {
    return(
  	<>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Achievement Arena</Breadcrumb.Item>
              <Breadcrumb.Item>Profile</Breadcrumb.Item>
            </Breadcrumb>
            <Divider orientation="left">Profile</Divider>
            <Row justify="center" align="middle">
              <Col flex={4}></Col>
              <Col span={2}>
                <Avatar
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                  src={AvatarImage}
                />
              </Col>
              <Col flex={4}>{UserName}</Col>
              <App2/>
              <Col flex={2}></Col>
            </Row>

            <Divider orientation="left"></Divider>
            <Row justify="space-around" align="middle">
              <Col span={8}>{Bio}</Col>
            </Row>
            </>
    );
    console.log("This is you");
  } else {
    return(
    <>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Achievement Arena</Breadcrumb.Item>
              <Breadcrumb.Item>Profile</Breadcrumb.Item>
            </Breadcrumb>
            <Divider orientation="left">Profile</Divider>
            <Row justify="center" align="middle">
              <Col flex={4}></Col>
              <Col span={2}>
                <Avatar
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                  src={AvatarImage}
                />
              </Col>
              <Col flex={4}>{UserName}</Col>
              <Col flex={2}></Col>
            </Row>

            <Divider orientation="left"></Divider>
            <Row justify="space-around" align="middle">
              <Col span={8}>{Bio}</Col>
            </Row>
  	  </>
    );
    console.log("This isn't you");
  }
}

export default ProfilePage
