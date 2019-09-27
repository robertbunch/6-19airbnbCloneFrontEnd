import React, { Component } from 'react';
import './FullAbode.css';
import axios from 'axios';

class FullAbode extends Component{

    state = {
        abode: {},
        date1: "",
        date2: ""
    }

    async componentDidMount(){
        const abodeId = this.props.match.params.abodeId;
        // console.log(abodeId);
        const url = `${window.apiHost}/abode/${abodeId}`
        const axiosResponse = await axios.get(url)
        // console.log(axiosResponse.data);
        this.setState({
            abode: axiosResponse.data
        })
    }

    changeDate1 = (e)=>{this.setState({date1:e.target.value})}
    changeDate2 = (e)=>{this.setState({date2:e.target.value})}

    render(){
        const abode = this.state.abode;
        console.log(abode);
        return(
            <div className="row fullAbode">
                <div className="col s12">
                    <img src={`${window.apiHost}${abode.imageUrl}`} />
                </div>
                <div className="col s6 offset-s2">
                    <div className="col s8">
                        <div className="location">{abode.location}</div>
                        <div className="title">{abode.title}</div>
                        <div className="price-per-day">${abode.pricePerNight} per day</div>
                        <div className="guests">{abode.guests}</div>
                        <div className="details">{abode.details}</div>
                        <div className="amenties">{abode.amenities}</div>
                    </div>
                    <div className="col s4">
                        <input onChange={this.changeDate1} value={this.state.date1} type="date" />
                        <input onChange={this.changeDate2} value={this.state.date2} type="date" />
                    </div>
                </div>
            </div>
        )
    }
}

export default FullAbode