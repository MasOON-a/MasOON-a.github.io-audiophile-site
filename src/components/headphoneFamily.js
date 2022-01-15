import React ,{ Component } from 'react';

import ProductElement from './MProductElement.js';

import xx59 from '../assets/assets/product-xx59-headphones/desktop/image-product.jpg';
import xx991 from '../assets/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';
import xx992 from '../assets/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';

export default class headphoneFamily extends Component {
    state = {
        info:[{
            new: true,
            name: 'XX99 Mark II Headphones',
            description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
            link: '/headphones/xx99mark2',
            src: { 0: xx992 },
            imgAlt: '',
            flip: '',
            tag: '1'
        },{
            new: false,
            name: ' XX99 Mark I Headphones',
            description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
            link: '/headphones/xx99mark1',
            src: { 0: xx991 },
            imgAlt: '',
            flip: 'flip',
            tag: '2'
        },{
            new: false,
            name: 'XX59 Headphones',
            description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
            link: '/headphones/xx59',
            src: { 0: xx59 },
            imgAlt: '',
            flip: '',
            tag: '3'
        }]
    }

    render () {
        return(
            <div>
                <ProductElement new={ this.state.info[0].new } name={ this.state.info[0].name } description={ this.state.info[0].description } link={ this.state.info[0].link }src={ this.state.info[0].src } imgalt={ this.state.info[0].imgAlt }flip={ this.state.info[0].flip }tag={ this.state.info[0].tag }/>
                <ProductElement new={ this.state.info[1].new } name={ this.state.info[1].name } description={ this.state.info[1].description } link={ this.state.info[1].link }src={ this.state.info[1].src } imgalt={ this.state.info[1].imgAlt }flip={ this.state.info[1].flip }tag={ this.state.info[1].tag }/>
                <ProductElement new={ this.state.info[2].new } name={ this.state.info[2].name } description={ this.state.info[2].description } link={ this.state.info[2].link }src={ this.state.info[2].src } imgalt={ this.state.info[2].imgAlt }flip={ this.state.info[2].flip }tag={ this.state.info[2].tag }/>
            </div>
        )
    }
}