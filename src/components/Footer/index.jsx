import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      
      <div className="footer-container col-md-12"> 
        <div className="row">         
          <div className="container col-md-4">        
            <ul>
              <li><strong>Title/header</strong></li>
              <li>Adress, street</li>
              <li>Phone</li>              
              <li>Zipcode/City</li>
              <li>Email</li>
            </ul>
          </div>
          <div className="container col-md-4">    
            <ul>
                <li><strong>Links</strong></li>
                <li>mkc1</li>
                <li>mkc2</li>              
                <li>mkc3</li>
                <li>mkc4</li>
            </ul>
          </div>
          <div className="container col-md-4">    
            <ul className="right">
                <li>ashish</li>
                <li>sirji</li>
            </ul>  
          </div>
        </div>
      </div>
    )
  }
}

export default Footer