import React from "react";
import {Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { Layout, Button, Divider, Row, Col } from 'antd';

const { Header, Footer, Content } = Layout;

const TrophyRoom = () => {

  return (
    <Layout>
    <Content>
    <div>
      <h3>Trophy Room</h3>
    </div>
    </Content>
    </Layout>
  );
}


const Profile = () => {
  const { url, path } = useRouteMatch();
  const userName = "Ian";
  const age = "27";
  const gender = "M";
  const location = "East Coast, US";
  const desc = "Hello";
  const games = "No games";

  return (
    <Layout>
    <Content>
    <div>
    <ul>
      <div class = "container" name = "Basics">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
          <p>{userName}</p>
          </Col>
        <Col className="gutter-row" span={3}>
        <p>{age}, {gender}</p>
        <p> {location} </p>
        </Col>
        </Row>
      </div>
      <div class = "container" name = "Description">
        <p>{desc}</p>
      </div>
      <div class = "container" name = "Games">
        <p>{games}</p>
      </div>
      <div>
        <li>
          <Link to={`${url}/trophyroom`}>Trophy Room</Link>
        </li>
      </div>
    </ul>
    <Route path = {`${path}/trophyroom`}>
      <TrophyRoom />
    </Route>
    </div>
    </Content>
    </Layout>
  );
};

export default Profile
