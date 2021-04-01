import React from "react";
import { Layout, Button, Divider, Row, Col } from 'antd';
import './App.css';
import { Link, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import Leaderboards from "./Leaderboards";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";



const { Header, Footer, Content } = Layout;


const Home = () => {
  const home = "homepage";
  return(
  <Layout>
  <Content>

    <h2>Here is where the {home} is.</h2>
    <Divider plain>  Divider </Divider>


  </Content>
  <Footer style = {{position: "sticky", bottom: "0"}}>
      <p style ={{fontSize: 'x-small',}}>Test</p>  <Button type="primary">Button</Button>
  </Footer>
  </Layout>
)};

const Admin = () => (
  <div>
    <h2>Welcome admin!</h2>
  </div>
);



export default function App() {
  return (
    <>
    <Layout>
    <Header>
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
        </div>

     <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/profile"><Profile /></Route>
      <Route path="/leaderboards"><Leaderboards /></Route>
      <PrivateRoute path="/admin" component={Admin} />
    </Switch>
   </Header>

   </Layout>

   </>
 );
}
