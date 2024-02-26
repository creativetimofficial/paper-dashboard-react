import React from "react";
import "./css/login.css";
import { Button } from "antd";


const Login = () => {
  return (
    <div className="Login">
      <div className="content">
      <video autoPlay loop muted className="background-video" playsInline>
        <source src={require("assets/img/bg_2.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="login-container">
          <div className="image-container">
            <img src={require("assets/img/job.jpg")} alt="Background" />
          </div>
          <div className="form-container">
            <h1>Sign in to HireFlow</h1>
            <p>by FocusR AI</p>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="additional-options">
                <label>
                  <input type="checkbox" name="rememberMe" />
                  Remember Me
                </label>
                <a href="#forgot-password" className="forgot-password">
                  Forgot Password?
                </a>
              </div>
              <Button
                className="log-button"
                type="primary"
                htmlType="submit"
                // You can add an onClick handler here if needed
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
