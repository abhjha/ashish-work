import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="page-header w-100 row mt-2 ">       
            <a className="col-md-4 navigation-item" href="#home-slider">
                <img src="" width="30" height="30" alt="" />
                company logo
            </a>                           
            <div className="col-md-8 navigation-link">
                <ul className="row justify-content-end ">
                    <li className="col-md-2">
                        <a className="navigation-item" href="#aboutCard">ABOUT</a>
                    </li>
                    <li className="col-md-2 ">
                        <a className="navigation-item" href="#servicesCard">SERVICES</a>
                    </li>                        
                    <li className="col-md-2 dropdown">
                        <a className="navigation-item" href="#productCard">PRODUCTS</a>                            
                    </li> 
                    <li className="col-md-2">
                        <a className="navigation-item" href="#contactCard">CONTACT US</a>
                    </li>                      
                </ul>                    
            </div>
      </div>
    );
  }
}

export default Header;
