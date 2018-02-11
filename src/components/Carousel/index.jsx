import React, { Component } from 'react';
import './Carousel.css';

class Slider extends Component {
  render() {
    return (
      <div id="home-slider" className="home-slider carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#home-slider" data-slide-to="0" className="active"></li>
          <li data-target="#home-slider" data-slide-to="1"></li>        
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://www.fashionlady.in/wp-content/uploads/2017/06/disha-patani-height.jpg" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="http://images.indianexpress.com/2017/09/disha-759.jpg" alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#home-slider" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#home-slider" data-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

export default Slider;

