import * as THREE from 'three';

class Geometry {

    //创建平面
    createPlane = ({size, position, color}) => {
        const planeGeometry = new THREE.PlaneGeometry( size.width, size.height, size.widthSegments, size.heightSegments  );
        const planeMaterial = new THREE.MeshLambertMaterial( {color: color, side: THREE.DoubleSide} );
        const plane = new THREE.Mesh( planeGeometry, planeMaterial );
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = position.x;
        plane.position.y = position.y;
        plane.position.z = position.z;
        plane.receiveShadow = true; //平面接受阴影
        return plane;
    }

    //创建长方体
    createCube = ({size, position, color}) => {
        const cubeGeometry = new THREE.BoxGeometry( size.width, size.height, size.depth );
        const cubeMaterial = new THREE.MeshLambertMaterial( { color: color, wireframe: true } );
        const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
        cube.position.x = position.x;
        cube.position.y = position.y;
        cube.position.z = position.z;
        cube.castShadow = true; //方块投射阴影
        return cube;
    }

    //创建球体
    createSphere = ({size, position, color}) => {
        const sphereGeometry = new THREE.SphereGeometry( size.radius, size.widthSegments, size.heightSegments );
        const sphereMaterical = new THREE.MeshLambertMaterial( { color: color, wireframe: true } );
        const sphere = new THREE.Mesh( sphereGeometry, sphereMaterical );
        sphere.position.x = position.x;
        sphere.position.y = position.y;
        sphere.position.z = position.z;
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