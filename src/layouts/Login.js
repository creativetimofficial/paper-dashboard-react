import React from "react";
import "./css/login.css";
import { Button, message } from "antd";
import base from "../url.json";
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      username: '',
      password: ''
    });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoading(false);
    // console.log(name);
    // console.log(value);

    console.log(formData);
    setFormData(prevState => ({
      ...prevState,
      [name]: value
      
    }));
    console.log(formData);
  };

  function handleSubmit(event){

    event.preventDefault();
    setLoading(true);
    axios.post('http://172.235.10.116:8001/'+'data/login',formData)
    .then((res)=>{
      setLoading(false);
      message.success('Login successfully');
      console.log(res.data.token.access_token)
      localStorage.setItem('token',res.data.token.access_token)
      navigate("/admin/dashboard")
    }).catch((error)=>{
      message.error('Bad credentials');
      setLoading(false);
    })
    

  }

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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
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
                // onClick={loginHandler}
                // You can add an onClick handler here if needed
                loading ={loading}


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
