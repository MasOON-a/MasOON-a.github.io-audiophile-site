import React, { Component } from 'react';

export default class ProductPageHead extends Component{
    state = {
        title: this.props.title
    }

    render () {
        return(
            <div className="page-head">{ this.state.title }</div>
        )
    }
}