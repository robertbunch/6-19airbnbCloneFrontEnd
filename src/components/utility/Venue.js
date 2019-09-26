import React from 'react';
import BaseCard from './BaseCard';
import { Link } from 'react-router-dom';
import Slick from './Slick';

function Venue(props){
    //someone, is sending me an array called cities.
    // Map through it, make a BaseCard for each one
    const baseCards = props.cities.map((city,i)=>{
        return (
            <div className="col s3" key={i}>
                <Link to={`/city/${city.cityName}`}>
                    <BaseCard city={city} />
                </Link>
            </div>
        )
    })
    const city = {image:"", cityName:"London", price:"99$/mo"}
    return(
        <div>
            <Slick elements={baseCards} />
        </div>
    )
    
}

export default Venue;
