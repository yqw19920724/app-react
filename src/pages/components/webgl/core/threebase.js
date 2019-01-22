import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts'
import baseColor from './res/baseColor';

class ThreeBase {
    constructor(canvasFrame) {
        this.element = document.getElementById(canvasFrame);

        this.colorEnum = {
            fogColor: "scene_fog_color"
        }

        this.render = null;
        this.scene = null;
        this.camera = null;
        this.controls = null;
        this.raycaster = null;
        this.intersects = [];
    }

    initThree = () => {
        this.renderer = new THREE.WebGLRenderer({antialias:true});
        this.renderer.shadowMapEnabled = true;   //渲染允许有阴影
        //this.renderer.setClearColor(0xeeeeee);   //设置环境背景为白色
        this.renderer.setSize( this.element.offsetWidth, this.element.offsetHeight );
        this.element.appendChild( this.renderer.domElement );
    };

    initScene = ({fog} = {}) => {
        this.scene = new THREE.Scene();
        if(fog && Object.keys(fog).length !== 0) {
            const fogColor = fog.color || baseColor[this.colorEnum.fogColor];
            this.scene.fog = new THREE.Fog(fogColor, 0.015, 100);
        }
        
    }

    initCamera = ({fov, position}) => {
        this.camera = new THREE.PerspectiveCamera( fov, this.element.offsetWidth / this.element.offsetHeight, 0.1, 1000 );
        //设置相机位置
        this.camera.position.x = position.x;
        this.camera.position.y = position.y;
        this.camera.position.z = position.z;
        this.camera.lookAt(this.scene.position);



        // const controls = new THREE.TrackballControls( this.camera );

        // controls.rotateSpeed = 5.0;
        // controls.zoomSpeed = 5;
        // controls.panSpeed = 2;

        // controls.noZoom = false;
        // controls.noPan = false;

        // controls.staticMoving = true;
        // controls.dynamicDampingFactor = 0.3;
    };

    initControls = () => {
        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.controls.maxPolarAngle = Math.PI * 0.495;
        this.controls.target.set( 0, 10, 0 );
        this.controls.minDistance = 40.0;
        this.controls.maxDistance = 200.0;
        this.camera.lookAt( this.controls.target );
    }

    initRaycaster = () => {
        this.raycaster = new THREE.Raycaster();
    }

    sceneAdd = (object) => {
        this.scene.add(object)
    }

    threeStart = () => {
        this.renderer.render( this.scene, this.camera )
    }

}

export default ThreeBase;