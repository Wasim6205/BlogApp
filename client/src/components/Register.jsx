import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const Register = () => {
  return (
    <div className="signup_container">
      <div className="signup_form">
        <h2>Sign Up</h2>
        <form action="">
            <div>
              <label htmlFor="name">Username:</label>
              <input type="text" placeholder="Enter username"/>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" placeholder="Enter Email"/>
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" placeholder="*************"/>
            </div>
            <button className="signup_btn">Sign up</button>
        </form>
        <br></br>
        <p>Already have account.</p>
        <Link to="/login"><button>Login</button></Link>
      </div>
    </div>
  );
};

export default Register;
