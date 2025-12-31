import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

import { projects } from "../constants/index.js";
import CanvasLoader from "../components/core/CanvasLoader.jsx";
import ProjectsComputer from "../components/3D/ProjectsComputer.jsx";

/* ============================
     PROJECTS PAGE
  ============================ */

const projectCount = projects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedProjectIndex]);

  const currentProject = projects[selectedProjectIndex];

  return (
    <div className="text-white min-h-screen w-full flex flex-col relative bg-black">
      <section className="sm:px-10 mt-10 mx-10 p-20">
        <p className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
          Project Work
        </p>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
          <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
            <div className="absolute top-0 right-0">
              <img
                src={currentProject.spotlight}
                alt="spotlight"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            <div
              className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
              style={currentProject.logoStyle}
            >
              <img
                className="w-10 h-10 shadow-sm"
                src={currentProject.logo}
                alt="logo"
              />
            </div>

            <div className="flex flex-col gap-5 text-white-600 my-5">
              <p className="text-white text-2xl font-semibold animatedText">
                {currentProject.title}
              </p>

              <p className="animatedText">{currentProject.desc}</p>
              <p className="animatedText">{currentProject.subdesc}</p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-5">
              {/* TAGS */}
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="relative group w-10 h-10 rounded-md p-2
                   bg-neutral-100 bg-opacity-10 backdrop-blur-lg
                   flex justify-center items-center"
                  >
                    <img src={tag.path} alt={tag.name} />

                    <span
                      className="
                        absolute -bottom-9 left-1/2 -translate-x-1/2
                        whitespace-nowrap
                        rounded-md bg-black px-2 py-1 text-xs text-white
                        opacity-0 scale-95
                        transition-all duration-200
                        group-hover:opacity-100 group-hover:scale-100
                        pointer-events-none
                      "
                    >
                      {tag.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* LIVE LINK */}
              <a
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 cursor-pointer text-white-600 pointer-events-auto z-10"
              >
                <p>Check Live Site</p>
                <img
                  src="/assets/arrow-up.png"
                  alt="arrow"
                  className="w-3 h-3"
                />
              </a>
            </div>

            <div className="flex justify-between items-center mt-7">
              <button
                className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
                onClick={() => handleNavigation("previous")}
              >
                <img src="/assets/left-arrow.png" alt="left arrow" />
              </button>

              <button
                className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
                onClick={() => handleNavigation("next")}
              >
                <img
                  src="/assets/right-arrow.png"
                  alt="right arrow"
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>

          <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group
                    scale={2}
                    position={[0, -3, 0]}
                    rotation={[0, -0.1, 0]}
                  >
                    <ProjectsComputer texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
