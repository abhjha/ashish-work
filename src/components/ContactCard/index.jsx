import React, { Component } from 'react';
import './ContactCard.css';

class ContactCard extends Component {
  render() {
    return (
        <div id="contactCard" className="col-lg-8">                
            <h2 className="section-heading">Let's Get In Touch!</h2>     
            <hr className="primary" />     
            <p>Ready to start your next project with us? That’s great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
        </div>
    )
  }
}

  export default ContactCard;