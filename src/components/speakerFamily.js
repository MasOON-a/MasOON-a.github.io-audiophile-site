import React ,{ Component } from 'react';

import ProductElement from './MProductElement.js';
import zx9 from '../assets/assets/product-zx9-speaker/desktop/image-product.jpg';
import zx7 from '../assets/assets/product-zx7-speaker/desktop/image-product.jpg';

export default class speakerFamily extends Component {
    state = {
        info:[{
            new: true,
            name: 'ZX9 speaker',
            description: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
            link: '/speakers/zx9',
            src: { 0: zx9 },
            imgAlt: '',
            flip: '',
            tag: '1'
        },{
            new: false,
            name: 'ZX7 speaker',
            description: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
            link: '/speakers/zx7',
            src: { 0: zx7 },
            imgAlt: '',
            flip: 'flip',
            tag: '2'
        }]
    }

    render () {
        return(
            <div>
                <ProductElement new={ this.state.info[0].new } name={ this.state.info[0].name } description={ this.state.info[0].description } link={ this.state.info[0].link }src={ this.state.info[0].src } imgalt={ this.state.info[0].imgAlt }flip={ this.state.info[0].flip }tag={ this.state.info[0].tag }/>
                <ProductElement new={ this.state.info[1].new } name={ this.state.info[1].name } description={ this.state.info[1].description } link={ this.state.info[1].link }src={ this.state.info[1].src } imgalt={ this.state.info[1].imgAlt }flip={ this.state.info[1].flip }tag={ this.state.info[1].tag }/>
            </div>
        )
    }
}