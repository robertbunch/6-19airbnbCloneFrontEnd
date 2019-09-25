import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './HostHome.css';
import axios from 'axios';
// import hostHomeAction from '../../actions/hostHomeAction';

class HostHome extends Component{
    state = {
        title: '',
        location: '',
        guests: '',
        pricePerNight: 0,
        details: '',
        image: '',
        amenities: ''
    }
    changeTitle = (e) => {
        this.setState( {
            title: e.target.value
        })
    }
    changeLocation = (e) => {
        this.setState( {
            location: e.target.value
        })
    }
    changeGuests = (e) => {
        this.setState( {
            guests: e.target.value
        })
    }
    changePricePerNight = (e) => {
        this.setState( {
            pricePerNight: e.target.value
        })
    }
    changeDetails = (e) => {
        this.setState( {
            details: e.target.value
        })
    }
    changeImage = (e) => {
        this.setState( {
            image: e.target.value
        })
    }
    changeAmenities = (e) => {
        this.setState( {
            amenities: e.target.value
        })
    }
    onSubmit = async (e) => {
        e.preventDefault();
        console.log(this.props.auth)
        // this.props.hostHomeAction(this.state)
        const submitHostUrl = `${window.apiHost}/host/homes`
        let dataToSend = {...this.state}
        dataToSend.token = this.props.auth.token;
        const axiosResposne = await axios.post(submitHostUrl,dataToSend);
        console.log(axiosResposne.data)
    }
    componentDidMount(){
        if (!this.props.auth.token) {
            localStorage.setItem('preLoginPage', '/host/homes')
            this.props.history.push('/login')
        }
        var elems = document.querySelectorAll('select');
        // eslint-disable-next-line no-unused-vars
        var instances = window.M.FormSelect.init(elems);
    }
    render(){
        console.log(this.props)
        return(
            <div className="row host-home">
                <form onSubmit={this.onSubmit} className="col s8 offset-s2">
                    <div className="row">
                        <div className="input-field col s6">
                            <input value={this.state.title} onChange={this.changeTitle} id="title" type="text" className="validate" />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s6">
                            <input value={this.state.location} onChange={this.changeLocation} id="location" type="text" className="validate" />
                            <label htmlFor="location">Location</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <select value={this.state.guests} onChange={this.changeGuests} >
                                <option value="" disabled>Choose your option</option>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
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
                            <label htmlFor="price">Price/night</label>
                            <input value={this.state.price} onChange={this.changePricePerNight} type='number' id="price" className="validate" />
                        </div>
                    </div>
                <div className="row">
                    <div className="col s12">
                        <textarea value={this.state.details} onChange={this.changeDetails} id="details" className="materialize-textarea"></textarea>
                        <label htmlFor="details">Details (be descriptive!)</label>
                    </div>
              </div>
              <div className="row">
                    <div className="input-field col s6">                            
                        <input onChange={this.changeImage} type="file" />Upload image
                    </div>
                    <div className="input-field col s6">
                        <input value={this.state.amenities} onChange={this.changeAmenities} id="amenities" type="text" className="validate" />
                        <label htmlFor="amenities">Amenities</label>
                    </div>
                </div>
                <button className='submit-button' >Submit</button>
            </form>
          </div>
                                        
        )
    }
}
function mapStateToProps(state) {
    return( {
        auth: state.auth,
    })
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators( {
        // hostHomeAction: hostHomeAction
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HostHome);
