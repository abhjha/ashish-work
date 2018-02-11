import React, { Component } from 'react';
import './AboutCard.css';

class AboutCard extends Component {
  render() {
    return (
        <div id="aboutCard" className="col-lg-8">                
            <h2 className="section-heading">We've got what you need!</h2>  
            <hr className="primary" />     
            <p className="text-faded">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium similique eos eligendi error veritatis harum, sed aliquid totam, quam minus neque enim est architecto, ad. Maiores, aliquid, vitae!
            </p>
        </div>
    )
  }
}

  export default AboutCard;