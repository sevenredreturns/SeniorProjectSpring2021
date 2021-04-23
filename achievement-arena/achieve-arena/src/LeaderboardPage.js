import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import GameLeaderboard from './GameLeaderboard'
import { Layout, Menu, Breadcrumb, Dropdown, Row, Col, Divider, Card, PageHeader } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

var userID = 1;

function Leaderboard() {
  if (userID != null) {
    return (
    <div>
    <Divider orientation="left">Leaderboards</Divider>
    <Row justify="space-around" align="left">
      <Col span={3}>
        <div style={{ itemAlign: 'center' }}>
          <Card title="Your Overall Rank" bordered={false}><UserOutlined />
          <Divider type="vertical" />Player Name<Divider type="horizontal" />Rank
          </Card>
        </div>
      </Col>
      <Col span={5}>
        <div><GameLeaderboard /></div>
      </Col>
      <Col />
      <Col />
    </Row>
    </div>
    );
  }
  return (
    <div>
    <Divider orientation="left">Leaderboards</Divider>
    <Row justify="space-around" align="center">
      <Col span={6}>
        <div><GameLeaderboard /></div>
      </Col>
    </Row>
    </div>
  )
}

function ProfilePage() {
  if (userID != null) {
    return (
    <div>
    <Divider orientation="left">Profile</Divider>
    <Row justify="space-around" align="left">
      <Col span={3}>
        <div style={{ itemAlign: 'center' }}>
          <Card title="Your Overall Rank" bordered={false}><UserOutlined />
          <Divider type="vertical" />Player Name<Divider type="horizontal" />Rank
          </Card>
        </div>
      </Col>
      <Col span={5}>
        <div><GameLeaderboard /></div>
      </Col>
      <Col />
      <Col />
    </Row>
    </div>
    );
  }
  return (
    <div>
    <Divider orientation="left">Profile</Divider>
    <Row justify="space-around" align="center">
      <Col span={6}>
        <div><GameLeaderboard /></div>
      </Col>
    </Row>
    </div>
  )
}


function login() {
  userID = 1;
  console.log(userID);
}

function logout() {
  userID = null;
  console.log(userID);
}

function loggedin() {

  if (userID != null) {
    return (
      <Menu>
        <Menu.Item key="0"><a href="/ProfilePage">Profile Page</a></Menu.Item>
        <Menu.Item key="1"><a>Friends</a></Menu.Item>
        <Menu.Item key="2"><a>Settings</a></Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3"><a onClick={() => {logout()}}>Logout</a></Menu.Item>
      </Menu>
    );
  }

  return (
    <Menu>
      <Menu.Item key="4"><a onClick={() => {login()}}>Login</a></Menu.Item>
    </Menu>
  );
}

function LeaderboardPage() {
    return (
      <div>
      <PageHeader title="Achievement Arena" />
      <Layout className="header">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" style={{ alignContent: 'right' }}>
          <Menu.Item key="5"><a href="/Leaderboard">Leaderboards</a></Menu.Item>
          <Menu.Item key="6">
            <Dropdown overlay={loggedin()} trigger={['click']}>
            <a onClick={e => e.preventDefault()}>Profile</a>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Header>
      <Content mode="horizontal" style={{ padding: '0 50px', minHeight: '1000px' }}>
      <BrowserRouter>
        <Switch>
          <Route path="/Leaderboard">
            {Leaderboard()}
          </Route>
          <Route path="/ProfilePage">
            {ProfilePage()}
          </Route>
          <Route path="/">
            {Leaderboard()}
          </Route>
        </Switch>
      </BrowserRouter>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Achievement Arena ©2021</Footer>
    </Layout>
    </div>
    );
}

export default LeaderboardPage;
