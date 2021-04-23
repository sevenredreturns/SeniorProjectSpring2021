import React from "react";
require('cross-fetch/polyfill')
import AmazonCognitoIdentity from 'amazon-cognito-identity-js';


function forgotpasswordbutton() {
  window.location.replace("http://www.w3schools.com");

}
class ForgotPassword extends React.Component {
  render() {
    return (
      <div>
        <img className="log" />
        <div className="loginbox">
          {}
          <h1>Reset Password</h1>
          <input
            type="text"
            id="inputUsername"
            placeholder="Email address"
            name="username"
            required
            autofocus
          />
          {}
          {}
          <button
            className="btn btn-lg btn-primary btn-block"
            type="text"
            onclick={() => forgotpasswordbutton()}
          >
            Reset
          </button>
          <br />
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
