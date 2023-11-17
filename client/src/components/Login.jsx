import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const Login = () => {
  return (
    <div className="signup_container">
      <div className="signup_form">
        <h2>Login</h2>
        <form action="">
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" placeholder="Enter Email"/>
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" placeholder="*************"/>
            </div>
            <button className="signup_btn">Login</button>
        </form>
        <br></br>
        <p>Not registered?</p>
        <Link to="/register"><button>Signup</button></Link>
      </div>
    </div>
  )
}

export default Login