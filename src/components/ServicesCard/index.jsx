import React, { Component } from 'react';
import './ServicesCard.css';

class ServicesCard extends Component {
  render() {
    return (
      <div id="servicesCard" className="services-card col-lg-12">                
          <h2>At your service</h2>   
          <hr className="primary" /> 
          <div className="container">
            <div className="row">            
              <div className="col-md-6">
                  <div className="service-box">
                      <i className="fa fa-4x fa-diamond wow bounceIn text-primary"></i>
                      <h3>Lorem ipsum</h3>                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                  </div>
              </div>         
              <div className="col-md-6">
                  <div className="service-box">
                      <i className="fa fa-4x fa-heart wow bounceIn text-primary"></i>
                      <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                  </div>
              </div>
            </div>
        </div>    
      </div>
    )
  }
}

  export default ServicesCard;