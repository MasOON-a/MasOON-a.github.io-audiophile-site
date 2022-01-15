import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/assets/shared/desktop/logo.svg';
import facebook from '../assets/assets/shared/desktop/icon-facebook.svg';
import twitter from '../assets/assets/shared/desktop/icon-twitter.svg';
import instagram from '../assets/assets/shared/desktop/icon-instagram.svg';

export default function Footer () {
    return(
        <footer>
            <span className="orange-bar"></span>
            <div className="footer-top">
                <img src={logo} alt="audiophile logo"/>
                <div className="links">
                    <Link className="navbar-link" to="/" exact="true">HOME</Link>
                    <Link className="navbar-link" to="/headphones" exact="true">HEADPHONES</Link>
                    <Link className="navbar-link" to="/speakers" exact="true">SPEAKERS</Link>
                    <Link className="navbar-link" to="/earphones" exact="true">EARPHONES</Link>
                </div>
            </div>
            <div className="footer-text">
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                visit our demo facility - we’re open 7 days a week.</p>
            </div>

            <div className="footer-bot">
                <p>Copyright 2021. All Rights Reserved</p>
                <div className="icon-cont">
                    <a className="footer-social" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook logo"/></a>
                    <a className="footer-social" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram Logo"/></a>
                    <a className="footer-social" href="https://www.twitter.com/" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter logo"/></a>
                </div>
            </div>
        </footer>
    )
}