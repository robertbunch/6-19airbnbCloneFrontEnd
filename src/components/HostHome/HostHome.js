import React, { Component } from 'react';
import { connect } from 'react-redux';

import './HostHome.css';

class HostHome extends Component{

    componentDidMount(){
        if(!this.props.auth.token){
            // if there is no token
            localStorage.setItem('preLoginPage', '/host/homes')
            this.props.history.push('/login');
        }

        var elems = document.querySelectorAll('select');
        var instances = window.M.FormSelect.init(elems);
    }

    render(){
        return(
            <div className="row host-home">
                <form className="col s8 offset-s2">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="title" type="text" className="validate" />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="location" type="text" className="validate" />
                            <label htmlFor="location">Location</label>
                        </div>
                    </div>
                    <div className="row">
                        <div class="input-field col s6">
                            <select>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guest</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6 Guests</option>
                            <option value="7">7 Guests</option>
                            <option value="8">8 Guests</option>
                            <option value="9">9 Guests</option>
                            </select>
                            <label># of guests</label>
                        </div>                    
                        <div className="input-field col s6">
                        <input id="price" type="email" className="validate" />
                        <label htmlFor="price">Price/night</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <textarea id="details" class="materialize-textarea"></textarea>
                        <label for="details">Details (be descriptive!)</label>
                    </div>
              </div>
              <div className="row">
                    <div className="col s6"> 
                        <input type="file" />Upload image
                    </div>
                    <div className="input-field col s6">
                        <input id="amenities" type="text" className="validate" />
                        <label htmlFor="amenities">Amenities</label>
                    </div>
                </div>

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

export default connect(mapStateToProps)(HostHome);