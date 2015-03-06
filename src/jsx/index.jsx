// Non React
var tabs = require('./ui/tabs.jsx');

// React lorem carousel
var React = require('react');

var Carousel = require('react-bootstrap/lib/Carousel');
var CarouselItem = require('react-bootstrap/lib/CarouselItem');


var CarouselInstance = React.createClass({
	render: function(){
		return (
			<Carousel>
				<CarouselItem>
					<div className='carousel-caption'>
						<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</h3>
						<p>Someone famous in Source Title</p>
					</div>
					<div className='carousel-caption'>
						<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</h3>
						<p>Someone famous in Source Title</p>
					</div>
					<div className='carousel-caption'>
						<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</h3>
						<p>Someone famous in Source Title</p>
					</div>
				</CarouselItem>
			</Carousel>
			);
	}
});

React.render(<CarouselInstance />, document.querySelector('.lorem-carousel .container'));