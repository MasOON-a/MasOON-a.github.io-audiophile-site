import React, { Component }from 'react';
import Nav from '../components/nav.js';
import PageHead from '../components/pageHead.js';
import ProductIndepth from '../components/MProductIndepth.js';
import ProductImgGallery from '../components/MProductImgGallery.js';
import Suggestions from '../components/MSuggestions';
import CategoryHub from '../components/MCategoryHub.js';
import BringOutBest from '../components/MBringOutBest.js';
import Footer from '../components/footer.js';
// Cart img
import Cyx1 from '../assets/assets/cart/image-yx1-earphones.jpg';
// ProductIndepth imgs
import yx1 from '../assets/assets/product-yx1-earphones/desktop/image-product.jpg';
import Tyx1 from '../assets/assets/product-yx1-earphones/tablet/image-product.jpg';
// ImgGallery imgs
import imgGallery1 from '../assets/assets/product-yx1-earphones/desktop/image-gallery-1.jpg';
import imgGallery2 from '../assets/assets/product-yx1-earphones/desktop/image-gallery-2.jpg';
import imgGallery3 from '../assets/assets/product-yx1-earphones/desktop/image-gallery-3.jpg';

export default class EarphonesYX1 extends Component {
    state ={
        cart: JSON.parse(window.localStorage.getItem("cart")),

        src: { 0: yx1 },
        tabletsrc: { 0: Tyx1 },
        cartsrc: { 0: Cyx1 },
        alt: 'a black pair of earbuds',
        newBool: true,
        namee: 'YX1 Wireless Earphones',
        desc: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
        price: '599',
        feats: 'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.',
        included: ['2x Earphone unit', '6x Multi-size earplugs', '1x User manual', '1x USB-C charging cable', '1x Travel pouch'],
        itemkey: 6,
        to:"/earphones/yx1wireless"
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