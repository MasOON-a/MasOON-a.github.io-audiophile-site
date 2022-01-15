import React, { Component } from 'react';
import Nav from '../components/nav.js';
import PageHead from '../components/pageHead.js';
import ProductIndepth from '../components/MProductIndepth.js';
import ProductImgGallery from '../components/MProductImgGallery.js';
import Suggestions from '../components/MSuggestions';
import CategoryHub from '../components/MCategoryHub.js';
import BringOutBest from '../components/MBringOutBest.js';
import Footer from '../components/footer.js';

import xx59 from '../assets/assets/product-xx59-headphones/desktop/image-product.jpg';
import Txx59 from '../assets/assets/product-xx59-headphones/tablet/image-product.jpg';
import Cxx59 from '../assets/assets/cart/image-xx59-headphones.jpg';

import imgGallery1 from '../assets/assets/product-xx59-headphones/desktop/image-gallery-1.jpg';
import imgGallery2 from '../assets/assets/product-xx59-headphones/desktop/image-gallery-2.jpg';
import imgGallery3 from '../assets/assets/product-xx59-headphones/desktop/image-gallery-3.jpg';

export default class HeadphonesXX59 extends Component{
    state ={
        cart: JSON.parse(window.localStorage.getItem("cart")),

        src: { 0: xx59 },
        tabletsrc: { 0: Txx59 },
        cartsrc: { 0: Cxx59 },
        alt: 'a white pair of headphones',
        newBool: false,
        namee: 'XX59 Headphones',
        desc: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
        price: '899',
        feats: 'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
        included: ['1x Headphone unit', '2x Replacement earcups', '1x User manual', '1x 3.5mm 5m audio cable'],
        itemkey: 1,
        to:"/headphones/xx59"
    }

    handleStorageChange = () => {
        this.setState({ cart: JSON.parse(window.localStorage.getItem("cart")) });
    }

    render () {
        let { src, tabletsrc, cartsrc, alt, newBool, namee, desc, price, feats, included, itemkey, to } = this.state;

        return(
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

