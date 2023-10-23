import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Auth.css";
import Logo from "../../components/Logo/Logo";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  // const dispatch = useDispatch();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [confirmPassword, setConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (isSignUp) {
    //   data.password === data.confirmPassword
    //     ? dispatch(signUp(data))
    //     : setConfirmPassword(false);
    // } else {
    //   dispatch(login(data));
    // }
  };

  const resetForm = () => {
    setConfirmPassword(true);
    setData({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="Auth">
      {/* Left side */}
      <div className="a-left">
        <div className="auth-logo">
          <Logo />
        </div>
        <div className="Webname">
          <h1>Pet Pals</h1>
          <h6>
            The social media app for pet lovers to find and share pet-related
            content
          </h6>
        </div>
      </div>

      {/* Right side */}
      <div className="a-right">
        <form action="" className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                name="firstName"
                id=""
                placeholder="First Name"
                className="infoInput"
                onChange={handleChange}
                value={data.firstName}
              />
              <input
                type="text"
                name="lastName"
                id=""
                placeholder="Last Name"
                className="infoInput"
                onChange={handleChange}
                value={data.lastName}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              name="username"
              id=""
              placeholder="Username"
              className="infoInput username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              className="infoInput"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                name="confirmPassword"
                id=""
                placeholder="Confirm password"
                className="infoInput"
                onChange={handleChange}
                value={data.confirmPassword}
              />
            )}
          </div>
          <span
            style={{
              fontSize: "12px",
              color: "red",
              display: confirmPassword ? "none" : "block",
            }}
          >
            Password and Confirm Password must be the same
          </span>
          <div>
            <span
              className="infoText"
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
              style={{ cursor: "pointer" }}
            >
              {isSignUp
                ? "Already have an account? Login"
                : "Don't have an account? Signup"}
            </span>
          </div>
          <button className="button infoButton">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
