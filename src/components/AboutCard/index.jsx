import React, { Component } from 'react';
import './AboutCard.css';

class AboutCard extends Component {
  render() {
    return (
        <div id="aboutCard" className="about-card bground-primary col-lg-12">                
            <h2 className="col col-md-18 text-white">We've got what you need!</h2>  
            <hr className="col col-md-8 text-white" />     
            <p className="col col-md-8 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium similique eos eligendi error veritatis harum, sed aliquid totam, quam minus neque enim est architecto, ad. Maiores, aliquid, vitae!
            </p>
        </div>
    )
  }
}

  export default AboutCard;