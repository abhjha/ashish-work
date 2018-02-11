import React, { Component } from 'react';
import './ProductCard.css';

class ProductCard extends Component {
  render() {
    return (
      <div id="productCard" className="container-fluid">
        <div className="row no-gutter">
          <div className="col-lg-4">
            <img src="img/portfolio/1.jpg" className="img-responsive" alt="" />
            <div className="portfolio-box-caption">
              <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
                    Web Development
                </div>
                <div className="project-name">
                    Project 1
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <img src="img/portfolio/1.jpg" className="img-responsive" alt="" />
            <div className="portfolio-box-caption">
              <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
                    Web Development
                </div>
                <div className="project-name">
                    Project 1
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <img src="img/portfolio/1.jpg" className="img-responsive" alt="" />
            <div className="portfolio-box-caption">
              <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
                    Web Development
                </div>
                <div className="project-name">
                    Project 1
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <img src="img/portfolio/1.jpg" className="img-responsive" alt="" />
            <div className="portfolio-box-caption">
              <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
                    Web Development
                </div>
                <div className="project-name">
                    Project 1
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <img src="img/portfolio/1.jpg" className="img-responsive" alt="" />
            <div className="portfolio-box-caption">
              <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
                    Web Development
                </div>
                <div className="project-name">
                    Project 1
                </div>
              </div>
            </div>
          </div>      
        </div>
      </div>
    )
  }
}

  export default ProductCard;