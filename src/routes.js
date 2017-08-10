import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './components/App';
import Home from './components/Home';
import ProductsList from "./components/ProductsList";
import Product from "./components/Product";

const history = createBrowserHistory();

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <App>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/items" component={ProductsList} />
                        <Route strict path="/items/:id" component={Product} />
                        <Redirect from="*" exact to="/" />
                        <Route path="*" component={Home} />
                    </Switch>
                </App>
            </Router>
        );
    }
}