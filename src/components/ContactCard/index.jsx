import React, { Component } from 'react';
import './ContactCard.css';

class ContactCard extends Component {
  render() {
    return (
        <div id="contactCard" className="contact-card col-md-12">                
            <h2>Let's Get In Touch!</h2>     
            <hr className="primary" />     
            <p>send us an email and we will get back to you as soon as possible!</p>
        </div>
    )
  }
}

  export default ContactCard;