import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import ProfilePage from './ProfilePage';
import LeaderboardPage from './LeaderboardPage';
import App from './App.js'

ReactDOM.render(
  <React.StrictMode>
      <LeaderboardPage/>
  </React.StrictMode>,
  document.getElementById('root')
);
