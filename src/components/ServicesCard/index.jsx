import React, { Component } from 'react';
import './ServicesCard.css';

class ServicesCard extends Component {
  render() {
    return (
      <div id="servicesCard" className="col-lg-8">                
          <h2 className="section-heading">At your service</h2>   
          <hr className="primary" /> 
          <div className="container">
            <div className="row">            
              <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box">
                      <i className="fa fa-4x fa-diamond wow bounceIn text-primary"></i>
                      <h3>Sturdy Templates</h3>                        
                        <p className="text-muted">Our templates are updated regularly so they don't break.</p>
                  </div>
              </div>         
              <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box">
                      <i className="fa fa-4x fa-heart wow bounceIn text-primary"></i>
                      <h3>Made with Love</h3>
                        <p className="text-muted">You have to make your websites with love these days!</p>
                  </div>
              </div>
            </div>
        </div>    
      </div>
    )
  }
}

  export default ServicesCard;