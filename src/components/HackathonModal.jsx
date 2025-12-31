"use client";

import { useEffect } from "react";

export default function HackathonModal({ open, onClose, hackathon }) {
  if (!open || !hackathon) return null;

  useEffect(() => {
    const stopWheel = (e) => e.stopPropagation();
    const modal = document.getElementById("hackathon-modal");
    modal?.addEventListener("wheel", stopWheel, { passive: false });

    return () => modal?.removeEventListener("wheel", stopWheel);
  }, []);

  return (
    <div
      className="
        fixed inset-0 z-[999]
        flex items-center justify-center
        bg-black/30 backdrop-blur-sm
        animate-fadeIn
      "
      onClick={onClose}
    >
      <div
        id="hackathon-modal"
        className="
          w-[85vw] max-w-[1100px] h-[80vh]
          bg-white/10 backdrop-blur-2xl
          border border-white/20 rounded-2xl shadow-2xl
          overflow-hidden flex
          animate-modalPop
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT — Carousel */}
        <div className="w-1/2 bg-black/20 p-4 overflow-y-auto">
          {hackathon.images.map((img, i) => (
            <div key={i} className="mb-5">
              <img
                src={img.url}
                className="rounded-xl w-full h-64 object-cover border border-white/10"
              />
              <p className="text-white/70 text-sm mt-2">{img.caption}</p>
            </div>
          ))}
        </div>

        {/* RIGHT — Details */}
        <div className="w-1/2 p-8 overflow-y-auto">
          <h1 className="text-3xl font-bold text-white">{hackathon.title}</h1>
          <p className="text-white/70 mb-4">{hackathon.date}</p>

          <span
            className="px-3 py-1 rounded-lg"
            style={{ background: hackathon.color }}
          >
            {hackathon.prize}
          </span>

          <h2 className="text-xl mt-6 text-white font-semibold">Description</h2>
          <p className="text-white/70">{hackathon.description}</p>

          <h2 className="text-xl mt-6 text-white font-semibold">Experience</h2>
          <p className="text-white/70">{hackathon.experience}</p>

          <button
            className="mt-10 px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-xl"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

/* ADD TO GLOBAL CSS (globals.css or tailwind.css):
-----------------------------------------------------

@keyframes fadeIn {
  0% { opacity: 0; backdrop-filter: blur(0px); }
  100% { opacity: 1; backdrop-filter: blur(6px); }
}
.animate-fadeIn {
  animation: fadeIn 0.35s ease forwards;
}

@keyframes modalPop {
  0% { opacity: 0; transform: translateY(40px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0px) scale(1); }
}
.animate-modalPop {
  animation: modalPop 0.35s ease forwards;
}

-----------------------------------------------------
*/
