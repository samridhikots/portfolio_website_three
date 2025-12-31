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

      <div className="flex gap-3">
        <div
          className="
            w-12 h-12 rounded-full flex justify-center items-center 
            bg-black-300 border border-black-200
          "
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>

        <div
          className="
            w-12 h-12 rounded-full flex justify-center items-center 
            bg-black-300 border border-black-200
          "
        >
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </div>

        <div
          className="
            w-12 h-12 rounded-full flex justify-center items-center 
            bg-black-300 border border-black-200
          "
        >
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </div>
      </div>

      <p className="text-white-500">© 2026 Samridhi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
