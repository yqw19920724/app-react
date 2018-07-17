import React, { Component } from 'react';
import threeBase from '../../core/threebase';
import Geometry from '../../core/geometry';
import Light from '../../core/light';
import './threedDemo1.less';

class ThreedDemo1 extends Component {

    constructor() {
        super()
        this.step = 0;
    }

    componentDidMount() {
        this.three = new threeBase('canvas-frame');
        this.geometry = new Geometry();
        this.light = new Light();
        this.three.initThree();
        this.three.initScene({fog: {color: '0xffffff'}});
        this.three.initCamera();

        this.three.sceneAdd(this.geometry.createAxesHelper());
        this.three.sceneAdd(this.light.setSpotlight());
        this.three.sceneAdd(this.light.setAmbientLight('0x404040'));
        this.three.sceneAdd(this.light.setHemiLight()); 

        this.plane = this.geometry.createPlane({
            size: {width: 60, height: 20, widthSegments: 1, heightSegments: 1}, 
            color: 0xcccccc, 
            position: {x: 15, y: 0, z: 0}
        });
        this.cube = this.geometry.createCube({
            size: {width: 4, height: 4, depth: 4}, 
            color: 0xff0000, 
            position: {x: -4, y: 3, z: 0}
        });
        this.sphere = this.geometry.createSphere({
            size: {radius: 4, widthSegments: 20, heightSegments: 20}, 
            color: 0x7777ff, 
            position: {x: 20, y: 4, z: 2}
        });
        this.three.sceneAdd(this.plane);
        this.three.sceneAdd(this.cube); 
        this.three.sceneAdd(this.sphere);

        this.sceneAnimation();
    }

    sceneAnimation = () => {
        this.cubeAnimation();
        this.sphereAnimation();
        this.three.threeStart();
        requestAnimationFrame(this.sceneAnimation)
    }

    cubeAnimation = () => {
        this.cube.rotation.x += 0.02;
        this.cube.rotation.y += 0.02;
        this.cube.rotation.z += 0.02;
    }

    sphereAnimation = () => {
        this.step += 0.04;
        this.sphere.position.x = 20 + ( 10 * Math.cos(this.step));
        this.sphere.position.y = 2 + ( 10 * Math.abs(Math.sin(this.step)));
    }

    render() {
        return (
            <div className="ThreedDemo1">
                <div id="canvas-frame"></div>
            </div>
        );
    }
}

export default ThreedDemo1;