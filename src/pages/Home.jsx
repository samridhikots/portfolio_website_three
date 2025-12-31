import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import nightSkyMusic from "../assets/night-sky.mp3";
import HomeInfo from "../components/core/HomeInfo";
import Loader from "../components/core/Loader";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane } from "../models";
import { Cloud, Float, Sparkles, Stars } from "@react-three/drei";

/* ============================
     3D ISLAND SCENE
  ============================ */

const Home = () => {
  const audioRef = useRef(new Audio(nightSkyMusic));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

    <Canvas
      className={`w-full h-screen bg-transparent ${
        isRotating ? "cursor-grabbing" : "cursor-grab"
      }`}
      camera={{ near: 0.1, far: 1000 }}
    >
      <Suspense fallback={<Loader />}>
        {/* 1. BACKGROUND: Dark Purple/Blue instead of pure black for depth */}
        <color attach="background" args={['#050511']} />
        {/* Pushing fog further back (30) so it doesn't hide the island */}
        <fog attach="fog" args={['#050511', 30, 150]} />

        {/* 2. STARS */}
        {/* <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} /> */}
        <Stars
  radius={200}
  depth={50}
  count={3000}
  factor={4}
  saturation={0}
  fade
  speed={1}
/>

        {/* 3. LIGHTING FIXES (This fixes the "Too Dark" issue) */}
        
        {/* A. Hemisphere Light: The "Base" Visibility */}
        {/* Sky is dark blue, Ground is dark green. Intensity 1 ensures we see shapes. */}
        <hemisphereLight 
          skyColor="#b1e1ff" // Light blue from top
          groundColor="#000000" // Black from bottom
          intensity={1} 
        />

        {/* B. The Moon Light (Directional) */}
        {/* Intensity increased to 4. This is your main light source. */}
        <directionalLight
          position={[5, 10, 2]} 
          intensity={4} 
          color="#a6c1ee" // Cool moonlight blue
          castShadow
        />

        {/* C. The Warm House Light (Contrast) */}
        <pointLight 
          position={[2, 4, 2]} 
          intensity={15} 
          distance={10} 
          color="#ff9000" // Orange warmth
          decay={2}
        />

        {/* 4. VISUAL EFFECTS */}
        
        {/* The Moon Mesh */}
        <Float speed={2} rotationIntensity={0} floatIntensity={1}>
          <mesh position={[5, 15, -20]}>
             <sphereGeometry args={[2, 32, 32]} />
             <meshBasicMaterial color="#ffffe0" /> 
          </mesh>
        </Float>

        {/* Fireflies/Sparkles */}
        <Sparkles 
          color="#fffff0" 
          count={40} 
          size={8} 
          scale={[12, 12, 12]} 
          position={[0, 2, 0]} 
          speed={0.4}
        />

        {/* Clouds - Adjusted opacity so they don't block the view */}
        {/* 1. ORIGINAL CLOUD (Kept exactly as requested) */}
        <Cloud 
          opacity={0.15} 
          speed={0.2} 
          width={25} 
          depth={1.5} 
          segments={20} 
          position={[0, 10, -15]} 
          color="#a0b0d0"
        />

        {/* 2. FAR LEFT CLOUD */}
        <Cloud 
          opacity={0.15} 
          speed={0.15} // Slightly s  lower for background depth
          width={30} 
          depth={2} 
          segments={20} 
          position={[-30, 10, -20]} // Far Left, slightly behind
          color="#a0b0d0"
        />

        {/* 3. FAR RIGHT CLOUD */}
        <Cloud 
          opacity={0.15} 
          speed={0.25} 
          width={30} 
          depth={2} 
          segments={20} 
          position={[32, 8, -20]} // Far Right, slightly lower
          color="#a0b0d0"
        />

        
        {/* 5. SCENE OBJECTS */}
        <Bird />
        <Island
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
          position={islandPosition}
          rotation={[0.1, 4.7077, 0]}
          scale={islandScale}
        />
        <Plane
          isRotating={isRotating}
          position={biplanePosition}
          rotation={[0, 20.1, 0]}
          scale={biplaneScale}
        />
      </Suspense>
    </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
