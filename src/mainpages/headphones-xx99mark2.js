import React, { Component }from 'react';
import Nav from '../components/nav.js';
import PageHead from '../components/pageHead.js';
import ProductIndepth from '../components/MProductIndepth.js';
import ProductImgGallery from '../components/MProductImgGallery.js';
import Suggestions from '../components/MSuggestions';
import CategoryHub from '../components/MCategoryHub.js';
import BringOutBest from '../components/MBringOutBest.js';
import Footer from '../components/footer.js';

import xx992 from '../assets/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import Txx992 from '../assets/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg';
import Cxx992 from '../assets/assets/cart/image-xx99-mark-two-headphones.jpg';

import imgGallery1 from '../assets/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import imgGallery2 from '../assets/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
import imgGallery3 from '../assets/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';

export default class HeadphonesXX99mk2 extends Component {
    state ={
        cart: JSON.parse(window.localStorage.getItem("cart")),

        src: { 0: xx992 },
        tabletsrc: { 0: Txx992 },
        cartsrc: { 0: Cxx992 },
        alt: 'a white pair of headphones',
        newBool: true,
        namee: 'XX99 Mark II Headphones',
        desc: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        price: '2999',
        feats: 'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
        included: ['1x Headphone unit', '2x Replacement earcups', '1x User manual', '1x 3.5mm 5m audio cable', '1x Travel bag'],
        itemkey: 3,
        to:"/headphones/xx99mark2"
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