import * as THREE from 'three';

class Light {
    
    //点光源
    setSpotlight = () => {
        const spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set( -40, 60, -10);
        spotLight.castShadow = true; //光源投射阴影
        return spotLight;
    };

    //环境光
    setAmbientLight = (color) => {
        const ambientLight = new THREE.AmbientLight(color); 
        return ambientLight;
    }

    //平行光
    setHemiLight = () => {
        const hemiLight = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.6);
        hemiLight.position.set(0, 500, 0);
        return hemiLight;
    }
    
}

export default Light;