import React, { Component }from 'react';
import Nav from '../components/nav.js';
import PageHead from '../components/pageHead.js';
import CheckoutMain from '../components/checkoutMain.js';
import Footer from '../components/footer.js';

export default class Checkout extends Component {
    render () {
        return (
            <div>
                <Nav />
                <PageHead />
                <CheckoutMain />
                <Footer />
            </div>
        )
    }
}