import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dxx59 from '../assets/assets/shared/desktop/image-xx59-headphones.jpg';
import Dxx991 from '../assets/assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import Dxx992 from '../assets/assets/shared/desktop/image-xx99-mark-two-headphones.jpg';
import Dzx7 from '../assets/assets/shared/desktop/image-zx7-speaker.jpg';
import Dzx9 from '../assets/assets/shared/desktop/image-zx9-speaker.jpg';

import Mxx59 from '../assets/assets/shared/mobile/image-xx59-headphones.jpg';
import Mxx991 from '../assets/assets/shared/mobile/image-xx99-mark-one-headphones.jpg';
import Mxx992 from '../assets/assets/shared/mobile/image-xx99-mark-two-headphones.jpg';
import Mzx7 from '../assets/assets/shared/mobile/image-zx7-speaker.jpg';
import Mzx9 from '../assets/assets/shared/mobile/image-zx9-speaker.jpg';

class Suggestions extends Component{

    newRandomNum = () => {
        return Math.floor(Math.random() * 5);
    }

    randomizeSuggestions = () => {
        let suggestions = [];
        for(let x = 0; x < 3; x++){
            let ranNum = this.newRandomNum();
            if(!suggestions.includes(ranNum)){
                suggestions.push(ranNum);
            }else{
                while(suggestions.includes(ranNum)){
                    ranNum = this.newRandomNum();
                }
                suggestions.push(ranNum);
            }
        }
        return(suggestions.map((item) => {
            switch (item) {
                case 0:
                    return(
                        <div className="item" key={ item }>
                            <picture>
                                <source media="(max-width: 800px)" srcSet={ Mxx59 }></source>
                                <img src={ Dxx59 } alt="a pair of headphones"/>
                            </picture>
                            <h2>xx59</h2>
                            <Link className="btn1 product-link" to="/headphones/xx59" exact="true">See Product</Link>
                        </div>
                    ) 
                case 1:
                    return(
                        <div className="item" key={ item }>
                            <picture>
                                <source media="(max-width: 800px)" srcSet={ Mxx991 }></source>
                                <img src={ Dxx991 } alt="a pair of headphones"/>
                            </picture>
                            <h2>xx99 mark i</h2>
                            <Link className="product-link btn1" to="/headphones/xx99mark1" exact="true">See Product</Link>
                        </div>
                    )            
                case 2:
                    return(
                        <div className="item" key={ item }>
                            <picture>
                                <source media="(max-width: 800px)" srcSet={ Mxx992 }></source>
                                <img src={ Dxx992 } alt="a pair of headphones"/>
                            </picture>
                            <h2>xx99 mark ii</h2>
                            <Link className="btn1 product-link" to="/headphones/xx99mark2" exact="true">See Product</Link>
                        </div>
                    )                       
                case 3:
                    return(
                        <div className="item" key={ item }>
                            <picture>
                                <source media="(max-width: 800px)" srcSet={ Mzx7 }></source>
                                <img src={ Dzx7 } alt="a speaker"/>
                            </picture>
                            <h2>zx7 speaker</h2>
                            <Link className="btn1 product-link" to="/speakers/zx7" exact="true">See Product</Link>
                        </div>
                    )            
                case 4:
                    return(
                        <div className="item" key={ item }>
                            <picture>
                                <source media="(max-width: 800px)" srcSet={ Mzx9 }></source>
                                <img src={ Dzx9 } alt="a speaker"/>
                            </picture>
                            <h2>zx9 speaker</h2>
                            <Link className="btn1 product-link" to="/speakers/zx9" exact="true">See Product</Link>
                        </div>
                    )                      
                default:
                    return <div>Couldn't find any suggestions!</div>;
                }
            })
        )
    }

    render () {
        return(
            <div className="suggestions">
                <h1>you may also like</h1>
                <div className='suggestion-list'>{ this.randomizeSuggestions() }</div>
            </div>
        )
    }
}

export default Suggestions;