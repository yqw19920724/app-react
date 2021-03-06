import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import WebglDemo1 from './webglDemos/webglDemo1/webglDemo1'
import WebglDemo2 from './webglDemos/webglDemo2/webglDemo2'
import './webgl.less';

class Webgl extends Component {

    render() {
        return (
            <div className="webgl">
                <Route path='/3d/demo1' component={WebglDemo1} />
                <Route path='/3d/demo2' component={WebglDemo2} />
            </div>
        );
    }
}

export default Webgl;