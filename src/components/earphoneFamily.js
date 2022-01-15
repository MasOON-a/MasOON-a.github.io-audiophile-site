import React ,{ Component } from 'react';

import ProductElement from './MProductElement.js';

import yx1 from '../assets/assets/product-yx1-earphones/desktop/image-product.jpg';
export default class earphoneFamily extends Component {
    state = {
        info:[{
            new: true,
            name: 'YX1 wireless earphones',
            description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
            link: '/earphones/yx1wireless',
            src: { 0: yx1 },
            imgAlt: '',
            flip: '',
            tag: '1'
        }]
    }

    render () {
        return(
            <div>
                <ProductElement new={ this.state.info[0].new } name={ this.state.info[0].name } description={ this.state.info[0].description } link={ this.state.info[0].link } src={ this.state.info[0].src } imgalt={ this.state.info[0].imgAlt } flip={ this.state.info[0].flip } tag={ this.state.info[0].tag }/>
            </div>
        )
    }
}