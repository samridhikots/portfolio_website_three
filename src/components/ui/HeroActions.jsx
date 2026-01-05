import { Download, Mail } from "lucide-react";

const HeroActions = () => {
  return (
    <div className="flex gap-16 items-center justify-center mt-8 flex-wrap">
      {/* Contact Button */}
      <a href="#contact">
        <button
          className="
            group
            relative
            flex items-center gap-2
            px-7 py-3
            rounded-full
            bg-gradient-to-b from-[#1a1f2e] to-[#0f1220]
            text-white
            font-medium
            shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]
            transition-all
            hover:-translate-y-0.5
            active:scale-95
          "
        >
          <Mail size={18} />
          Get in touch
        </button>
      </a>

      {/* Resume Button */}
      <a href="/assets/Samridhi_Resume_2026.pdf" download>
        <button
          className="
      group
      relative
      flex items-center gap-2
      px-7 py-3
      rounded-full
      bg-white
      text-black
      font-medium
      shadow-md
      hover:shadow-lg
      transition-all
      hover:-translate-y-0.5
      active:scale-95
    "
        >
          <Download size={18} />
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default HeroActions;
