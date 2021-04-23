import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Leaderboard from "./Leaderboard";

const Leaderboards = ({ match }) => {
  const leaderboardData = [
    {
      id: 1,
      name: "ACTION",
      description: "ACTION games"
    },
    {
      id: 2,
      name: "RPG",
      description: "RPG games"
    },
    {
      id: 3,
      name: "PUZZLE",
      description: "PUZZLE games"
    }
  ];
  const { url } = useRouteMatch();

  /* Create an array of `<li>` items for each product */
  const linkList = leaderboardData.map((leaderboard) => {
    return (
      <li key={leaderboard.id}>
        <Link to={`${url}/${leaderboard.id}`}>{leaderboard.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <div>
        <div>
          <h3>Leaderboards</h3>
          <ul>{linkList}</ul>
        </div>
      </div>

      <Route path={`${url}/:leaderboardId`}>
        <Leaderboard data={leaderboardData} />
      </Route>
      <Route exact path={url}>
        <p>Please select a leaderboard.</p>
      </Route>
    </div>
  );
};

export default Leaderboards;
