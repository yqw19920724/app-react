import React, { Component } from 'react';
import './goodsList.less';

class GoodsList extends Component {

    componentDidMount() {}

    componentWillMount() {
        window.CF.commonModule.http.handler(window.CF.commonModule.http.apiName.GETGOODS, {
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
