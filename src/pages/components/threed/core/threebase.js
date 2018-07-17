import * as THREE from 'three';
import baseColor from './res/baseColor';

class ThreeBase {
    constructor(canvasFrame) {
        this.element = document.getElementById(canvasFrame);

        this.colorEnum = {
            fogColor: "scene_fog_color"
        }
    }

    initThree = () => {
        this.renderer = new THREE.WebGLRenderer({antialias:true});
        this.renderer.shadowMapEnabled = true;   //渲染允许有阴影
        //this.renderer.setClearColor(0xeeeeee);   //设置环境背景为白色
        this.renderer.setSize( this.element.clientWidth, this.element.clientHeight );
        this.element.appendChild( this.renderer.domElement );
    };

    initScene = ({fog} = {}) => {
        this.scene = new THREE.Scene();
        // if(fog && Object.keys(fog).length !== 0) {
        //     const fogColor = fog.color || baseColor[this.colorEnum.fogColor];
        //     this.scene.fog = new THREE.Fog(fogColor, 0.015, 100);
        // }
        
    }

    initCamera = () => {
        this.camera = new THREE.PerspectiveCamera( 75, this.element.clientWidth/this.element.clientHeight, 0.1, 1000 );
        //设置相机位置
        this.camera.position.x = -30;
        this.camera.position.y = 40;
        this.camera.position.z = 30;
        this.camera.lookAt(this.scene.position);
    };

    sceneAdd = (object) => {
        this.scene.add(object)
    }

    threeStart = () => {
        this.renderer.render( this.scene, this.camera )
    }

}

export default ThreeBase;