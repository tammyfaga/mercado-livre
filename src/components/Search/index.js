import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Icon} from 'react-fa';
import './style.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: ''
        };
    }

    setProductName(e) {
        this.setState({
            product: encodeURIComponent(e.target.value)
        });
    };

    doSearch(e) {
        e.preventDefault();
        let action = this.props.onSearch;
        action(this.state.product);
    };

    render() {
        return (
            <div className="search">
                <form method="GET" onSubmit={this.doSearch.bind(this)}>
                    <input
                        type="text"
                        required
                        className="input-search"
                        onChange={this.setProductName.bind(this)} />
                    <Button color="secondary" className="btn-search">
                        <Icon name="search" />
                    </Button>
                </form>
            </div>
        );
    }
}

export default Search;

