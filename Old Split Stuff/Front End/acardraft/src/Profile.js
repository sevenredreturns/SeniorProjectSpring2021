import React from "react";
import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import {Layout, Button, Divider, Row, Col} from 'antd';
//import * as UController from "../controllers/user.controller.js";

const {Header, Footer, Content} = Layout;

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

async function getUser(id) {

    const user = await (await fetch(`/api/user/${id}`));

    console.log(user);
    return;

}

const Profile = () => {

    getUser('60627f8adc5a882878a39bb8');
    const {url, path} = useRouteMatch();
    //const {user} = this.state;

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
                        <div class="container" name="Basics">
                            <Row gutter={16}>
                                <Col className="gutter-row" span={6}>
                                    <p>{user.username}</p>
                                </Col>
                                <Col className="gutter-row" span={3}>
                                    <p>{age}, {gender}</p>
                                    <p> {location} </p>
                                </Col>
                            </Row>
                        </div>
                        <div class="container" name="Description">
                            <p>{desc}</p>
                        </div>
                        <div class="container" name="Games">
                            <p>{user.ownedGames}</p>
                        </div>
                        <div>
                            <li>
                                <Link to={`${url}/trophyroom`}>Trophy Room</Link>
                            </li>
                        </div>
                    </ul>
                    <Route path={`${path}/trophyroom`}>
                        <TrophyRoom/>
                    </Route>
                </div>
            </Content>
        </Layout>
    );
};

export default Profile
