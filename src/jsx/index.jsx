// Non React
var tabs = require('./ui/tabs.jsx');
// React lorem carousel
var React = require('react');

var Carousel = require('react-bootstrap/lib/Carousel');
var CarouselItem = require('react-bootstrap/lib/CarouselItem');


var carouselInstance = (
    <Carousel controls={false} >
      <CarouselItem>
        <div className="carousel-caption">
          <blockquote>
          	<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. </p>
          	<footer> Someone famous in Source Title </footer>
          </blockquote>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="carousel-caption">
          <blockquote>
          	<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. </p>
          	<footer> Someone famous in Source Title </footer>
          </blockquote>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="carousel-caption">
          <blockquote>
          	<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. </p>
          	<footer> Someone famous in Source Title </footer>
          </blockquote>
        </div>
      </CarouselItem>
    </Carousel>
  );

React.render(carouselInstance, document.querySelector('.lorem-carousel .container'));