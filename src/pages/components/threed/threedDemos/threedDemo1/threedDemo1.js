import React, { Component } from 'react';
import threeBase from '../../threebase';
import Geometry from '../../geometry';
import './threedDemo1.less';

class ThreedDemo1 extends Component {

    componentDidMount() {
        this.three = new threeBase('canvas-frame');
        this.geometry = new Geometry();
        this.three.initThree();
        this.three.initScene();
        this.three.initCamera();
        this.three.sceneAdd(this.geometry.createAxesHelper());
        this.three.sceneAdd(this.geometry.createPlane());
        this.three.sceneAdd(this.geometry.createCube());
        this.three.sceneAdd(this.three.setSpotlight());
        this.three.sceneAdd(this.geometry.createSphere());
        this.three.threeStart();
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