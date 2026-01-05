const Footer = () => {
  return (
    <footer
      className="
        bg-black text-white
        pt-7 pb-3 border-t border-black-300 
        flex justify-between items-center flex-wrap gap-5
        sm:px-10 px-5
      "
    >
      <div className="text-white-500 flex gap-2">
        <p>Developed and Maintained by Samridhi</p>
      </div>

      {/* Social Links */}
      <div className="flex gap-3">
        {/* GitHub */}
        <a
          href="https://github.com/samridhikots"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="
            w-12 h-12 rounded-full flex justify-center items-center 
            bg-black-300 border border-black-200
            hover:scale-110 transition-transform
          "
        >
          <img
            src="/assets/github.svg"
            alt="GitHub"
            className="w-1/2 h-1/2"
          />
        </a>

        {/* Twitter / X */}
        <a
          href="https://twitter.com/samridhikots1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="
            w-12 h-12 rounded-full flex justify-center items-center 
            bg-black-300 border border-black-200
            hover:scale-110 transition-transform
          "
        >
          <img
            src="/assets/twitter.svg"
            alt="Twitter"
            className="w-1/2 h-1/2"
          />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/samridhikots"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="
            w-12 h-12 rounded-full flex justify-center items-center 
            bg-black-300 border border-black-200
            hover:scale-110 transition-transform
          "
        >
          <img
            src="/assets/instagram.svg"
            alt="Instagram"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>

      <p className="text-white-500">© 2026 Samridhi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
