import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import signUpAction from '../../actions/signUpAction';

class SignUp extends React.Component{

    state = {
        email: "", first: "", last: "", password: "", msg: ""
    }

    changeEmail = (e)=>{this.setState({email: e.target.value})}
    changeFirst = (e)=>{this.setState({first: e.target.value})}
    changeLast = (e)=>{this.setState({last: e.target.value})}
    changePass = (e)=>{this.setState({password: e.target.value})}

    submitSignUp = (e)=>{
        e.preventDefault();
        // assume the data is valid. 
        // if we run into invalid data, switch to false
        let formValid = true; 
        let msg = "";
        for(let key in this.state){
            if((this.state[key].length < 1) && (key !== 'msg')){
                formValid = false;
                msg = `${key} field is required`
                break;
            }
        }
        if(this.state.password.toLowerCase() === this.state.password){
            // user doesnt have any uppercase characters
            formValid = false;
            msg = "Your password must contain at least 1 uppercase letter";
        // check to see if there is a number in the password
        }else if(!(/\d/.test(this.state.password))){
            formValid = false;
            msg = "Your password must contain at least 1 number."
        }

        if(formValid){
            const userData = {...this.state}
            // const userData = Object.assign({},this.state)
            this.props.signUpAction(userData);    
        }else{
            this.setState({
                msg
            })
        }
    }

    render(){
        console.log(this.props.auth);
        return(
            <div className="register-form">
                <p className="form-msg">{this.state.msg}</p>
                <form onSubmit={this.submitSignUp}>
                    <input required onChange={this.changeEmail} value={this.state.email} className="email-signup" placeholder="Email address" />
                    <input required onChange={this.changeFirst} value={this.state.first}  className="first-signup" placeholder="First name" />
                    <input required onChange={this.changeLast} value={this.state.last}  className="last-signup" placeholder="Last name" />
                    <input required type="password" onChange={this.changePass} value={this.state.password} className="password-signup" placeholder="Password" />
                    <button className="sign-up-button">Sign up</button>
                    <div className="border-rule"></div>
                    <div className="login-text align-left">Already have an Airbnb account? <span onClick={()=>{this.props.changeModalContent('login')}}>Log in</span></div>
                </form>
            </div> 
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        signUpAction
    },dispatch)
}

// export default SignUp;
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);