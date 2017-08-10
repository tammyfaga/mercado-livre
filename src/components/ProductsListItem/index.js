import React, { Component } from 'react';
import './style.css';

export default class ProductsListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: ''
        };
    };

    render() {
        return (
            <a href={"/items/" + this.props.product.id}>
                <div className="image">
                    <img src={this.props.product.picture} alt={this.props.product.title} title={this.props.product.title} />
                </div>
                <div className="details">
                    <p className="value">$ {this.props.product.price.amount}</p>
                    <p className="title">{this.props.product.title}</p>
                </div>
            </a>
        );
    }
}