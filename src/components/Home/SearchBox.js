import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component{

    state = {
        checkIn: "",
        checkOut: "",
        where: "",
        guests: 0
    };

    handleWhere = (e)=>{
        this.setState({where: e.target.value})
    }

    handleCheckIn = (e)=>{
        this.setState({checkIn: e.target.value})
    }

    handleCheckOut = (e)=>{
        this.setState({checkOut: e.target.value})
    }

    handleGuests = (e)=>{
        this.setState({guests: e.target.value})
    }

    render(){
        return(
            <div className="home-search-box col m4">
                <h1>Book unique places to stay and things to do.</h1>
                
                <div className="form">
                    <div className="col m12">
                        <div className="input-field" id="where">
                            <input onChange={this.handleWhere} placeholder="Anywhere" value={this.state.where} type="text" className="validate" />

                        </div>
                    </div>

                    <div className="col m6">
                        <div className="input-field" id="check-in">
                            <input onChange={this.handleCheckIn} placeholder="Check-In" value={this.state.checkIn} type="date" className="validate" />
                            <label htmlFor="check-in">Check-In</label>
                        </div>
                    </div>
                    <div className="col m6">
                        <div className="input-field" id="check-out">
                            <input onChange={this.handleCheckOut} placeholder="Check-Out" value={this.state.checkOut} type="date" className="validate" />
                            <label htmlFor="check-out">Check-Out</label>
                        </div>
                    </div>
                    <div className="col m12">
                        <div className="input-field" id="guests">
                            <input onChange={this.handleGuests} placeholder="Guests" value={this.state.guests} type="number" className="validate" />
                            <label htmlFor="guests">Guests</label>
                        </div>
                    </div>
                    <div className="col m12 submit-btn">
                        <div className="input-field" id="submit-btn">
                            <input className="btn-large waves-effect waves-light red accent-2" type="submit" />
                        </div>
                    </div>
                </div>


            </div>            
        )
    }
}

export default SearchBox;