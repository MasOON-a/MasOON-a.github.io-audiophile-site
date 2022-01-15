import React, { Component }from 'react';
import Nav from '../components/nav';
import ProductPageHead from '../components/MProductPageHead';
import HeadphoneFamily from '../components/headphoneFamily.js';
import Suggestions from '../components/MSuggestions';
import CategoryHub from '../components/MCategoryHub.js';
import BringOutBest from '../components/MBringOutBest.js';
import Footer from '../components/footer.js';

export default class headphones extends Component{
    state ={
        cart: JSON.parse(window.localStorage.getItem("cart")),
    }

    render () {
        return(
        <div>
            <Nav border="no-border" />
            <ProductPageHead title="headphones" />
            <HeadphoneFamily />
            <Suggestions />
            <CategoryHub />
            <BringOutBest />
            <Footer />
        </div>
    )
    }
}