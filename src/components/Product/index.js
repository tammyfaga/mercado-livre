import React, { Component } from 'react';
import {Icon} from 'react-fa';
import { Button } from 'reactstrap';
import './style.css';

import ProductService from '../../services/ProductService';

export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: ''
        };
    };

    componentDidMount() {
        this.getProductById(this.props.match.params.id);
    }

    getProductById(id) {
        ProductService
            .getProductById(id)
            .then(function(response) {
                this.setState({
                    product: response.data.item
                });
            }.bind(this));
    };

    render() {
        if (this.state.product) {
            return (
                <div className="product">
                    <div className="container-center col-xs-12">
                        <div className="col-md-9 col-sm-8 col-xs-12">
                            <div className="image">
                                <img src={this.state.product.picture} alt={this.state.product.title} title={this.state.product.title} />
                            </div>
                            <div className="description">
                                <h2 className="description-title">Descripción del producto</h2>
                                <p className="description-text">{this.state.product.description}</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-12">
                            <div className="details">
                                <p className="title">{this.state.product.title}</p>
                                <p className="value">
                                    $ {this.state.product.price.amount}
                                    <span className="decimals">{this.state.product.price.decimals}</span>
                                </p>
                            </div>
                            <Button color="primary" className="btn-buy" >
                                Comprar
                            </Button>
                        </div>
                    </div>
                </div>);
        } else {
            return (
                <div className="container-center">
                    <Icon spin name="spinner" size="3x" />
                </div>
            );
        }
    }
}