import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Mesh from './mesh';

const Scene = () => {
    return (
        <section className=' h-screen w-screen flex flex-row justify-center items-center'>
            <Canvas>
                <OrbitControls />
                <perspectiveCamera position={[0, 0, 2]} fov={75} aspect={window.innerWidth / window.innerHeight} far={10} near={0.1} />
                <directionalLight position={[1, 2, 2]} color={new THREE.Color(0xffffff)} />
                <Mesh />
            </Canvas>
        </section>
    )
}

export default Scene;
