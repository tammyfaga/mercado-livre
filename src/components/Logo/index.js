import React, { Component } from 'react';
import './style.css';

import logo from './logo.png';

export default class Logo extends Component {
    render() {
        return (
            <a href={window.location.origin}>
                <img src={logo} alt={this.props.appTitle} title={this.props.appTitle} />
            </a>
        );
    }
}

