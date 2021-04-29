import React from "react";

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
            onclick="registerButton()"
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
