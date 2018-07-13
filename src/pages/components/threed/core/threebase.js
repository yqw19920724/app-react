import * as THREE from 'three';

class ThreeBase {
    constructor(canvasFrame) {
        this.element = document.getElementById(canvasFrame);
        console.log(this.element.clientHeight)
    }

    initThree = () => {
        this.renderer = new THREE.WebGLRenderer({antialias:true});
        this.renderer.shadowMapEnabled = true;   //渲染允许有阴影
        this.renderer.setClearColor(0xeeeeee);   //设置环境背景为白色
        this.renderer.setSize( this.element.clientWidth, this.element.clientHeight );
        this.element.appendChild( this.renderer.domElement );
    };

    initScene = () => {
        this.scene = new THREE.Scene();
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