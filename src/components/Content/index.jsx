import React, { Component } from 'react';
import Slider from '../Carousel';
import AboutCard from '../AboutCard';
import ServicesCard from '../ServicesCard';
import ProductCard from '../ProductCard';
import ContactCard from '../ContactCard';
import './Content.css';

class Content extends Component {
  render() {
    return (
        <div>
            <Slider />
            <AboutCard />
            <ServicesCard />
            <ProductCard />
            <ContactCard />
        </div>
    )
  }
}

  export default Content;