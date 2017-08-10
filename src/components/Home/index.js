import React, { Component } from 'react';
import './style.css';

import Header from '../Header';

export default class App extends Component {
    render() {
        return (
            <div className="home">
                <div className="container-center">
                    <div className="soon">
                        <p>Para efetuar a busca digite o nome do produto no topo</p>
                    </div>
                </div>
            </div>
        );
    }
}