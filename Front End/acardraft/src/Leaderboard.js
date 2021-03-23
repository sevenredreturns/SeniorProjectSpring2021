import React from "react";
import { useParams } from "react-router-dom";

const Leaderboard = ({ data }) => {
  const { leaderboardId } = useParams();
  const leaderboard = data.find(p => p.id === Number(leaderboardId));
  let leaderboardData;

  if (leaderboard) {
    leaderboardData = (
      <div>
        <h3> {leaderboard.name} </h3>
        <p>{leaderboard.description}</p>
        <hr />
        <h4>{leaderboard.status}</h4>
      </div>
    );
  } else {
    leaderboardData = <h2> Sorry. Leaderboard doesn't exist </h2>;
  }

  return (
    <div>
      <div>{leaderboardData}</div>
    </div>
  );
};

export default Leaderboard;
