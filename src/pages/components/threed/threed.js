import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import threedDemo1 from './threedDemos/threedDemo1/threedDemo1'
import './threed.less';

class Threed extends Component {

    render() {
        return (
            <div className="Threed">
                <Route path='/3d/demo1' component={threedDemo1} />
            </div>
        );
    }
}

export default Threed;