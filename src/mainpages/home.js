import React from 'react';
import Nav from '../components/nav';
import HomePageHead from '../components/homePageHead';
import CategoryHub from '../components/MCategoryHub';
import HomeShowcase from '../components/homeShowcase';
import BringOutBest from '../components/MBringOutBest';
import Footer from '../components/footer';

export default function home () {
    return(
        <div>
            <Nav />
            <HomePageHead />
            <CategoryHub />
            <HomeShowcase />
            <BringOutBest />
            <Footer />
        </div>
    )
}