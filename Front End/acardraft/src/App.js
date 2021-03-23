import React from "react";
import { Button, Divider } from 'antd';
import './App.css';
import { Link, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import Leaderboards from "./Leaderboards";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

const Home = () => (
  <div>
    <h2>Home</h2>
    <Divider plain> </Divider>
    <Button type="primary">Button</Button>
  </div>
);

const Admin = () => (
  <div>
    <h2>Welcome admin!</h2>
  </div>
);

export default function App() {
  return (
    <div>
     <nav className="navbar navbar-light">
       <ul className="nav navbar-nav">
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/profile">Profile</Link>
         </li>
         <li>
           <Link to="/leaderboards">Leaderboards</Link>
         </li>
         <li>
           <Link to="/admin">Admin</Link>
         </li>
       </ul>
     </nav>

     <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/profile"><Profile /></Route>
      <Route path="/leaderboards"><Leaderboards /></Route>
      <PrivateRoute path="/admin" component={Admin} />
    </Switch>
   </div>
 );
}
