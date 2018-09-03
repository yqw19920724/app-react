import React, { Component } from 'react';
import Canvas from '../model/canvas'
import {Shape, shapeTypeMenu} from '../model/shape'
import Signal from 'signals'
import './svgDemo1.less';

class SvgDemo1 extends Component {

    componentDidMount() {
        this.paper = undefined;


        this.init();
    }

    init = () => {
        this.paper = new Canvas('svg-demo1', '100%', '100%');
    }

    drawCircle = (e) => {
        const circle = new Shape(this.paper, shapeTypeMenu.circle, {x: e.clientX, y: e.clientY}, {radius: 30, fill: 'red'})
    }

    render() {
        return (
            <div id='svg-demo1' className="svg-demo1" onClick={e => {this.drawCircle(e)}}>
                
            </div>
        );
    }
}

export default SvgDemo1;