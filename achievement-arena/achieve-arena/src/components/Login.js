import React from "react";

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
            onclick="signInButton()"
          >
            Sign in
          </button>
          {}
          {}
          <button
            className="btn btn-sm btn-primary btn-block"
            onclick="window.location.href='forgotpassword.html'"
          >
            Forgot Password
          </button>
          {}
          <button
            className="btn btn-sm btn-primary btn-block"
            onclick="window.location.href='register.html'"
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
