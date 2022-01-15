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
import Czx7 from '../assets/assets/cart/image-zx7-speaker.jpg';
// productIndepth imgs
import zx7 from '../assets/assets/product-zx7-speaker/desktop/image-product.jpg';
import Tzx7 from '../assets/assets/product-zx7-speaker/tablet/image-product.jpg';
// img gallery
import imgGallery1 from '../assets/assets/product-zx7-speaker/desktop/image-gallery-1.jpg';
import imgGallery2 from '../assets/assets/product-zx7-speaker/desktop/image-gallery-2.jpg';
import imgGallery3 from '../assets/assets/product-zx7-speaker/desktop/image-gallery-3.jpg';

export default class SpeakersZX7 extends Component {
    state ={
        cart: JSON.parse(window.localStorage.getItem("cart")),

        src: { 0: zx7},
        tabletsrc: { 0: Tzx7 },
        cartsrc: { 0: Czx7 },
        alt: 'a large all black speaker with',
        newBool: false,
        namee: 'ZX7 Speaker',
        desc: 'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
        price: '3500',
        feats: 'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
        included: ['2x Speaker unit', '2x Speaker cloth panel', '1x User manual', '1x 3.5mm 7.5m audio cable', '1x 7.5m optical cable'],
        itemkey: 4,
        to:"/speakers/zx7"
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