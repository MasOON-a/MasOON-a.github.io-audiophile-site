import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class checkoutMain extends Component {
    state = {
        ePayInfoHidden: true,
        cashInfoHidden: true,
        ePay: '',
        cash: '',
        input: {
            'name': '',
            'email': '',
            'phone': '',
            'adress': '',
            'zip-code': '',
            'city': '',
            'country': '',
        }
    }


    toggleClicked = (click) => {
        if(click.target.parentElement.className.slice(0,8) !== 'clicked'){
            click.target.id === 'cash' ? this.setState({ cash:  'clicked', ePay: '', cashInfoHidden: false, ePayInfoHidden: true }) : this.setState({ cash:  '', ePay: 'clicked', cashInfoHidden: true, ePayInfoHidden: false });
        }
    }


    cartDisplay = () => {
        return(
            JSON.parse(window.localStorage.getItem("cart")).map((item) => {
                return(
                    <div className="sum-item" key={item.itemKey}>
                        <div className='img-cont'>
                            <img src={item.img} alt={item.imgAlt} />
                        </div>
                        <div className='main-cont'>
                            <p>{item.name}</p>
                            <span>{'$ ' + item.price}</span>
                        </div>
                        <div className='num-cont'>{'x' + item.numOf}</div>
                    </div>
                )
            })
        )
    }

    getTotal = () => {
        let total = 0;
        JSON.parse(window.localStorage.getItem("cart")).forEach((item) => {
            total += JSON.parse(item.price);
        })
        return total;
    }

    getGrandTotal = () => {
        let shipping;
        this.getTotal() ? shipping = 50 : shipping= 0;
        return Math.floor(this.getTotal() + shipping + .1*(this.getTotal()));
    }

    inputEdit = (click) => {
        let newInput = this.state.input;
        if(!click.target.validity.valid){
            newInput[click.target.id] = 'invalid';
            this.setState({ input: newInput });
        }else {
            newInput[click.target.id] = '';
            this.setState({ input: newInput });
        }
    }

    render () {
        return(
            <div className="master-cont">
                <div className="checkout">
                    <h3>checkout</h3>

                    <h4>billing details</h4>
                    <div className="billing">
                        <div>
                            <label htmlFor="name">Name<abbr title="required"> *</abbr></label>
                            <input className={this.state.input['name']} type="text" id="name" placeholder="Mason Matich" onChange={(click) => this.inputEdit(click)} required></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email Adress<abbr title="required"> *</abbr></label>
                            <input className={this.state.input['email']} type="email" id="email" placeholder="mason@mail.com" onChange={(click) => this.inputEdit(click)} required></input>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number<abbr title="required"> *</abbr></label>
                            <input className={this.state.input['phone']} type="text" id="phone" placeholder="202-555-0136" pattern='[0-9]{3,3}(-)[0-9]{3,3}(-)[0-9]{4,4}' onChange={(click) => this.inputEdit(click)} required></input>
                        </div>
                    </div>

                    <h4>shipping info</h4>
                    <div className="shipping">
                        <div className="large">
                            <label htmlFor="adress">Adress<abbr title="required"> *</abbr></label>
                            <input className={this.state.input['adress']} type="text" id="adress" placeholder="1137 Williams Avenue" onChange={(click) => this.inputEdit(click)} required></input>
                        </div>
                        <div>   
                            <label htmlFor="zip-code">Zip Code<abbr title="required"> *</abbr></label>
                            <input className={this.state.input['zip-code']} type="text" id="zip-code" placeholder="10001" pattern='[0-9]{6,6}' onChange={(click) => this.inputEdit(click)} required></input>
                        </div>
                        <div>
                            <label htmlFor="city">City<abbr title="required"> *</abbr></label>
                            <input className={this.state.input['city']} type="text" id="city" placeholder="New York" onChange={(click) => this.inputEdit(click)} required></input>
                        </div>
                        <div>
                            <label htmlFor="country">Country<abbr title="required"> *</abbr></label>
                            <input className={this.state.input['country']} type="text" id="country" placeholder="United States" onChange={(click) => this.inputEdit(click)} required></input>
                        </div>
                    </div>

                    <h4>payment details</h4>
                    <div className="payment">
                        <div className="payment-method">
                            <h5>Payment Method<abbr title="required"> *</abbr></h5>
                            <div className="option-cont">
                                <label className={ this.state.ePay + ' payment-option' } htmlFor="ePay"><input type="radio" name="payment-method" id="ePay" onChange={ (click) => this.toggleClicked(click) }></input>e-Money</label>
                                <label className={ this.state.cash + ' payment-option' } htmlFor="cash"><input type="radio" name="payment-method" id="cash" onChange={ (click) => this.toggleClicked(click) }></input>Cash on Delivery</label>
                            </div>
                        </div>
                    </div>
                    <div hidden={this.state.ePayInfoHidden}>
                        <div className="ePay-note" >
                            <div>
                                <label htmlFor="number">e-Money Number</label>
                                <input type="text" id="nmber" placeholder="123456789"></input>
                            </div>
                            <div>
                                <label htmlFor="pin">e-Money PIN</label>
                                <input type="text" id="pin" placeholder="9087"></input>
                            </div>
                        </div>
                    </div>
                    <p className="cash-note" hidden={ this.state.cashInfoHidden }>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives 
                    at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                </div>
                <div className="summary">
                    <h3>summary</h3>
                    <div className="cart-display">{ this.cartDisplay() }</div>
                    <div>
                        <h5 className='label'>total</h5>
                        <p className="value">{'$ ' + this.getTotal()}</p>
                    </div>
                    <div>
                        <h5 className='label'>shipping</h5>
                        <p className="value">{this.getTotal() ? '$ 50' : '$ 0'  }</p>
                    </div>
                    <div>
                        <h5 className='label'>vat (included)</h5>
                        <p className="value">{'$ ' + Math.floor(.1 * (this.getTotal()))}</p>
                    </div>
                    <div>
                        <h5 className='label'>grand total</h5>
                        <p className="value o">{'$ ' + this.getGrandTotal()}</p>
                    </div>
                    <div className="btn-cont">
                        <Link className="btn1" to="/" exact="true">continue</Link>
                    </div>
                </div>
            </div>
        )
    }
}