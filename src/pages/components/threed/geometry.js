import * as THREE from 'three';

class Geometry {

    createPlane = () => {
        const planeGeometry = new THREE.PlaneGeometry( 60, 20, 1, 1 );
        const planeMaterial = new THREE.MeshLambertMaterial( {color: 0xcccccc, side: THREE.DoubleSide} );
        const plane = new THREE.Mesh( planeGeometry, planeMaterial );
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 15;
        plane.position.y = 0;
        plane.position.z = 0;
        plane.receiveShadow = true; //平面接受阴影
        return plane;
    }

    createCube = () => {
        const cubeGeometry = new THREE.BoxGeometry( 4, 4, 4 );
        const cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xff0000, wireframe: true } );
        const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
        cube.position.x = -4;
        cube.position.y = 3;
        cube.position.z = 0;
        cube.castShadow = true; //方块投射阴影
        return cube;
    }

    createSphere = () => {
        const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
        const sphereMaterical = new THREE.MeshLambertMaterial( { color: 0x7777ff, wireframe: true } );
        const sphere = new THREE.Mesh( sphereGeometry, sphereMaterical );
        sphere.position.x = 20;
        sphere.position.y = 4;
        sphere.position.z = 2;
        sphere.castShadow = true; //球投射阴影
        return sphere;
    }

        //添加坐标系
    createAxesHelper = () => {
        const axes = new THREE.AxesHelper(20);
        return axes;
    }
}

export default Geometry;