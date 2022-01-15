import React from 'react';
import Nav from '../components/nav.js';
import ProductPageHead from '../components/MProductPageHead';
import SpeakerFamily from '../components/speakerFamily.js';
import Suggestions from '../components/MSuggestions';
import CategoryHub from '../components/MCategoryHub.js';
import BringOutBest from '../components/MBringOutBest.js';
import Footer from '../components/footer.js';

export default function Speakers () {
    return (
        <div>
            <Nav border="no-border" />
            <ProductPageHead title="speakers" />
            <SpeakerFamily />
            <Suggestions />
            <CategoryHub />
            <BringOutBest />
            <Footer />
        </div>
    )
}