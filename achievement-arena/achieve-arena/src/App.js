import React                                from 'react';
import {BrowserRouter, Route, Switch}       from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import ProfilePage                          from "./ProfilePage";
import MakeProfile                          from "./MakeProfile";
import LoginPage                            from "./LoginPage";
import Home                                 from "./Home";
import Leaderboard                          from "./Leaderboard";
import {Dropdown, Layout, Menu, PageHeader} from 'antd';

const {Header, Content, Footer} = Layout;

var userID = 1;

function login()
{
    userID = 1;
    console.log(userID);
}

function logout()
{
    userID = null;
    console.log(userID);
}

function loggedin()
{

    if (userID != null)
    {
        return (
            <Menu>
                <Menu.Item key="0"><a href="/ProfilePage">Profile
                    Page</a></Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="3"><a onClick={() =>
                {
                    logout();
                }}>Logout</a></Menu.Item>
            </Menu>
        );
    }
    return (
        <Menu>
            <Menu.Item key="4"><a href="/LoginPage">Login</a></Menu.Item>
        </Menu>
    );
}

function App()
{
    return (
        <div>
            <PageHeader title="Achievement Arena"/>
            <Layout className="header">
                <Header>
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal"
                          style={{alignContent: 'right'}}>
                        <Menu.Item key="4"><a href="/">Home</a></Menu.Item>
                        <Menu.Item key="5"><a
                            href="/Leaderboard">Leaderboards</a></Menu.Item>

                        <Menu.Item key="6">
                            <Dropdown overlay={loggedin()} trigger={['click']}>
                                <a onClick={e => e.preventDefault()}>Profile</a>
                            </Dropdown>
                        </Menu.Item>
                        {/*<Menu.Item key="7"><a href="/UpdateUserGames">Update User Games Tester</a></Menu.Item>*/}
                    </Menu>
                </Header>

                <Content style={{padding: '0 50px', minHeight: '1000px'}}>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/Leaderboard">
                                <Leaderboard/>
                            </Route>
                            <Route path="/LoginPage">
                                <LoginPage/>
                            </Route>
                            <Route path="/ProfilePage">
                                <ProfilePage/>
                            </Route>
                            <Route path="/MakeProfile">
                                <MakeProfile/>
                            </Route>
                            {/*<Route path = "/UpdateUserGames">
                             <UpdateUserGames />
                             </Route>*/}
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </Content>
                <Footer style={{textAlign: 'center'}}>Achievement Arena
                    ©2021</Footer>
            </Layout>
        </div>
    );
}

export default App;
