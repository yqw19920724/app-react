import React, { Component } from 'react';
import threeBase from '../../core/threebase';
import Geometry from '../../core/geometry';
import Light from '../../core/light';
import * as THREE from 'three';
import './webglDemo1.less';

class WebglDemo1 extends Component {

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
        this.three.initCamera({
            fov: 75,
            position: {x: -30, y: 40, z: 30}
        });
        this.three.initControls();
        this.three.initRaycaster();
        console.log(this.three.initRaycaster)
        this.three.sceneAdd(this.geometry.createAxesHelper(20));
        
        this.three.sceneAdd(this.light.setAmbientLight('0x404040'));
        // this.three.sceneAdd(this.light.setHemiLight({
        //     color: {skyColor: 0x0000ff, groundColor: 0x00ff00, intensity: 0.6},
        //     position: {x: 0, y: 500, z: 0}
        // })); 

        this.plane = this.geometry.createPlane({
            size: {width: 60, height: 20, widthSegments: 1, heightSegments: 1}, 
            color: 0xcccccc, 
            position: {x: 15, y: 0, z: 0},
            rotation: {x: -0.5* Math.PI}
        });

        const spotLight = this.light.setSpotlight({
            color: 0xffffff,
            position: { x: -40, y: 60, z: -10 }
        })
        spotLight.target = this.plane
        this.three.sceneAdd(spotLight);

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

    getIntersects = (event) => {
        const {element, scene, camera, raycaster} = this.three;
        const mouse = new THREE.Vector2();
        mouse.x = ((event.clientX - element.getBoundingClientRect().left) / element.offsetWidth) * 2 - 1;
        mouse.y = -((event.clientY - element.getBoundingClientRect().top) / element.offsetHeight) * 2 + 1;
        
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);
        intersects.forEach(intersect => {
            intersect.object.material.color.set(0xff0000);
        })
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
            <div className="webglDemo1">
                <div id="canvas-frame" onMouseMove={this.getIntersects}></div>
            </div>
        );
    }
}

export default WebglDemo1;