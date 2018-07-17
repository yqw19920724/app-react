import * as THREE from 'three';

class Light {
    
    //点光源
    setSpotlight = ({color, position}) => {
        const spotLight = new THREE.SpotLight(color);
        spotLight.position.set( position.x, position.y, position.z);
        spotLight.castShadow = true; //光源投射阴影
        return spotLight;
    };

    //环境光
    setAmbientLight = (color) => {
        const ambientLight = new THREE.AmbientLight(color); 
        return ambientLight;
    }

    //平行光
    setHemiLight = ({ color , position }) => {
        const hemiLight = new THREE.HemisphereLight(color.skyColor, color.groundColor, color.intensity);
        hemiLight.position.set(position.x, position.y, position.z);
        return hemiLight;
    }
    
}

export default Light;