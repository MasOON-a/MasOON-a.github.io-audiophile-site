import React from 'react';
import { Link } from 'react-router-dom';
export default function homePageHead () {
return(
    <div className="home-page-head">
        <div className="info-cont">
            <h4>new product</h4>
            <h2>xx99 mark ii heapdhones</h2>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Link className="btn1" to='/headphones/xx99mark2' exact="true">see product</Link>
        </div>
    </div>
    )
}