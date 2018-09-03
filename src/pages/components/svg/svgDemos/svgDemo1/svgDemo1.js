import React, { Component } from 'react';
import SVG from 'svg.js'
import Raphael from 'raphael'
import Signal from 'signals'
import './svgDemo1.less';

class SvgDemo1 extends Component {

    componentDidMount() {
        this.createSvg();
        this.signal = new Signal();
        this.signal.add(() => {
            alert(2222)
        })
    }

    createSvg = () => {
        const ele = document.getElementById('svg-demo1')
        const paper = Raphael( ele, '100%', '100%');
        const cir = paper.circle(35,25,20).attr({
            fill: 'red'
        }).click(() => {
            this.signal.dispatch()
        })
    }

    render() {
        return (
            <div id='svg-demo1' className="svg-demo1">
                
            </div>
        );
    }
}

export default SvgDemo1;