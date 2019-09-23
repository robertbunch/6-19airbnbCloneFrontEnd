import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import ModalSplash from './ModalSplash';
import Login from './Login';
import Signup from './Signup';

class NavBar extends Component{

    state = {
        showModal: false,
        modalContent: <ModalSplash />
    }

    componentDidMount(){
        this.setState({
            modalContent: <ModalSplash changeModalContent={this.changeModalContent}/>            
        })
    }

    changeModalContent = (newContent)=>{
        let modalContent = <ModalSplash changeModalContent={this.changeModalContent}/>
        if(newContent === 'login'){
            modalContent = <Login  changeModalContent={this.changeModalContent}/>
        }else if(newContent === 'signup'){
            modalContent = <Signup  changeModalContent={this.changeModalContent}/>
        }
        this.setState({
            modalContent
        })
    }

    signup = (e)=>{
        document.querySelector('body').className = 'body-modal-show';
        this.setState({
            showModal: true
        })
    }
    closeModal = (e)=>{
        document.querySelector('body').className = '';
        this.setState({
            showModal: false
        })
    }

    render(){
        return(
            <div className="container-fluid nav">
                <div className="row">
                    <nav className="transparent">
                        <div className="nav-wrapper">
                            <Link to="/" className="left">airbnb</Link>
                            <ul id="nav-mobile" className="right">
                                <li><Link to="/host/homes">Host a Home</Link></li>
                                <li><Link to="/host/experience">Host an experience</Link></li>
                                <li><Link to="/help">Help</Link></li>
                                <li className="nav-non-link" onClick={this.signup}>
                                    Sign up
                                </li>
                                <li className="nav-non-link" onClick={this.signup}>
                                    Log in
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="login-modal" style={this.state.showModal ? {"display": "block"} : {}} >
                    <button id="close-modal" onClick={this.closeModal}>&Chi;</button>
                    <div className="modal-content">
                        {this.state.modalContent}
                    </div>
                </div>
            </div>

        )
    }
}

export default NavBar;
