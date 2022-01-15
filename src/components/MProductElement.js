import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductElement extends Component {
    state = {
        new: this.props.new,
        name: this.props.name,
        description: this.props.description,
        link: this.props.link,
        src: this.props.src[0],
        imgAlt: this.props.imgalt,
        flip: this.props.flip,
        tag: this.props.tag
    }

    render () {
        return(
            <div className={ 'product-element ' + this.state.flip } key={ this.state.key }>
                <div className="product-img-cont">
                    <img src={ this.state.src } alt={ this.state.imgAlt}/>
                </div>
                <div className="product-text-cont">
                    <h4 hidden={ !this.state.new }>new product</h4>
                    <h2>{ this.state.name }</h2>
                    <p>{ this.state.description }</p>
                    <Link className="btn1" to={ this.state.link } exact="true">See Product</Link>
                </div>
            </div>
        )
    }
}