import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const Mesh = () => {
    const box = useRef<THREE.Mesh>(null);

    useFrame((_state, delta) => {
        if (box.current != null)
            box.current.rotation.x += delta;
    });

    return (
        <mesh ref={box}>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color={new THREE.Color(0xee3c1f)} />
        </mesh>
    );
};

export default Mesh;
