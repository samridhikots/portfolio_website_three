"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import ContactForm from "../ui/ContactForm";

/* =========================================================
   CONFIG
========================================================= */

const TOTAL_GALLERIES = 4;
const TILE_GAP = 12;
const SCROLL_HEIGHT_MULTIPLIER = 600; // Increased from 400 for slower scroll

/* Utility functions */
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, min = 0, max = 1) => Math.max(min, Math.min(max, v));
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/* =========================================================
   PUZZLE GRID (FINAL FULLSCREEN LAYOUT)
========================================================= */

const PUZZLE_GRID = [
  { x: 0, y: 0, w: 66.66, h: 66.66 },
  { x: 66.66, y: 0, w: 33.33, h: 33.33 },
  { x: 66.66, y: 33.33, w: 33.33, h: 33.33 },
  { x: 0, y: 66.66, w: 33.33, h: 33.33 },
  { x: 33.33, y: 66.66, w: 33.33, h: 33.33 },
];

/* =========================================================
   GALLERY DATA
========================================================= */

const IMAGES = [
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000",
  "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=2000",
  "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=2000",
  "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2000",
  "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2000",
];

const GALLERIES = [
  {
    title: "Tokyo Nights",
    subtitle: "Neon streets and city rhythm",
    description:
      "A visual journey through Tokyo's electric nightlife — motion, color, and urban energy.",
    images: [
      { src: IMAGES[0], x: 10, y: 12, w: 32, h: 34, r: -4 },
      { src: IMAGES[1], x: 58, y: 10, w: 28, h: 38, r: 3 },
      { src: IMAGES[2], x: 14, y: 60, w: 26, h: 32, r: -3 },
      { src: IMAGES[3], x: 44, y: 64, w: 30, h: 28, r: 4 },
      { src: IMAGES[4], x: 72, y: 58, w: 22, h: 36, r: -5 },
    ],
  },
  {
    title: "Urban Motion",
    subtitle: "The city comes together",
    description:
      "Fragments of the city align into a unified rhythm of movement and geometry.",
    images: [
      { src: IMAGES[1], x: 12, y: 14, w: 34, h: 36, r: 4 },
      { src: IMAGES[4], x: 56, y: 12, w: 30, h: 32, r: -4 },
      { src: IMAGES[0], x: 16, y: 62, w: 28, h: 30, r: 3 },
      { src: IMAGES[2], x: 46, y: 64, w: 30, h: 28, r: -3 },
      { src: IMAGES[3], x: 74, y: 60, w: 22, h: 34, r: 5 },
    ],
  },
  {
    title: "City Geometry",
    subtitle: "Architecture and perspective",
    description:
      "Exploring depth, symmetry, and structure in modern urban forms.",
    images: [
      { src: IMAGES[2], x: 14, y: 12, w: 36, h: 38, r: -4 },
      { src: IMAGES[3], x: 60, y: 14, w: 30, h: 34, r: 3 },
      { src: IMAGES[1], x: 18, y: 64, w: 26, h: 30, r: 4 },
      { src: IMAGES[4], x: 46, y: 66, w: 30, h: 26, r: -3 },
      { src: IMAGES[0], x: 76, y: 58, w: 22, h: 36, r: 5 },
    ],
  },
  {
    title: "After Dark",
    subtitle: "Light, depth, atmosphere",
    description: "Where shadows fade and the city reveals its luminous core.",
    images: [
      { src: IMAGES[4], x: 12, y: 14, w: 32, h: 36, r: -5 },
      { src: IMAGES[0], x: 58, y: 12, w: 34, h: 30, r: 3 },
      { src: IMAGES[3], x: 18, y: 66, w: 28, h: 28, r: 4 },
      { src: IMAGES[1], x: 48, y: 64, w: 26, h: 30, r: -3 },
      { src: IMAGES[2], x: 76, y: 60, w: 22, h: 34, r: 5 },
    ],
  },
];

/* =========================================================
   SINGLE GALLERY SCENE
========================================================= */

function GalleryScene({ data, progress }: { data: any; progress: number }) {
  const p = easeOutCubic(progress);

  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      {/* IMAGES */}
      {data.images.map((img: any, i: number) => {
        const grid = PUZZLE_GRID[i];

        const x = lerp(img.x, grid.x, p);
        const y = lerp(img.y, grid.y, p);
        const w = lerp(img.w, grid.w, p);
        const h = lerp(img.h, grid.h, p);
        const r = lerp(img.r, 0, clamp(p * 2));

        return (
          <div
            key={i}
            className="absolute overflow-hidden rounded-xl shadow-2xl"
            style={{
              left: `calc(${x}% + ${TILE_GAP}px)`,
              top: `calc(${y}% + ${TILE_GAP}px)`,
              width: `calc(${w}% - ${TILE_GAP * 2}px)`,
              height: `calc(${h}% - ${TILE_GAP * 2}px)`,
              transform: `rotate(${r}deg)`,
            }}
          >
            <img
              src={img.src}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        );
      })}

      {/* CENTER HERO TEXT */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
        style={{
          opacity: clamp(1 - progress * 4),
          transform: `scale(${lerp(1, 0.9, progress)})`,
        }}
      >
        <h1 className="text-white text-6xl font-bold">{data.title}</h1>
        <p className="text-gray-400 mt-4 text-lg">{data.subtitle}</p>
      </div>

      {/* TEXT IN EMPTY PUZZLE SPACE */}
      <div
        className="absolute flex flex-col justify-end p-8"
        style={{
          left: "66.66%",
          top: "66.66%",
          width: "33.33%",
          height: "33.33%",
          opacity: p,
        }}
      >
        <h3 className="text-white text-2xl font-semibold leading-tight">
          {data.title}
        </h3>

        <p className="text-gray-400 mt-2 text-sm leading-relaxed">
          {data.subtitle}
        </p>

        <p className="text-gray-500 mt-4 text-sm leading-relaxed">
          {data.description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN HERO GALLERY
========================================================= */

export default function HeroGallery() {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Contact Form Section */}
      <div ref={contactRef}>
        <ContactForm />
      </div>
    </>
  );
}
