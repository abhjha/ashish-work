import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="page-header">       
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="" width="30" height="30" alt="" />
                    company logo
                </a>
                <a className="navbar-brand" href="#">Ashish ji ki chai</a>                
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Company</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                            Products
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Chai</a>
                                <a className="dropdown-item" href="#">More chai</a>
                                <a className="dropdown-item" href="#">Aur chai</a>
                            </div>
                        </li>                       
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>       
      </div>
    );
  }
}

export default Header;
