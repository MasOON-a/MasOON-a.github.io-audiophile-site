import React from 'react';
import { Link } from 'react-router-dom';

import earphonesImg from '../assets/assets/shared/desktop/image-category-thumbnail-earphones.png';
import headphonesImg from '../assets/assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImg from '../assets/assets/shared/desktop/image-category-thumbnail-speakers.png';
import orangeCarrot from '../assets/assets/shared/desktop/icon-arrow-right.svg';

export default function CategoryHub () {
    return(
        <div className="category-hub-cont">
            <div className="category-item">
                <img className="menu-thumbnail" src={ headphonesImg } alt="speaker" />
                <h2>Headphones</h2>
                <Link className="category-link" to="/headphones" exact="true">
                    <p>SHOP</p>
                    <img src={ orangeCarrot } alt="arrow" />
                </Link>
            </div>

            <div className="category-item">
                <img className="menu-thumbnail" src={ speakersImg } alt="speaker" />
                <h2>SPEAKERS</h2>
                <Link className="category-link" to="/speakers" exact="true">
                    <p>SHOP</p>
                    <img src={ orangeCarrot } alt="arrow" />
                </Link>
            </div>

            <div className="category-item">
                <img className="menu-thumbnail" src={ earphonesImg } alt="speaker" />
                <h2>Earphones</h2>
                <Link className="category-link" to="/earphones" exact="true">
                    <p>SHOP</p>
                    <img src={ orangeCarrot } alt="arrow" />
                </Link>
            </div>
        </div>
    )
}