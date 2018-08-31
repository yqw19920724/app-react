import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import svgDemo1 from './svgDemos/svgDemo1/svgDemo1'
import './svg.less';

class Svg extends Component {

    render() {
        return (
            <div className="svg">
                <Route path='/2d/demo1' component={svgDemo1} />
            </div>
        );
    }
}

export default Svg;