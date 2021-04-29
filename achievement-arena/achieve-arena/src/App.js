import React                               from "react";
import {Button, Col, Divider, Layout, Row} from 'antd';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch}               from "react-router-dom";
import ProfileTry                             from "./ProfileTry";
import GameLeaderboard                        from "./GameLeaderboard";
import PrivateRoute                        from "./PrivateRoute";
import ProfilePage 						   from "./ProfilePage";
import NotFound 						   from "./NotFound";
import Login from "./Login";
//import Steam from "./main";


const {Header, Footer, Content} = Layout;


const Home = () =>
{
    const home = "Welcome to Achievement Arena!  Come, Fight, Compete with your friends for the highest achievement scores!";
    return (
                <h2>{home}</h2>
    );
};

const Admin = () => (
    <div>
        <h2>Welcome admin!</h2>
    </div>
);


export default function App()
{
    return (
        <>
            <Layout>
                <Header>
                    <Router>
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
                                <Link to="/login"> Login</Link>
                            </Col>
                            <Col className="gutter-row" span={6}>
                            </Col>
                        </Row>
                    </div>

                    <Switch>
                        <Route exact path="/"><Home/></Route>
                        <Route path="/profile"><ProfileTry/></Route>
                        <Route path="/leaderboards"><GameLeaderboard/></Route>
                        <Route path="/login"><Login/></Route>
                        <PrivateRoute path="/admin" component={Admin}/>
						            <Route component={NotFound}/>
                    </Switch>
                    </Router>
                </Header>
            </Layout>
        </>
    );
}
