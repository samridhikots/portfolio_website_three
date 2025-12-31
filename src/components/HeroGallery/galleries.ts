
const IMAGES = [
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2388",
  "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=2264",
  "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=2368",
  "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700",
  "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=700",
];


export const GALLERY_SECTIONS = [
  {
    id: "demo-1a",
    title: "Tokyo Nights",
    subtitle: "Neon streets and city rhythm",
    images: [
      { src: IMAGES[0], startX: 15, startY: 18, startW: 38, startH: 40, rotate: -3 },
      { src: IMAGES[1], startX: 62, startY: 16, startW: 30, startH: 42, rotate: 2 },
      { src: IMAGES[2], startX: 18, startY: 62, startW: 28, startH: 36, rotate: -2 },
      { src: IMAGES[3], startX: 52, startY: 64, startW: 34, startH: 32, rotate: 3 },
      { src: IMAGES[4], startX: 78, startY: 58, startW: 22, startH: 38, rotate: -4 },
    ],
  },

  {
    id: "demo-1b",
    title: "Urban Motion",
    subtitle: "The city comes together",
    images: [
      { src: IMAGES[1], startX: 20, startY: 20, startW: 34, startH: 42, rotate: 3 },
      { src: IMAGES[4], startX: 60, startY: 18, startW: 30, startH: 38, rotate: -3 },
      { src: IMAGES[0], startX: 22, startY: 64, startW: 28, startH: 36, rotate: 2 },
      { src: IMAGES[2], startX: 52, startY: 62, startW: 34, startH: 32, rotate: -2 },
      { src: IMAGES[3], startX: 80, startY: 60, startW: 20, startH: 38, rotate: 4 },
    ],
  },

  {
    id: "demo-2a",
    title: "City Geometry",
    subtitle: "Architecture and perspective",
    images: [
      { src: IMAGES[2], startX: 16, startY: 18, startW: 40, startH: 42, rotate: -3 },
      { src: IMAGES[3], startX: 64, startY: 16, startW: 32, startH: 38, rotate: 2 },
      { src: IMAGES[1], startX: 20, startY: 64, startW: 26, startH: 36, rotate: 3 },
      { src: IMAGES[4], startX: 50, startY: 62, startW: 34, startH: 32, rotate: -2 },
      { src: IMAGES[0], startX: 82, startY: 58, startW: 22, startH: 38, rotate: 4 },
    ],
  },

  {
    id: "demo-2b",
    title: "After Dark",
    subtitle: "Light, depth, atmosphere",
    images: [
      { src: IMAGES[4], startX: 18, startY: 20, startW: 32, startH: 42, rotate: -4 },
      { src: IMAGES[0], startX: 62, startY: 18, startW: 36, startH: 38, rotate: 2 },
      { src: IMAGES[3], startX: 22, startY: 66, startW: 30, startH: 34, rotate: 3 },
      { src: IMAGES[1], startX: 52, startY: 64, startW: 28, startH: 36, rotate: -2 },
      { src: IMAGES[2], startX: 80, startY: 60, startW: 20, startH: 38, rotate: 4 },
    ],
  },
];
