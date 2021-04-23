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

class Register extends React.Component {
  render() {
    return (
      <div>
        <img className="log" />
        <div className="loginbox">
          {}
          <h1>Register</h1>
          <input
            type="personalname"
            className="form-control"
            id="personalnameRegister"
            placeholder="Name"
            pattern=".*"
            required
          />
          <input
            type="email"
            className="form-control"
            id="emailInputRegister"
            placeholder="Email"
            pattern=".*"
            required
          />
          <input
            type="password"
            className="form-control"
            id="passwordInputRegister"
            placeholder="Password"
            pattern=".*"
            required
          />
          <input
            type="password"
            className="form-control"
            id="confirmationpassword"
            placeholder="Confirm Password"
            pattern=".*"
            required
          />
          <button
            id="mainbutton"
            className="btn btn-lg btn-primary btn-block"
            type="button"
            onclick= {() => registerButton()}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
