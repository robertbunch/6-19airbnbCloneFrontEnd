
import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component{

    state = {email: "", password: ""}

    changeEmail = (e)=>{this.setState({email: e.target.value})}
    changePass = (e)=>{this.setState({password: e.target.value})}
    render(){
        return(
            <div className="login-form">
                <button className="facebook-login">Connect With Facebook</button>
                <button className="google-login">Connect with Google</button>
                <span>or</span>
                <input onChange={this.changeEmail} value={this.state.email} className="email-signup" placeholder="Email address" />
                <input type="password" onChange={this.changePass} value={this.state.password}  className="password-signup" placeholder="Password" />
                <button className="sign-up-button">Log In</button>
                <div className="border-rule"></div>
                <div className="login-text align-left">Don't have an account? <span onClick={()=>{this.props.changeModalContent('signup')}} >Sign Up</span></div>
            </div>
        )
    }
}

export default Login;