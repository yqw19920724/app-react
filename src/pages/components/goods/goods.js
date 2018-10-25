import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import GoodsList from './goodsList/goodsList'
import GoodsUpload from './goodsUpload/goodsUpload'
import './goods.less';

class Goods extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <div className="Goods">
                <Route path='/goods/list' component={GoodsList} />
                <Route path='/goods/upload' component={GoodsUpload} />
            </div>
        );
    }
}

export default Goods;