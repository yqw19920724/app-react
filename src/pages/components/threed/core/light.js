import * as THREE from 'three';

class Light {
    
    setSpotlight = () => {
        const spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set( -40, 60, -10);
        spotLight.castShadow = true; //光源投射阴影
        return spotLight;
    };
    
}

export default Light;