import React, { Component } from 'react';
import threeBase from '../../core/threebase';
import Geometry from '../../core/geometry';
import Light from '../../core/light';
import './webglDemo2.less';

class WebglDemo2 extends Component {

    constructor() {
        super()
    }
    
    componentDidMount() {
        this.three = new threeBase('canvas-frame');
        this.light = new Light();
        this.three.initThree();
        this.three.initScene({fog: {color: '0xffffff'}});
        this.three.initCamera({
            position: {x: 0, y: 0, z: 200}
        });
        this.geometry = new Geometry();
        this.three.sceneAdd(this.light.setAmbientLight('0xffffff'));
        this.three.sceneAdd(this.geometry.createAxesHelper(20));
        // this.three.sceneAdd(this.geometry.createPlane({
        //     size: {width: 50, height: 50},
        //     color: 0xcccccc, 
        //     position: {x: 25, y: 25, z: 0},
        // }));
        this.three.sceneAdd(this.geometry.createLine());
        this.sceneAnimation();
    }

    sceneAnimation = () => {
        this.three.threeStart();
        requestAnimationFrame(this.sceneAnimation)
    }

    render() {
        return (
            <div className="webglDemo2">
                <div id="canvas-frame"></div>
            </div>
        );
    }
}

export default WebglDemo2;