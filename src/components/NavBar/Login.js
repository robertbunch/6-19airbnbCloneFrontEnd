
import React from 'react';
import { Link } from 'react-router-dom';

function Login(props){
    return(
        <div className="login-form">
            <button className="facebook-login">Connect With Facebook</button>
            <button className="google-login">Connect with Google</button>
            <span>or</span>
            <input className="email-signup" placeholder="Email address" />
            <input className="password-signup" placeholder="Password" />
            <button className="sign-up-button">Log In</button>
            <div className="border-rule"></div>
            <div className="login-text align-left">Don't have an account? <Link to="">Sign Up</Link></div>
        </div>
    )
}

export default Login;