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
            <img className="d-block w-100" src="data:image/jpeg;base64,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" alt="Third slide"/>
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

