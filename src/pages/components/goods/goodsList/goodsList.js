import React, { Component } from 'react';
import './goodsList.less';
import CommonModule from '../../../../common/commonModule'

class GoodsList extends Component {

    componentDidMount() {}

    componentWillMount() {
        CommonModule.http.handler('getGoods', {
            limit: 10,
            page: 1
        }).then(data => {
            console.log(data);
        }).catch( err => {
            console.log(err.err);
        })
    }

    componentWillUnmount() {}
    
    render() {
        return (
            <div className="GoodsList">
            </div>
        );
    }
}

export default GoodsList;
