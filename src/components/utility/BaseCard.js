import React, { Component } from 'react';
import './BaseCard.css'

class BaseCard extends Component {
    render() {
        const {image,cityName,price} = this.props.city
        const imagePath = `${window.apiHost}${image}`;
        return (
            <div className="base-card col s12">
                <div className="image">
                    <img src={imagePath} />
                </div>
                <div className="city-name">{cityName}</div>
                <div className="price">${price}/night average</div>
            </div>
        )
    }
}
export default BaseCard;