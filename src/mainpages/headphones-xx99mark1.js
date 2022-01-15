import React, { Component }from 'react';
import Nav from '../components/nav.js';
import PageHead from '../components/pageHead.js';
import ProductIndepth from '../components/MProductIndepth.js';
import ProductImgGallery from '../components/MProductImgGallery.js';
import Suggestions from '../components/MSuggestions';
import CategoryHub from '../components/MCategoryHub.js';
import BringOutBest from '../components/MBringOutBest.js';
import Footer from '../components/footer.js';

// cart img
import Cxx991 from '../assets/assets/cart/image-xx99-mark-one-headphones.jpg';
// ProductIndepth imgs
import Txx991 from '../assets/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg';
import xx991 from '../assets/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';
// img gallery
import imgGallery1 from '../assets/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg';
import imgGallery2 from '../assets/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg';
import imgGallery3 from '../assets/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg';

export default class HeadphonesXX99mk1 extends Component {
    state ={
        cart: JSON.parse(window.localStorage.getItem("cart")),

        src: { 0: xx991 },
        tabletsrc: { 0: Txx991 },
        cartsrc: { 0: Cxx991 },
        alt: 'a black pair of headphones',
        newBool: false,
        namee: 'XX99 Mark I Headphones',
        desc: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
        price: '1750',
        feats: 'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
        included: ['1x Headphone unit', '2x Replacement earcups', '1x User manual', '1x 3.5mm 5m audio cable'],
        itemkey: 2,
        to:"/headphones/xx99mark1"
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