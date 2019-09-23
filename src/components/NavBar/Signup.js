import React from 'react';
import { Link } from 'react-router-dom';

function SignUp(props){
    return(
        <div className="register-form">
            <input className="email-signup" placeholder="Email address" />
            <input className="first-signup" placeholder="First name" />
            <input className="last-signup" placeholder="Last name" />
            <input className="password-signup" placeholder="Password" />
            <button className="sign-up-button">Sign up</button>
            <div className="border-rule"></div>
            <div className="login-text align-left">Already have an Airbnb account? <Link to="">Log in</Link></div>
        </div> 
    )
}

export default SignUp;