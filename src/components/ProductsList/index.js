import React, { Component } from 'react';
import {Icon} from 'react-fa';
import './style.css';

import ProductService from '../../services/ProductService';
import ProductsListItem from '../ProductsListItem';

export default class ProductsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: '',
        };
    };

    componentDidMount() {
        this.getProducts(this.props.location.search);
    }

    componentWillReceiveProps(props) {
        this.getProducts(props.location.search);
    }

    getProducts (search) {
        let query = search.replace('?search=', '');
        ProductService
            .getProductsByQuery(query)
            .then(function(response) {
                this.setState({
                    products: response.data.items
                });
            }.bind(this));
    }

    showList(products) {
        if (!products) return '';
        return products.map(function(product, index){
            return (
                <li key={index} className="item">
                    <ProductsListItem product={product} />
                </li>
            );
        });
    }

    render() {
        if(this.state.products) {
            return (
                <div className="products-list">
                    <div className="container-center col-xs-12">
                        <ul className="items">
                            {this.showList(this.state.products)}
                        </ul>
                    </div>
                </div>
            );
        }  else {
            return (
                <div className="container-center col-xs-12">
                    <Icon spin name="spinner" size="3x" />
                </div>
            );
        }
    }
}