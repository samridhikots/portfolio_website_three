"use client";

import Footer from "../ui/Footer";
import HeroGallery from "./HeroGallery";

const hackathons = [
  {
    id: "ai",
    title: "AI Innovation Challenge",
    date: "Dec 2024",
    status: "winner",
    color: "#3B82F6",
    prize: "🏆 1st Place",
    description:
      "Built an AI-powered code review assistant that reduces review time by 60%.",
    experience: "ML pipeline, realtime UI, evaluation tooling.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        caption: "Dashboard prototype",
      },
      {
        url: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
        caption: "Evaluation graphs",
      },
      {
        url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        caption: "Team demo",
      },
    ],
  },
];

export default function HackathonSection() {
  return (
    <>
      <HeroGallery />
      <Footer />
    </>
  );
}
