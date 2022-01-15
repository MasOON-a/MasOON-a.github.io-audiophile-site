import React from 'react';
import { Link } from 'react-router-dom';

export default function homeShowcase () {
    return(
        <div className="home-showcase">
            <div className="large-case">
                <div className="text-cont">
                    <h2>zx9 speaker</h2>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link className="btn2" to="" exact="true">see product</Link>
                </div>
            </div>
            <div className="small-case a">
                <div className="text-cont">
                    <h3>zx7 speaker</h3>
                    <Link className="btn2" to="" exact="true">see product</Link>
                </div>
            </div>
            <div className="small-case b">
                <div className="img-cont"></div>
                <div className="text-cont">
                    <h3>yx1 earphones</h3>
                    <Link className="btn2" to="" exact="true">see product</Link>
                </div>
            </div>
        </div>
    )
}