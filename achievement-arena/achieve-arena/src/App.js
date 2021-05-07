import React                                from 'react';
import {BrowserRouter, Route, Switch}       from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import ProfilePage                          from "./ProfilePage";
import MakeProfile                          from "./MakeProfile";
import ConfirmAccount                       from "./ConfirmAccount";
import LoginPage                            from "./LoginPage";
import Home                                 from "./Home";
import Leaderboard                          from "./Leaderboard";
import {Dropdown, Layout, Menu, PageHeader} from 'antd';
import Amplify, {Auth}                      from 'aws-amplify';
import awsconfig                            from './aws-exports';

Amplify.configure(awsconfig);

const {Header, Content, Footer} = Layout;

let userID = localStorage.getItem('userid');

async function signOut()
{
    try
    {
        await Auth.signOut();
        localStorage.setItem('userid', 0);
        userID = localStorage.getItem('userid');
        window.location.reload();
        console.log(userID);
    } catch (error)
    {
        console.log('error signing out: ', error);
    }
}

function loggedin()
{

    if (userID != 0)
    {
        return (
            <Menu>
                <Menu.Item key="0"><a href="/ProfilePage">Profile
                    Page</a></Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="3"><a onClick={() =>
                {
                    signOut();
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

                <Content style={{
                    alignContent: 'center', padding: '0 50px',
                    minHeight   : '1000px'
                }}>
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
                            <Route path="/ConfirmAccount">
                                <ConfirmAccount/>
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
