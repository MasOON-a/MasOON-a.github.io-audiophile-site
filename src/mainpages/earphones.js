import React from 'react';
import Nav from '../components/nav.js';
import ProductPageHead from '../components/MProductPageHead';
import EarphoneFamily from '../components/earphoneFamily.js';
import Suggestions from '../components/MSuggestions';
import CategoryHub from '../components/MCategoryHub.js';
import BringOutBest from '../components/MBringOutBest.js';
import Footer from '../components/footer.js';

export default function Earphones () {
    return (
        <div>
            <Nav border="no-border" />
            <ProductPageHead title="earphones" />
            <EarphoneFamily />
            <Suggestions />
            <CategoryHub />
            <BringOutBest />
            <Footer />
        </div>
    )
}