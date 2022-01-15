import React ,{ Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductIndepth extends Component {
    // example state: 
    // state ={
    //     this.props.src = { 0: xx991}, <-- variable name in parent document will pass this document file 
    //     this.props.cartsrc = { 0: Cxx991}, <-- variable name in parent document will pass this document file
    //     this.props.alt = string vlaue,
    //     this.props.new = bool value,
    //     this.props.name = string value,
    //     this.props.desc = string value,
    //     this.props.price = string value, <-- add '$' inline
    //     this.props.feats = string value,
    //     this.props.included = list, then return .map() with <li> element and <strong></strong> wrapping first 2 indexes of string
    // }

    // add to cart btn
    //localStorage.getItem("cart") == [{"itemKey":1,"img":this.state.cartsrc,"imgAlt":this.state.alt,"name":this.state.name,"price":this.state.price,"numOf":this.state.numOf},{"itemKey":2,"img":1,"imgAlt":"a pair of headphones","name":"xx991 mk1 headphones","price":1200,"numOf":1}]
    state = {
        src: this.props.src[0],
        tabletsrc: this.props.tabletsrc[0],
        cartsrc: this.props.cartsrc[0],
        alt: this.props.alt,
        new: this.props.new,
        namee: this.props.namee,
        desc: this.props.desc,
        price: this.props.price,
        feats: this.props.feats,
        included: this.props.included,
        itemkey: this.props.itemkey,
        to: this.props.to,

        numOf: 1
    }

    includedList = () => {
        return(
            this.state.included.map((item) => {
                return(
                <li key={ this.state.included.indexOf(item) }><strong>{ item.slice(0,3) }</strong>{ item.slice(3) }</li>
                )
            })
        )
    }

    incrimentNumOf = (click) => {
        let newNumOf = this.state.numOf;
        if(click.target.className.slice(7) === 'minus' && this.state.numOf !== 1){
            newNumOf--;
            this.setState({ numOf: newNumOf-- });
        }else if (click.target.className.slice(7) === 'plus'){
            newNumOf++;
            this.setState({ numOf: newNumOf });
        }
    }

    addToCart = () => {
        let cart = JSON.parse(window.localStorage.getItem("cart"));
        //{"itemKey":1,"img":this.state.cartsrc,"imgAlt":this.state.alt,"name":this.state.name,"price":this.state.price,"numOf":this.state.numOf}
        let item = {
            "itemKey":this.state.itemkey,
            "img":this.state.cartsrc,
            "imgAlt":this.state.alt,
            "name":this.state.namee,
            "price":this.state.price,
            "numOf":this.state.numOf
        };
        let length = JSON.parse(localStorage.getItem("cart")).length;
        let push = true;
        for(let x = 0; x < length; x++){ // check cart for matches before adding item
            if(cart[x].itemKey === item.itemKey){
                push = false;
            }
        }
        if(push){
            cart.push(item);
            window.localStorage.setItem("cart", JSON.stringify(cart));
            this.props.refreshState();
        }

    }

    render () {
        return(
            <div className="product-profile-cont">
                <div className="product-bio-cont">
                    <picture>
                        <source srcSet={ this.state.src } media='(max-width: 700px)' alt={ this.state.alt }></source>
                        <source srcSet={ this.state.tabletsrc } media='(max-width: 1100px)' alt={ this.state.alt }></source>
                        <img src={ this.state.src } alt={ this.state.alt }/>
                    </picture>
                    <div className="product-bio">
                        <h4 hidden={ !this.state.new }>new product</h4>
                        <h2>{ this.state.namee }</h2>
                        <p className="description">{ this.state.desc }</p>
                        <h5>{ '$ ' + this.state.price }</h5>
                        <div className="cart-controls">
                            <div className="num-item">
                                <i className="fas fa-minus" onClick={(click) => this.incrimentNumOf(click)}></i>
                                <p>{ this.state.numOf }</p>
                                <i className="fas fa-plus" onClick={(click) => this.incrimentNumOf(click)}></i>
                            </div>
                            <Link className="btn1" onClick={ this.addToCart } to={ this.state.to } exact="true">add to cart</Link>
                        </div>
                    </div>
                </div>
                <div className="product-indepth">
                    <div>
                        <h3>features</h3>
                        <p>{ this.state.feats }</p>
                    </div>
                    <div className="included-cont">
                        <h3>in the box</h3>
                        <ul className="included">{ this.includedList() }</ul>
                    </div>
                </div>
            </div>
        )
    }
}