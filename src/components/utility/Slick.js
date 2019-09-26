import React, { Component } from 'react';
import Slider from "react-slick";
import './Slick.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './slick.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
library.add(faCaretLeft)
library.add(faCaretRight)

class Slick extends Component {

	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			arrows: true,
			slidesToShow: 4,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,

			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},

				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
			],
		};

		return (
			<div className="slick">
				<Slider {...settings}>
					{this.props.elements}
				</Slider>
			</div>
		);
	}
}

function SampleNextArrow(props) {
	const { className, onClick } = props;
	return (
		<div
			className={className}
			onClick={onClick}
		>
			<FontAwesomeIcon icon='caret-right' color="#000" size="2x" />
		</div>

	);
}

function SamplePrevArrow(props) {
	const { className, onClick } = props;
	return (
		<div
			className={className}
			onClick={onClick}
		>
			<FontAwesomeIcon icon='caret-left' color="#000" size="2x" />
		</div>
	);
}



export default Slick
