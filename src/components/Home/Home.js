import React, { Component } from 'react';
import './Home.css';
import SearchBox from './SearchBox';
import Venue from '../utility/Venue';
import Abode from '../utility/Abode';
import axios from 'axios';

class Home extends Component{

    state = {cities: [], abodes: []}

    async componentDidMount(){
        const recommendedCities = axios.get(`${window.apiHost}/cities`);
        recommendedCities.then((resp)=>{
            const cities = resp.data;
            // console.log(cities)
            this.setState({
                cities
            })
        })

        const axiosResponse = await axios.get(`${window.apiHost}/abodes`);        
        const suggestedAbodes = axiosResponse.data.map((abode,i)=>{
            return(
                <div key={i} className="col s3">
                    <Abode abode={abode}/>
                </div>
            )
        })
        this.setState({
            abodes: suggestedAbodes
        })
    }

    render(){
        return(<>
            <div className="container-fluid">
                <div className="row">
                    <div className="home col s12">
                        <div className="upper-fold">
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="venue col s12">
                        <h3>Recommended for you</h3>
                        <Venue cities={this.state.cities}/>
                    </div>
                </div>

                <div className="row">
                    <h3>Places to stay around the world</h3>
                    {this.state.abodes}
                </div>
            </div>
            </>
        )
    }
}

export default Home;