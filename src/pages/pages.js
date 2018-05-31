import React, { Component } from 'react';
import './pages.less';
import { Route } from 'react-router-dom'
import Entry from './components/entry/entry'
import Goods from './components/goods/goods'

class Pages extends Component {

    constructor({match}) {
        super();
        console.log(match)  
        this.match = match;
    }
    render() {
        return (
            <div className="Pages">
            123123
            <Route exact path="/" component={Entry} />
            <Route path="/goods" component={Goods} />
            </div>
        );
    }
}

export default Pages;