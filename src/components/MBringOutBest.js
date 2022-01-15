import React, { Component } from 'react';


import desktopHero from '../assets/assets/shared/desktop/image-best-gear.jpg';
import tabletHero from '../assets/assets/shared/tablet/image-best-gear.jpg';
import mobileHero from '../assets/assets/shared/mobile/image-best-gear.jpg';

class bringOutBest extends Component {

    state = {
    }

    render () {
        return(
            <div className='container'>
                <div className="text-cont">
                    <h1>Bringing you the <strong>best</strong> audio gear</h1>
                    <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                        rooms available for you to browse and experience a wide range of our products. Stop by our store
                        to meet some of the fantastic people who make Audiophile the best place to buy your portable
                        audio equipment.</p>
                </div>
                <picture>
                    <source media="(min-width: 1100px)" srcSet={ desktopHero } alt="man wearing headphones"></source>
                    <source media="(min-width: 800px)" srcSet={ tabletHero } alt="man wearing headphones"></source>
                    <img src={ mobileHero } alt="man wearing headphones" />
                </picture>
            </div>
        )
    }
}

export default bringOutBest;