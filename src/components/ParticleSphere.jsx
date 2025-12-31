"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function ParticleSphere({ onImageClick }) {
  const SPHERE_RADIUS = 9;
  const IMAGE_COUNT = 5;
  const groupRef = useRef();

  const textures = useTexture([
    "https://plus.unsplash.com/premium_photo-1750075345490-1d9d908215c3?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1758445048994-d337f97acf4c?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1758637612244-08a79efb7cb7?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1758621518225-9248e65dbaee?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1758640920711-8ad5dbcb5214?w=600&auto=format&fit=crop&q=60",
  ]);

  // fix textures
  useMemo(() => {
    textures.forEach((t) => {
      t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
      t.flipY = false;
    });
  }, [textures]);

  // pre-generate positions
  const orbitingImages = useMemo(() => {
    const arr = [];
    for (let i = 0; i < IMAGE_COUNT; i++) {
      const angle = (i / IMAGE_COUNT) * Math.PI * 2;
      arr.push({
        position: [
          SPHERE_RADIUS * Math.cos(angle),
          0,
          SPHERE_RADIUS * Math.sin(angle),
        ],
        textureIndex: i % textures.length,
      });
    }
    return arr;
  }, [textures.length]);

  // rotate whole sphere
  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.004;
  });

  return (
    <group ref={groupRef} scale={[1, 1.5, 1]}>
      {orbitingImages.map((img, i) => (
        <HoverImagePlane
          key={i}
          position={img.position}
          texture={textures[img.textureIndex]}
          onClick={() => onImageClick(i)}
        />
      ))}
    </group>
  );
}

// --------------------------------
// Hover image component (Zoom effect)
// --------------------------------

function HoverImagePlane({ position, texture, onClick }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (!meshRef.current) return;

    const target = hovered ? 1.7 : 1.5; // zoom effect
    meshRef.current.scale.lerp(new THREE.Vector3(target, target, target), 0.15);
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}
