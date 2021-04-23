import React from "react";
import { Layout, Button, Divider, Row, Col, Card } from 'antd';
import './App.css';
import { Link, Route, Switch } from "react-router-dom";
import Profile from "./profileTry";
import Leaderboards from "./Leaderboards";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";



const { Header, Footer, Content } = Layout;


const Home = () => {
  const home = "homepage";
  return(
  <Layout>
  <Content>



    <Row gutter={[24,16]} >

  <Col span={10}><Card title="News"><div><table>
  <tr>
    <td>This is a news post. This is a news post. This is a news post. </td>
  </tr>
  <tr>
    <td>This is a news post. This is a news post. This is a news post. This is a news post. </td>
  </tr>
  <tr>
    <td>This is a news post. This is a news post. </td>
  </tr>
</table></div></Card></Col>
  <Col span={10}><Card title ="About"><div><p>Here is some example text! Here is some example text! Here is some example text! Here is some example text! Here is some example text! </p></div></Card></Col>


</Row>



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
