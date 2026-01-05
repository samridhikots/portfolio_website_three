import {
  FaBriefcase,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";
import React from "react";

const timelineData = [
  // ================= CURRENT EXPERIENCE =================
  {
    title: "Full Stack Web Developer",
    date: "Dec 2022 – Present",
    icon: <FaBriefcase className="h-6 w-6 text-emerald-500" />,
    content: (
      <div className="rounded-lg bg-white/5 p-5 shadow-lg backdrop-blur-sm dark:bg-neutral-900/50">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Deloitte USI
        </h3>
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
          Hyderabad, Telangana, India
        </p>

        {/* ATS-Optimized Experience Bullets */}
        <ul className="mt-4 space-y-3 pl-5 text-neutral-800 dark:text-neutral-200">
          <li>
            Developed{" "}
            <span className="font-semibold text-emerald-500">
              multiple Three.js applications
            </span>{" "}
            over 2+ years, including a{" "}
            <strong>photorealistic 3D e-commerce platform</strong> with
            multi-camera views, realistic lighting, and personalized product
            visualization.
          </li>

          <li>
            Implemented{" "}
            <span className="font-semibold text-emerald-500">
              performance optimization techniques
            </span>{" "}
            including instancing, texture compression, and progressive loading,
            improving load times by <strong>45%</strong> while maintaining smooth
            frame rates.
          </li>

          <li>
            Built{" "}
            <span className="font-semibold text-emerald-500">
              responsive, modular front-end architectures
            </span>{" "}
            using React, TypeScript, Zustand/Redux, and Tailwind CSS, ShadCN, and
            Material UI.
          </li>

          <li>
            Engineered{" "}
            <span className="font-semibold text-emerald-500">
              GraphQL APIs and backend services
            </span>{" "}
            using Express, implementing efficient query patterns that reduced
            API response times by <strong>25%</strong>.
          </li>

          <li>
            Delivered high-performance SPA experiences with REST and GraphQL
            integrations, achieving{" "}
            <strong>35% faster navigation</strong> and improved Core Web Vitals.
          </li>

          <li>
            Ensured{" "}
            <span className="font-semibold text-emerald-500">
              mobile, tablet, and accessibility compliance
            </span>{" "}
            across deliverables, achieving strong Lighthouse performance and
            accessibility scores.
          </li>

          <li>
            Worked on{" "}
            <span className="font-semibold text-emerald-500">
              two concurrent 3D web applications
            </span>{" "}
            — acting as a sole developer (frontend, backend, 3D, DevOps) on one
            project while collaborating cross-functionally on another.
          </li>
        </ul>

        {/* Hackathons & Achievements */}
        <div className="mt-6 rounded-lg bg-emerald-50 p-4 dark:bg-emerald-500/5">
          <div className="flex items-center gap-2">
            <FaCode className="text-emerald-500" />
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
              Hackathons & Achievements
            </h4>
          </div>

          <ul className="mt-3 space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            <li>
              <span className="font-semibold text-emerald-500">
                Second Runner-Up – Deloitte USI 36-Hour Hackathon
              </span>
              , competing among <strong>200 teams</strong> and{" "}
              <strong>800+ participants</strong>.
            </li>

            <li>
              Built and presented{" "}
              <span className="font-semibold text-emerald-500">
                production-ready solutions
              </span>{" "}
              under strict time constraints with focus on scalability,
              performance, and real-world feasibility.
            </li>

            <li>
              Collaborated with cross-functional teams to deliver{" "}
              <span className="font-semibold text-emerald-500">
                client-aligned, innovative outcomes
              </span>{" "}
              evaluated by senior technical leadership.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  // ================= EDUCATION: MCA =================
  {
    title: "Master of Computer Applications (MCA)",
    date: "Expected 2026",
    icon: <FaGraduationCap className="h-6 w-6 text-cyan-500" />,
    content: (
      <div className="rounded-lg bg-white/5 p-5 shadow-lg backdrop-blur-sm dark:bg-neutral-900/50">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Vellore Institute of Technology, Chennai
        </h3>

        <p className="mt-2 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300">
          CGPA: 8.0
        </p>

        <ul className="mt-4 space-y-3 pl-5 text-neutral-800 dark:text-neutral-200">
          <li>
            Advanced coursework in{" "}
            <span className="font-semibold text-cyan-500">
              software engineering, system design, and distributed systems
            </span>
            .
          </li>
          <li>
            Strengthened backend and full-stack expertise through hands-on
            projects using modern frameworks and databases.
          </li>
        </ul>
      </div>
    ),
  },

  // ================= EDUCATION: BCA =================
  {
    title: "Bachelor of Computer Applications (BCA)",
    date: "2019 – 2022",
    icon: <FaGraduationCap className="h-6 w-6 text-cyan-500" />,
    content: (
      <div className="rounded-lg bg-white/5 p-5 shadow-lg backdrop-blur-sm dark:bg-neutral-900/50">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Maharaja Surajmal Institute, Delhi (GGSIPU)
        </h3>

        <p className="mt-2 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300">
          CGPA: 9.74
        </p>

        <ul className="mt-4 space-y-3 pl-5 text-neutral-800 dark:text-neutral-200">
          <li>
            Built a strong foundation in{" "}
            <span className="font-semibold text-cyan-500">
              programming, data structures, and algorithms
            </span>
            .
          </li>
          <li>
            Developed academic projects using{" "}
            <span className="font-semibold text-cyan-500">
              Java, Python, and web technologies
            </span>
            , focusing on scalable problem-solving.
          </li>
          <li>
            Studied{" "}
            <span className="font-semibold text-cyan-500">
              databases, networking, and software engineering
            </span>{" "}
            principles for real-world applications.
          </li>
        </ul>

        {/* Hackathons & Achievements */}
        <div className="mt-6 rounded-lg bg-cyan-50 p-4 dark:bg-cyan-500/5">
          <div className="flex items-center gap-2">
            <FaCode className="text-cyan-500" />
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
              Hackathons & Achievements
            </h4>
          </div>

          <ul className="mt-3 space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
            <li>
              <span className="font-semibold text-cyan-500">
                Smart India Hackathon 2022 – Winner
              </span>
              , awarded by <strong>Government of India</strong>, among{" "}
              <strong>75,000+ participants</strong>.
            </li>

            <li>
              <span className="font-semibold text-cyan-500">
                SAP Semicolon 4.0 Hackathon – Winner
              </span>
              , issued by <strong>SAP Labs India</strong>, winning among{" "}
              <strong>150+ competing teams</strong>.
            </li>

            <li>
              Demonstrated expertise in{" "}
              <span className="font-semibold text-cyan-500">
                system design, full-stack development, and collaborative
                problem-solving
              </span>{" "}
              through national-level hackathons.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default timelineData;
