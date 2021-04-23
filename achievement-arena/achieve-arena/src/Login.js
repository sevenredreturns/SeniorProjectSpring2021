import React from "react";
require('cross-fetch/polyfill')
import AmazonCognitoIdentity from 'amazon-cognito-identity-js';

function signInButton() {

  var authenticationData = {
    Username : document.getElementById("inputUsername").value,
    Password : document.getElementById("inputPassword").value,
  };

  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

  var poolData = {
    UserPoolId : _config.cognito.userPoolId, // Your user pool id here
    ClientId : _config.cognito.clientId, // Your client id here
  };

  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  var userData = {
    Username : document.getElementById("inputUsername").value,
    Pool : userPool,
  };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      var accessToken = result.getAccessToken().getJwtToken();
      console.log(accessToken);
      window.open("profile.html");
    },

    onFailure: function(err) {
      alert(err.message || JSON.stringify(err));
    },
  });
}

function forgotpasswordbutton() {
  window.location.replace("http://www.w3schools.com");

}

class Login extends React.Component {



  render() {
    return (
      <div>
        <img className="log" />
        <div className="loginbox">
          {}
          <h1>ACHIEVEMENT HUNTER</h1>
          <input
            type="text"
            id="inputUsername"
            placeholder="Email address"
            name="username"
            required
            autofocus
          />
          <input
            type="password"
            id="inputPassword"
            placeholder="Password"
            name="password"
            required
          />
          {}
          <button
            className="btn btn-lg btn-primary btn-block"
            type="button"
            onClick={() => signInButton()}
          >
            Sign in
          </button>
          {}
          {}
          <button
            className="btn btn-sm btn-primary btn-block"
            onClick={() => window.location.href='forgotpassword.js'}
          >
            Forgot Password
          </button>
          {}
          <button
            className="btn btn-sm btn-primary btn-block"
            onClick={() => window.location.href='register.js'}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Login;

/* A fake authentication function */
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  }
};

