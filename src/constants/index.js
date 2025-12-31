// =============== PROJECTS ===============
export const projects = [
  // 📹 Voira
  {
    title: "Voira – Real-Time Video Calling App",
    desc: "A Google Meet–style real-time video calling platform with integrated chat for seamless collaboration.",
    subdesc:
      "Built using WebRTC for peer-to-peer media streaming, Socket.io for signaling, and Next.js with modern UI patterns.",
    href: "https://voira.netlify.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/voira.png",
    logoStyle: {
      backgroundColor: "#0B0F0D",
      border: "0.5px solid rgba(0, 255, 136, 0.25)",
      boxShadow: "0px 0px 60px rgba(0, 255, 136, 0.35)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/nextjs.svg" },
      { id: 2, name: "Node.js", path: "/assets/nodejs.svg" },
      { id: 3, name: "Socket.io", path: "/assets/socketio.svg" },
      { id: 4, name: "Tailwind", path: "/assets/tailwindcss.png" },
    ],
  },

  // 🎸 Guitar Configurator

  {
    title: "3D Guitar Configurator",
    desc: "An interactive 3D guitar configurator allowing users to customize materials, colors, and finishes in real time.",
    subdesc:
      "Built with Three.js and React Three Fiber, featuring smooth camera transitions, material switching, and realistic lighting.",
    href: "https://guitarconfigurator.netlify.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/guitar.gif",
    logoStyle: {
      backgroundColor: "#0A1020",
      border: "0.5px solid rgba(80, 140, 255, 0.3)",
      boxShadow: "0px 0px 60px rgba(80, 140, 255, 0.4)",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/nextjs.svg" },
      { id: 2, name: "React Three Fiber", path: "/assets/three-js.png" },
      { id: 3, name: "React", path: "/assets/react.svg" },
      { id: 4, name: "Framer", path: "/assets/framer.png" },
      { id: 5, name: "Tailwind", path: "/assets/tailwindcss.png" },
      { id: 6, name: "Typescript", path: "/assets/typescript.png" },
    ],
  },

  // 🎸 Air Guitar
  {
    title: "Air Guitar – Gesture Controlled Instrument",
    desc: "Play guitar in the air using real-time hand gesture recognition powered by computer vision.",
    subdesc:
      "Uses MediaPipe Hands for hand tracking, where the left hand controls chords and the right hand strums strings in a 3D environment.",
    href: "https://air-guitar-pro.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#140A1F",
      border: "0.5px solid rgba(190, 120, 255, 0.3)",
      boxShadow: "0px 0px 60px rgba(190, 120, 255, 0.45)",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/nextjs.svg" },
      { id: 2, name: "React Three Fiber", path: "/assets/three-js.png" },
      { id: 3, name: "React", path: "/assets/react.svg" },
      { id: 4, name: "Typescript", path: "/assets/typescript.png" },
      { id: 5, name: "Tailwind", path: "/assets/tailwindcss.png" },
    ],
  },

  // ✨ Particles App
  {
    title: "Particles – Vision-Based Surreal Experience",
    desc: "An experimental visual experience combining hand gestures with immersive particle-based environments.",
    subdesc:
      "Implements zoom, depth, and tone changes using MediaPipe Hands and Three.js to create a surreal, reactive scene.",
    href: "https://github.com/samridhikots",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/particles.gif",
    logoStyle: {
      backgroundColor: "#06141A",
      border: "0.5px solid rgba(70, 220, 220, 0.3)",
      boxShadow: "0px 0px 60px rgba(70, 220, 220, 0.4)",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/nextjs.svg" },
      { id: 2, name: "React three fiber", path: "/assets/three-js.png" },
      { id: 2, name: "Typescript", path: "/assets/typescript.png" },
    ],
  },

  // 📊 Facpro
  {
    title: "Facpro – Academic Achievement Tracker",
    desc: "A cross-platform academic tracking system designed for professors to manage and analyze student performance.",
    subdesc:
      "Built with Kotlin for mobile, React for web, GraphQL APIs, and a hybrid SQL + MongoDB architecture.",
    href: "https://facpro-msi.web.app/",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/facpro.svg",
    logoStyle: {
      backgroundColor: "#1C170A",
      border: "0.5px solid rgba(255, 200, 61, 0.3)",
      boxShadow: "0px 0px 60px rgba(255, 200, 61, 0.35)",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "React", path: "/assets/react.svg" },
      { id: 2, name: "Kotlin", path: "/assets/kotlin.svg" },
      { id: 3, name: "GraphQL", path: "/assets/graphql.svg" },
      { id: 4, name: "MongoDB", path: "/assets/mongodb.svg" },
      { id: 5, name: "SQL", path: "/assets/sqlite.svg" },
    ],
  },
];

// ===== 3D Scene Calculations (unchanged) =====
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};
