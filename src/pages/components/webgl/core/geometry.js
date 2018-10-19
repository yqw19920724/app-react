import * as THREE from 'three';

class Geometry {

    //创建平面
    createPlane = ({size, position, color, rotation = {}}) => {
        const planeGeometry = new THREE.PlaneGeometry( size.width, size.height, size.widthSegments, size.heightSegments  );
        const planeMaterial = new THREE.MeshLambertMaterial( {color: color, side: THREE.DoubleSide} );
        const plane = new THREE.Mesh( planeGeometry, planeMaterial );
        plane.rotation.x = rotation.x || 0;
        plane.rotation.y = rotation.y || 0;
        plane.rotation.z = rotation.z || 0;
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
        const sphereMaterial = new THREE.MeshLambertMaterial( { color: color} );
        const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
        sphere.position.x = position.x;
        sphere.position.y = position.y;
        sphere.position.z = position.z;
        sphere.castShadow = true; //球投射阴影
        return sphere;
    }

    //添加坐标系
    createAxesHelper = (size) => {
        const axes = new THREE.AxesHelper(size);
        return axes;
    }

    //创建直线
    createLine = () => {
        const geometry = new THREE.Geometry();
        const point1 = new THREE.Vector3(0,0,0);
        const point2 = new THREE.Vector3(50,50,0);
        geometry.vertices = [point1, point2]
        const material = new THREE.LineBasicMaterial({color: 0xffffff, linewidth: 10});
        const line = new THREE.Line( geometry, material ) ;
        return line;
    }

    //创建二维图形
    createShape = () => {
        const shape = new THREE.Shape();
        shape.moveTo( 0, 0 );
        shape.lineTo(50, 0);
        shape.lineTo(50, 50);
        shape.lineTo(0, 50);
        shape.lineTo(0, 0);
        const geometry = new THREE.ShapeGeometry(shape);
        const material = new THREE.MeshBasicMaterial({color: 0xffffff});
        const mesh = new THREE.Mesh( geometry, material );
        return mesh;
    }
}

export default Geometry;