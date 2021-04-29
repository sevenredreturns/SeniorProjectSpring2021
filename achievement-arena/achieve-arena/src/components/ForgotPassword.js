import React from "react";

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
            onclick="forgotpasswordbutton()"
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
