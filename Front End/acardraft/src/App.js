import React from "react";
import { Layout, Button, Divider, Row, Col } from 'antd';
import './App.css';
import { Link, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import Leaderboards from "./Leaderboards";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

const Home = () => {
  const home = "homepage";
  return(
  <Layout>
  <Content>

    <h2>Here is where the {home} is.</h2>
    <Divider plain>  Divider </Divider>
    <Button type="primary">Button</Button>

  </Content>
  <Footer>
    Footer
  </Footer>
  </Layout>
)};

const Admin = () => (
  <div>
    <h2>Welcome admin!</h2>
  </div>
);

const { Header, Footer, Sider, Content } = Layout;

export default function App() {
  return (
    <>
    <Layout>
    <Header style={{ padding: '0 50px' }}>
      <div>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
            <Link to="/"> Home </Link>
        </Col>
        <Col className="gutter-row" span={6}>
            <Link to="/profile"> Profile </Link>
        </Col>
        <Col className="gutter-row" span={6}>
            <Link to="/leaderboards"> Leaderboards </Link>
        </Col>
        <Col className="gutter-row" span={6}>
            <Link to="/admin"> Admin </Link>
        </Col>
        </Row>

     <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/profile"><Profile /></Route>
      <Route path="/leaderboards"><Leaderboards /></Route>
      <PrivateRoute path="/admin" component={Admin} />
    </Switch>
   </div>
   </Header>

   </Layout>
   </>
 );
}
