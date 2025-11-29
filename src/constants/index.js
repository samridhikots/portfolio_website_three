import { meta } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  pricewise,
  summiz,
  car,
  estate,
  threads,
  snapgram,
} from "../assets/icons";

// =============== SKILLS (From Resume) ===============
export const skills = [
  // Languages
  { imageUrl: javascript, name: "JavaScript", type: "Language" },
  { imageUrl: typescript, name: "TypeScript", type: "Language" },
  { imageUrl: html, name: "HTML", type: "Language" },
  { imageUrl: css, name: "CSS", type: "Language" },

  // No icons available — added safely
  { name: "Kotlin", type: "Language" },
  { name: "Java", type: "Language" },
  { name: "C++", type: "Language" },

  // Frameworks / Libraries
  { imageUrl: react, name: "React.js", type: "Frontend" },
  { imageUrl: nextjs, name: "Next.js", type: "Frontend" },

  // No icons available
  { name: "Three.js", type: "3D / Graphics" },
  { name: "React Three Fiber", type: "3D / Graphics" },

  { imageUrl: nodejs, name: "Node.js", type: "Backend" },
  { imageUrl: express, name: "Express.js", type: "Backend" },
  { name: "GraphQL", type: "Backend" },
  { name: "Spring Boot", type: "Backend" },
  { name: "WebSockets", type: "Real-Time" },

  // Tools
  { imageUrl: redux, name: "Redux Toolkit", type: "State Management" },
  { name: "Zustand", type: "State Management" },
  { name: "Context API", type: "State Management" },

  { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
  { imageUrl: mui, name: "Material UI", type: "Frontend" },

  // Databases
  { imageUrl: mongodb, name: "MongoDB", type: "Database" },
  { name: "SQL", type: "Database" },
  { name: "Firebase", type: "Database" },
];

// =============== EXPERIENCE (Resume-accurate) ===============
export const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Deloitte USI",
    icon: meta, // closest available image asset you have
    iconBg: "#a2d2ff",
    date: "Dec 2022 - Present",
    points: [
      "Built full-stack applications using Frontastic, React, Express, and GraphQL, improving load times by 22% and retention by 18%.",
      "Developed responsive SPA interfaces integrated with REST and GraphQL systems, improving UX and navigation speed by 35%.",
      "Created immersive 3D e-commerce experiences using Three.js, boosting user engagement by 40%.",
      "Integrated Algolia, Coveo, Contentful, Contentstack, Stripe & Adyen, reducing development time by 25%.",
      "Collaborated closely with clients to deliver high-quality solutions 20% ahead of schedule.",
    ],
  },
];

// =============== SOCIAL LINKS ===============
export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/samridhi-27",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/samridhi27/",
  },
];

// =============== PROJECTS (Resume-correct) ===============
export const projects = [
  {
    title: "Voira – Real-Time Video Calling App",
    desc: "Built a high-performance real-time video calling and messaging app using WebRTC, Socket.io, and Node.js. Supports seamless peer-to-peer communication with robust signaling, optimized media handling, and responsive UI.",
    subdesc:
      "Developed with Next.js, WebRTC, Socket.io, Express.js, and modern UI styling for low-latency video communication across devices.",
    href: "https://github.com/samridhikots",
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: "#1A1A1A",
      border: "0.2px solid #2E2E2E",
      boxShadow: "0px 0px 60px 0px rgba(0, 255, 120, 0.25)",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/next.svg" },
      { id: 2, name: "WebRTC", path: "/assets/webrtc.png" },
      { id: 3, name: "Socket.io", path: "/assets/socket-io.svg" },
      { id: 4, name: "Node.js", path: "/assets/nodejs.svg" },
    ],
  },

  {
    title: "Facpro – Academic Achievement Tracker",
    desc: "A cross-platform academic achievement tracking system for professors with seamless sync between mobile and web. Includes efficient data storage, filtering, and analytics.",
    subdesc:
      "Built using Kotlin for mobile, React.js for web, GraphQL API, Express.js backend, and SQL + MongoDB hybrid data structure for optimized querying.",
    href: "https://github.com/samridhikots",
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: "#2F2500",
      border: "0.2px solid #4A3A00",
      boxShadow: "0px 0px 60px 0px rgba(255, 200, 0, 0.3)",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "Kotlin", path: "/assets/kotlin.svg" },
      { id: 3, name: "GraphQL", path: "/assets/graphql.svg" },
      { id: 4, name: "Express.js", path: "/assets/express.svg" },
      { id: 5, name: "MongoDB", path: "/assets/mongodb.svg" },
      { id: 6, name: "SQL", path: "/assets/sql.svg" },
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
