import React, { Component } from 'react';
import './style.css';

import Search from '../Search';
import Logo from '../Logo';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-center">
                    <div className="logo col-md-2 col-sm-2 col-xs-2">
                       <Logo appTitle={this.props.appTitle} />
                    </div>
                    <div className="col-md-10 col-sm-10 col-xs-10">
                        <Search onSearch={this.props.onSearch.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}
