import React, { useState } from "react";
import {Suspense} from "react"
import {Canvas,useLoader} from "@react-three/fiber";
import {Environment, MeshPortalMaterial, OrbitControls,RoundedBox,Stars} from "@react-three/drei";
import {TextureLoader}   from "three/src/loaders/TextureLoader";
import * as THREE from "three";


function Boxthree( {texture,...props}) {
    const [state,setstate] = useState(false);
    const colormap = useLoader(TextureLoader,texture);
    return ( 
        <Canvas className="canvas" shadows camera={{position:[0,0,10] ,fov:30}}>
            <group {...props}>
            <OrbitControls/>
            <ambientLight intensity={1} />
        
            <directionalLight position={[-2,5,2]} intensity={1} />
            <Suspense fallback={null}>
                <RoundedBox args={[3,3,0.1]} onClick={()=>setstate(!state)}>
                    <MeshPortalMaterial side={THREE.DoubleSide} blend={state===true ? 1 : 0}>
                    <ambientLight intensity={3} />
                    <mesh>
                            <sphereGeometry attach="geometry" args={[state===true ? 10 :2 ,64,64]}/>
                            <meshStandardMaterial map={colormap} side={THREE.BackSide}/>
                    </mesh>
                    </MeshPortalMaterial>
                </RoundedBox>
            
            </Suspense>
            </group>
        </Canvas>
     );
}

export default Boxthree;
