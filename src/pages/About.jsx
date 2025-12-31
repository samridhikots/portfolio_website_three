import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import Cube from "../components/3D/Cube.jsx";
import Rings from "../components/3D/Rings.jsx";
import ReactLogo from "../components/3D/ReactLogo.jsx";
import Button from "../components/ui/Button.jsx";
import Target from "../components/3D/Target.jsx";
import CanvasLoader from "../components/core/CanvasLoader.jsx";
import DeveloperRoomCamera from "../components/3D/DeveloperRoomCamera.jsx";
import { calculateSizes } from "../constants/index.js";
import { DeveloperRoom } from "../components/3D/DeveloperRoom.jsx";
import SkillsPlayground from "../components/skills/SkillsPlayground.jsx";
import HackathonSection from "../components/achievements/AchievementsGallery.jsx";

const About = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <div className="bg-black text-white">
      <section
        className="min-h-screen w-full flex flex-col relative bg-black"
        id="home"
      >
        {/* expanded c-space */}
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3">
          <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
            Hi, I am Samridhi <span className="waving-hand">👋</span>
          </p>

          {/* expanded hero_tag + text-gray_gradient */}
          <p
            className="
            text-center 
            xl:text-6xl 
            md:text-5xl 
            sm:text-4xl 
            text-3xl 
            font-generalsans 
            font-black 
            !leading-normal
            bg-gradient-to-r 
            from-[#BEC1CF] from-60% 
            via-[#D5D8EA] via-60% 
            to-[#D5D8EA] to-100% 
            bg-clip-text 
            text-transparent
          "
          >
            Building Products & Brands
          </p>
        </div>

        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <Leva hidden />
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />

              <DeveloperRoomCamera isMobile={isMobile}>
                <DeveloperRoom
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                  rotation={[0.1, -Math.PI, 0]}
                />
              </DeveloperRoomCamera>

              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Rings position={sizes.ringPosition} />
                <Cube position={sizes.cubePosition} />
              </group>

              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>

        {/* expanded c-space */}
        <div className="absolute bottom-7 left-0 right-0 w-full z-20 sm:px-10 px-5">
          <a href="#about" className="w-fit mx-auto block">
            <Button
              name="Let's work together"
              isBeam
              containerClass="sm:w-fit w-full sm:min-w-96 flex gap-4 items-center justify-center cursor-pointer p-3 rounded-md bg-black-300 transition-all active:scale-95 text-white mx-auto;"
            />
          </a>
        </div>
      </section>
      <section className="min-h-screen w-full mt-20">
        <SkillsPlayground />
      </section>
      <section className="min-h-screen max-h-screen w-full mt-20">
        <HackathonSection />
      </section>
    </div>
  );
};

export default About;
