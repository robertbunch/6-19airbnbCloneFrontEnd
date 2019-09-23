import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import signUpAction from '../../actions/signUpAction';

class SignUp extends React.Component{

    state = {
        email: "", first: "", last: "", password: ""
    }

    changeEmail = (e)=>{this.setState({email: e.target.value})}
    changeFirst = (e)=>{this.setState({first: e.target.value})}
    changeLast = (e)=>{this.setState({last: e.target.value})}
    changePass = (e)=>{this.setState({password: e.target.value})}

    submitSignUp = (e)=>{
        e.preventDefault();
        const userData = {...this.state}
        // const userData = Object.assign({},this.state)
        this.props.signUpAction(userData);
    }

    render(){
        return(
            <div className="register-form">
                <form onSubmit={this.submitSignUp}>
                    <input onChange={this.changeEmail} value={this.state.email} className="email-signup" placeholder="Email address" />
                    <input onChange={this.changeFirst} value={this.state.first}  className="first-signup" placeholder="First name" />
                    <input onChange={this.changeLast} value={this.state.last}  className="last-signup" placeholder="Last name" />
                    <input type="password" onChange={this.changePass} value={this.state.password} className="password-signup" placeholder="Password" />
                    <button className="sign-up-button">Sign up</button>
                    <div className="border-rule"></div>
                    <div className="login-text align-left">Already have an Airbnb account? <span onClick={()=>{this.props.changeModalContent('login')}}>Log in</span></div>
                </form>
            </div> 
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        signUpAction
    },dispatch)
}

// export default SignUp;
export default connect(null,mapDispatchToProps)(SignUp);