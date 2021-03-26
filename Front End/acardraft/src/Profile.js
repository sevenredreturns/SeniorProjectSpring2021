import React from "react";
import {Link, Route, useParams, useRouteMatch } from "react-router-dom";

const TrophyRoom = () => {

  return (
    <div>
      <h3>Trophy Room</h3>
    </div>
  );
}


const Profile = () => {
  const { url, path } = useRouteMatch();
  const info = "hello";

  return (
    <div>
    <ul>
      <div class = "container">
        <p>Info 1</p>
      </div>
      <div class = "container">
        <p>Info 2</p>
      </div>
      <div class = "container">
        <p>Info 3 TEST {info}</p>
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
  );
};

export default Profile
