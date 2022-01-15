import React, { Component } from 'react';
import Nav from '../components/nav.js';
import PageHead from '../components/pageHead.js';
import ProductIndepth from '../components/MProductIndepth.js';
import ProductImgGallery from '../components/MProductImgGallery.js';
import Suggestions from '../components/MSuggestions';
import CategoryHub from '../components/MCategoryHub.js';
import BringOutBest from '../components/MBringOutBest.js';
import Footer from '../components/footer.js';
// cart img
import Czx9 from '../assets/assets/cart/image-zx9-speaker.jpg';
// ProductIndepth imgs
import zx9 from '../assets/assets/product-zx9-speaker/desktop/image-product.jpg';
import Tzx9 from '../assets/assets/product-zx9-speaker/tablet/image-product.jpg';
// ImgGallery img
import imgGallery1 from '../assets/assets/product-zx9-speaker/desktop/image-gallery-1.jpg';
import imgGallery2 from '../assets/assets/product-zx9-speaker/desktop/image-gallery-2.jpg';
import imgGallery3 from '../assets/assets/product-zx9-speaker/desktop/image-gallery-3.jpg';

export default class SpeakersZX9 extends Component {
    state ={
        cart: JSON.parse(window.localStorage.getItem("cart")),

        src: { 0: zx9 },
        tabletsrc: { 0: Tzx9 },
        cartsrc: { 0: Czx9 },
        alt: 'a black speaker with a large outcroping white driver on the front face',
        newBool: true,
        namee: 'ZX9 Speaker',
        desc: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
        price: '4500',
        feats: 'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
        included: ['2x Speaker unit', '2x Speaker cloth panel', '1x User manual', '1x 3.5mm 10m audio cable', '1x 10m optical cable'],
        itemkey: 5,
        to:"/speakers/zx9"
    }

    handleStorageChange = () => {
        this.setState({ cart: JSON.parse(window.localStorage.getItem("cart")) });
    }

    render () {
        let { src, tabletsrc, cartsrc, alt, newBool, namee, desc, price, feats, included, itemkey, to } = this.state;

        return (
            <div>
                <Nav />
                <PageHead />
                <ProductIndepth src={ src } tabletsrc={ tabletsrc }cartsrc={ cartsrc } alt={ alt } new={ newBool } namee={ namee } desc={ desc } price={ price } feats={ feats } included={ included } itemkey={ itemkey }to={ to }refreshState={this.handleStorageChange}/>
                <ProductImgGallery srcs={ {imgGallery1, imgGallery2, imgGallery3} }/>  
                <Suggestions />
                <CategoryHub />
                <BringOutBest />
                <Footer />
            </div>
        )
    }
}