import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GoodsList from './goodsList/goodsList'
import './goods.less';

class Goods extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <div className="Goods">
                xxxxxxxx
                <Route path='/goods/list' component={GoodsList} />
            </div>
        );
    }
}

export default Goods;