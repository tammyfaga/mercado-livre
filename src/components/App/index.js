import React, { Component } from 'react';
import Header from '../Header';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import PropTypes from 'prop-types';

const appTitle = "Mercado Livre";

export default class App extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            update: true
        };
    }

    doSearch(query) {
        this.context.router.history.push({
            pathname: '/items',
            search: `?search=${query}`
        });

        console.log('Entrou');
        this.setState({
            query: query,
            update: true
        });
    }

    render() {
        return (
            <div className="app">
                <Header onSearch={this.doSearch.bind(this)} appTitle={appTitle} />
                <main className="container" role="main">
                    <div className="center-block clearfix">
                        {React.cloneElement(this.props.children, {
                            update: this.state.true,
                            product: this.state.query
                        })}
                    </div>
                </main>
            </div>
        );
    }
}