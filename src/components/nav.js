import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import menu from '../assets/assets/shared/tablet/icon-hamburger.svg';
import cart from '../assets/assets/shared/desktop/icon-cart.svg';
import logo from '../assets/assets/shared/desktop/logo.svg';
import orangeCarrot from '../assets/assets/shared/desktop/icon-arrow-right.svg';

import earphonesImg from '../assets/assets/shared/desktop/image-category-thumbnail-earphones.png';
import headphonesImg from '../assets/assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImg from '../assets/assets/shared/desktop/image-category-thumbnail-speakers.png';


class Nav extends Component {
    //localStorage.getItem("cart") == [{"itemKey":1,"img":1,"imgAlt":"a pair of headphones","name":"xx59 headphones","price":899,"numOf":3},{"itemKey":2,"img":1,"imgAlt":"a pair of headphones","name":"xx991 mk1 headphones","price":1200,"numOf":1}]
    setLocalStorage = () => {
        const storage = window.localStorage.getItem("cart");
        if(!storage){
            localStorage.setItem("cart", JSON.stringify([]));
        }
    };

    state = {
        linksHidden: false,
        menuHidden: true,
        cartHidden: true,
        filmHidden: true,
        setStorage: this.setLocalStorage(),
        cart: JSON.parse(window.localStorage.getItem("cart")),
        cartLength: JSON.parse(window.localStorage.getItem("cart")).length,
    };
    
    openMenu = () => {
        if(this.state.menuHidden){
            this.setState({ cartHidden: true });
            this.setState({ menuHidden: false });
            this.setState({ filmHidden: false });
        }else{
            this.setState({ menuHidden: true });
            this.setState({ filmHidden: true });
        }
    };

    openCart = () => {
        if(this.state.cartHidden){
            this.setState({ menuHidden: true });
            this.setState({ cartHidden: false });
            this.setState({ filmHidden: false });
        }else{
            this.setState({ cartHidden: true });
            this.setState({ filmHidden: true });
        }
        this.cartList();
    };

    toggleFilm = () => {
        this.setState({ filmHidden: true });
        this.setState({ cartHidden: true });
        this.setState({ menuHidden: true });
    }

    cartList = () => {
        if(JSON.parse(window.localStorage.getItem("cart")).length !== 0){
            return(
                JSON.parse(window.localStorage.getItem("cart")).map(item => 
                <div className="cart-item" key={item.itemKey}>
                    <div className="cart-item-img"><img src={item.img} alt={item.imgAlt}/></div>
                    <div className="cart-item-info">
                        <h3>{item.name.toUpperCase()}</h3>
                        <p>{'$ ' + item.price}</p>
                    </div>
                    <div className="cart-item-amount">
                        <div onClick={ (click) => this.incrimentCartItem(click, item) }><i className="fas fa-minus"></i></div>
                        <h2>{ item.numOf }</h2>
                        <div onClick={ (click) => this.incrimentCartItem(click, item) }><i className="fas fa-plus"></i></div>
                    </div>
                </div>
                )
            )
        }else{
            return(
                <div className="cart-empty">Cart is Empty!</div>
            )
        }
    };
    
    getCartLength () {
        let cartLength = JSON.parse(window.localStorage.getItem("cart")).length;
        let string = 'Cart (' + cartLength + ')';
        return (
            <span>{string}</span>
        );
    };

    clearCart = () => {
        window.localStorage.setItem("cart", JSON.stringify([]));
        this.setState({ cart: JSON.parse(window.localStorage.getItem("cart")) });
    };

    returnNumOf = (obj) => {
        console.log(JSON.parse(window.localStorage.getItem("cart")));
        console.log(obj);
        let string = 'test';
        return string;
    }
    
    incrimentCartItem = (click, obj) => {
        let i = 0;
        JSON.parse(window.localStorage.getItem("cart")).map(item => {
            if(item.name === obj.name){
                let newCart = JSON.parse(window.localStorage.getItem("cart"));
                if(click.target.className.slice(7) === 'minus' && newCart[i].numOf !== 1){
                    newCart[i].numOf --;
                }else if (click.target.className.slice(7) === 'plus') {
                    newCart[i].numOf ++;
                }
                localStorage.setItem("cart", JSON.stringify(newCart));
                
                this.setState({ cart: JSON.parse(localStorage.getItem("cart")) })
            }
            i++;
            return null
        })
    };
        
    cartTotal () {
        let total = 0;
        JSON.parse(window.localStorage.getItem("cart")).map(item => {
            total += JSON.parse(item.price) * JSON.parse(item.numOf);
            return null
        });
        return '$ ' + total;
    };

        
    render() {
        return(
        <nav className={ this.props.border }>
            <div onClick={this.toggleFilm} className="film" hidden={ this.state.filmHidden }></div>
            <div className="menu">
                <img className="burger" onClick={ this.openMenu } src={ menu } alt="menu" />
            </div>
            <Link className="logo" to="/" exact="true">
                <img src={ logo } alt="audiophile logo" />
            </Link>
            <div className="links">
                <Link className="navbar-link" to="/" exact="true">HOME</Link>
                <Link className="navbar-link" to="/headphones" exact="true">HEADPHONES</Link>
                <Link className="navbar-link" to="/speakers" exact="true">SPEAKERS</Link>
                <Link className="navbar-link" to="/earphones" exact="true">EARPHONES</Link>
            </div>
            <img onClick={ this.openCart } src={ cart } alt="cart" />

            <div className="nav-menu" hidden={ this.state.menuHidden }>
                <div className="category-container">
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
            </div>

            <div className="cart-menu" hidden={ this.state.cartHidden }>
                <div className="cart-menu-head">
                    <h3>{this.getCartLength()}</h3>
                    <p className="remove-btn" onClick={ this.clearCart }>Remove All</p>
                </div>
                <div className="cart-list">{ this.cartList() }</div>
                <div className="cart-menu-foot">
                    <p>TOTAL</p>
                    <h2>{ this.cartTotal() }</h2>
                </div>
                <Link className="btn1" to="/checkout" exact="true">CHECKOUT</Link>
            </div>
        </nav>
        )
    }
}
export default Nav;