import React from "react";
import "./Auth.css";
import Logo from "../../components/Logo/Logo";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <div className="auth-logo">
          <Logo />
        </div>
        <div className="Webname">
          <h1>Pet Pals</h1>
          <h6>
            The social media app for pet lovers to find and share pet-related
            content.
          </h6>
        </div>
      </div>
      <Login />
    </div>
  );
};

function Login() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Login</h3>
        <div>
          <input
            type="text"
            name="username"
            id=""
            placeholder="Username"
            className="infoInput"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            className="infoInput"
          />
        </div>
        <div>
          <span style={{ fontSize: "0.8rem" }}>
            Don't have an account? Sign up
          </span>
        </div>
        <button className="button infoButton">Login</button>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            name="firstName"
            id=""
            placeholder="First Name"
            className="infoInput"
          />
          <input
            type="text"
            name="lastName"
            id=""
            placeholder="Last Name"
            className="infoInput"
          />
          <div>
            <input
              type="text"
              name="username"
              id=""
              placeholder="Username"
              className="infoInput"
              style={{ width: "100%" }}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              className="infoInput"
            />
            <input
              type="password"
              name="confirmPassword"
              id=""
              placeholder="Confirm password"
              className="infoInput"
            />
          </div>
        </div>
        <div>
          <span style={{ fontSize: "0.8rem" }}>
            Already have an account? Login
          </span>
        </div>
        <bytton className="button infoButton">Sign Up</bytton>
      </form>
    </div>
  );
}

export default Auth;
