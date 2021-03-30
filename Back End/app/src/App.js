import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './UserList';
import UserEdit from './UserEdit';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/user' exact={true} component={UserList}/>
          <Route path='/user/:id' component={UserEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;